<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="relative bg-cover bg-center text-white py-8 footer-back">
    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>

    <!-- Content -->
    <div class="relative px-4 md:px-8 w-screen">
      <div class="flex flex-col md:flex-row justify-between items-start">
        <!-- Left Section -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="font-bold text-lg w-full md:w-3/4">
            ЕДИНЫЙ ПОРТАЛ КОРПОРАТИВНОЙ ИНФОРМАЦИИ НАЦИОНАЛЬНОГО АГЕНТСТВА ПЕРСПЕКТИВНЫХ ПРОЕКТОВ РЕСПУБЛИКИ УЗБЕКИСТАН
          </h3>
          <ul class="space-y-2">
            <li class="flex items-center justify-center md:justify-start">
              <img class="tg-icon" src="../../assets/icons/old_icons/telegram.svg" alt="tg-icon" />
              <a href="https://t.me/openinfouz_bot" class="ml-2 hover:underline"> openinfouz_bot </a>
            </li>
            <li class="flex items-center justify-center md:justify-start">
              <img class="head-icon" src="../../assets/icons/old_icons/phone-call-white.svg" />
              <span class="ml-2">+998 71 231 79 09</span>
            </li>
            <li class="flex items-center justify-center md:justify-start">
              <img class="head-icon" src="../../assets/icons/old_icons/map.svg" />
              <span class="ml-2">г.Ташкент, Мирабадский район, улица Нукус, 22, 100015</span>
            </li>
          </ul>
        </div>

        <!-- Right Section -->
        <div class="space-y-4 text-center md:text-right mt-8 md:mt-0">
          <ul class="space-y-2">
            <li>
              <span>Телефон модератора: +998 71 231 18 75</span>
            </li>
            <li>
              <span>Электронная почта модератора:</span>
              <span class="ml-2">info@napp.uz</span>
            </li>
            <li>
              <span>Модератор: Национальное агентство перспективных проектов Республики Узбекистан</span>
            </li>
            <li>
              <span>Техническая поддержка: Информационно-ресурсный центр фондового рынка</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>При использовании материалов опубликованных на данном сайте, ссылка на openinfo.uz обязательна.</p>
        <p>Все права защищены © 2015 - 2024</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-back {
  background-image: url("../../assets/images/stockmarket.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: fit-content;
  background-repeat: no-repeat;
}

.tg-icon {
  width: 28px;
}
</style>
