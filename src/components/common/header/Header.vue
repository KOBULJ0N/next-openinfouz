<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Header-Container dark:bg-background-dark">
    <div class="top-header-compontnet flex gap-2 justify-between items-center">
      <div class="logo-container flex items-center gap-2">
        <img src="@/assets/icons/logo 1.png" alt="" />
        <p class="font-medium text-white text-xl uppercase font-semibold">Openinfo.uz</p>
      </div>
      <el-input ref="searchValue" size="small" style="width: 25%" :placeholder="t('header.Search')">
        <template #suffix>
          <el-icon class="el-input__icon" size="18">
            <Search />
          </el-icon>
        </template>
      </el-input>
      <div class="lang-container">
        <a class="enter-profile" href="#" target="_blank"> {{ t("header.personal_cabinet") }}</a>
        <a class="enter-profile" :href="`https://invest.openinfo.uz/`" target="_blank"
          >/ {{ t("header.investor_cabinet") }}
        </a>

        <el-button @click="toggleTheme">
          {{ isDark ? "Switch to Light Theme" : "Switch to Dark Theme" }}
        </el-button>
        <img
          class="lang-icon"
          src="/src/assets/icons/language_images/ru.png"
          @click="changeLang('ru')"
          alt="lang-img"
        />
        <img
          class="lang-icon"
          src="/src/assets/icons/language_images/uz.png"
          @click="changeLang('uz')"
          alt="lang-img"
        />
        <img
          class="lang-icon"
          src="/src/assets/icons/language_images/en.png"
          @click="changeLang('en')"
          alt="lang-img"
        />
      </div>
    </div>
    <el-divider></el-divider>
    <!-- <NavigationComponent /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import { i18n } from "@/i18n/translate";

const searchValue = ref("");
const { t } = useI18n();

import { useTheme } from "@/composables/useTheme";
const { isDark, toggleTheme } = useTheme();

const changeLang = lang => {
  i18n.global.locale.value = lang;
};
</script>

<style scoped>
.Header-Container {
  background: #0567d1;
  color: white;
  padding: 10px 80px;
}

.lang-container {
  display: flex;
  gap: 10px;
  padding: 5px 0;
  align-items: center;
}

.lang-icon {
  width: 26px;
  height: 26px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
}
</style>
