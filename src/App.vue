<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <div :class="['app-wrapper', { dark: isDark }]">
      <router-view />
    </div>
  </el-config-provider>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useCssVar } from "@vueuse/core";
import { ElConfigProvider } from "element-plus";

const isDark = ref(false);

// Theme configuration
const themeConfig = {
  dark: {
    // Common colors
    "--el-color-primary": "#0EA5E9",
    "--el-color-success": "#22C55E",
    "--el-color-warning": "#F59E0B",
    "--el-color-danger": "#EF4444",
    "--el-color-info": "#0EA5E9",

    // Background colors
    "--el-bg-color": "#0F172A",
    "--el-bg-color-page": "#020617",
    "--el-bg-color-overlay": "#1E293B",

    // Text colors
    "--el-text-color-primary": "#E2E8F0",
    "--el-text-color-regular": "#CBD5E1",
    "--el-text-color-secondary": "#94A3B8",

    // Border colors
    "--el-border-color": "#334155",
    "--el-border-color-light": "#475569",

    // Component colors
    "--el-fill-color-blank": "#1E293B",
    "--el-mask-color": "rgba(0, 0, 0, 0.5)",

    // Switch specific colors
    "--el-switch-on-color": "#0EA5E9",
    "--el-switch-off-color": "#64748B",
  },
  light: {
    // Common colors
    "--el-color-primary": "#0EA5E9",
    "--el-color-success": "#22C55E",
    "--el-color-warning": "#F59E0B",
    "--el-color-danger": "#EF4444",
    "--el-color-info": "#0EA5E9",

    // Using Element Plus default light theme values
    "--el-bg-color": "#ffffff",
    "--el-bg-color-page": "#f2f3f5",
    "--el-bg-color-overlay": "#ffffff",

    "--el-text-color-primary": "#303133",
    "--el-text-color-regular": "#606266",
    "--el-text-color-secondary": "#909399",

    "--el-border-color": "#dcdfe6",
    "--el-border-color-light": "#e4e7ed",

    "--el-fill-color-blank": "#ffffff",
    "--el-mask-color": "rgba(255, 255, 255, 0.5)",

    // Switch specific colors
    "--el-switch-on-color": "#0EA5E9",
    "--el-switch-off-color": "#A3A3A3",
  },
};

// Apply theme function
const applyTheme = theme => {
  Object.entries(theme).forEach(([key, value]) => {
    useCssVar(key).value = value;
  });
};

// Watch for theme changes
watch(isDark, newValue => {
  applyTheme(newValue ? themeConfig.dark : themeConfig.light);
  // Save theme preference
  localStorage.setItem("theme", newValue ? "dark" : "light");
});

// Initialize theme
onMounted(() => {
  // Check saved theme preference first
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  } else {
    // Fall back to system preference
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme(isDark.value ? themeConfig.dark : themeConfig.light);
});

// Watch for system theme changes if no saved preference
if (!localStorage.getItem("theme")) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    isDark.value = e.matches;
  });
}
</script>

<style>
.app-wrapper {
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.dark {
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
}

/* Global styles for Element Plus components in dark mode */
.dark .el-card {
  --el-card-bg-color: var(--el-bg-color-overlay);
}

.dark .el-button--default {
  --el-button-bg-color: var(--el-bg-color-overlay);
  --el-button-border-color: var(--el-border-color);
  --el-button-hover-bg-color: var(--el-border-color);
  --el-button-hover-border-color: var(--el-border-color-light);
}

.dark .el-input__wrapper {
  background-color: var(--el-bg-color-overlay);
}
</style>
