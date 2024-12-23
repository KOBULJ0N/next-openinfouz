<template>
  <div class="lang-container">
    <a class="enter-profile" href="#" target="_blank"> {{ t("header.personal_cabinet") }}</a>
    <a class="enter-profile" :href="`https://invest.openinfo.uz/`" target="_blank">
      / {{ t("header.investor_cabinet") }}
    </a>

    <img
      class="lang-icon"
      src="/src/assets/icons/language_images/ru.png"
      @click="$emit('change-lang', 'ru')"
      alt="RU"
    />
    <img
      class="lang-icon"
      src="/src/assets/icons/language_images/uz.png"
      @click="$emit('change-lang', 'uz')"
      alt="UZ"
    />
    <img
      class="lang-icon"
      src="/src/assets/icons/language_images/en.png"
      @click="$emit('change-lang', 'en')"
      alt="EN"
    />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.lang-container {
  display: flex;
  gap: 10px;
  padding: 5px 0;
  align-items: center;
  position: relative;
}

.lang-icon {
  width: 26px;
  height: 26px;
  cursor: pointer;
}
</style>
