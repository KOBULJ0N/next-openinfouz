<template>
  <el-switch
    v-model="darkMode"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    class="theme-switch"
    @change="toggleTheme"
  />
</template>

<script setup>
import { ref, watch } from "vue";
import { Moon, Sunny } from "@element-plus/icons-vue";

const props = defineProps({
  isDark: { type: Boolean, required: true },
});

const emit = defineEmits(["update:isDark"]);

const darkMode = ref(props.isDark);

watch(
  () => props.isDark,
  newValue => {
    darkMode.value = newValue; // Sync with parent
  }
);

const toggleTheme = value => {
  emit("update:isDark", value); // Emit change to parent
  console.log("darkMode", darkMode.value);
};
</script>

<style scoped>
.theme-switch {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 2001;
}
</style>
