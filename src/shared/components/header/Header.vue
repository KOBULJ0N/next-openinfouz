<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Header-Container dark:bg-background-dark">
    <div class="top-header-compontnet flex gap-2 justify-between items-center">
      <Logo />
      <SearchInput />
      <LanguageSelector @change-lang="changeLang" />

      <ThemeSwitcher v-model:isDark="isDark" />
    </div>
    <el-divider></el-divider>
    <!-- <NavigationComponent /> -->
  </div>
</template>

<script setup>
import { i18n } from "@/i18n/translate";
import { ref, watch } from "vue";
import Logo from "./Logo.vue";
import SearchInput from "./SearchInput.vue";
import LanguageSelector from "./LanguageSelector.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

// const { t } = useI18n();
const isDark = ref(false);
const changeLang = lang => {
  i18n.global.locale.value = lang;
};

watch(isDark, newValue => {
  document.documentElement.classList.toggle("dark", newValue); // Apply dark class
  console.log("isDark", newValue);
});
</script>

<style scoped>
.Header-Container {
  background: #0567d1;
  color: white;
  padding: 10px 80px;
}

.lang-icon {
  width: 26px;
  height: 26px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
}
</style>
