<template>
  <aside class="aside">
    <div
      class="flex sidebar-item-first items-center justify-center p-4 rounded hover:bg-gray-200 transition"
      @click="setActiveContainer('Котировки')"
    >
      <img src="../../../../assets/icons/stock-sidebar/котировки.svg" alt="" />
      <span class="ml-2 hidden md:block text-sm block">Котировки</span>
    </div>
    <div
      class="flex sidebar-item items-center justify-center p-4 rounded hover:bg-gray-200 transition"
      @click="setActiveContainer('Список наблюдения')"
    >
      <img src="../../../../assets/icons/stock-sidebar/cписок-наблюдения.svg" alt="" />
      <span class="ml-2 hidden md:block text-sm block">Список наблюдения</span>
    </div>
    <div
      class="flex sidebar-item items-center justify-center p-4 rounded hover:bg-gray-200 transition"
      @click="setActiveContainer('Уведомления')"
    >
      <img src="../../../../assets/icons/stock-sidebar/уведомления.svg" alt="" />
      <span class="ml-2 hidden md:block text-sm block">Уведомления</span>
    </div>
    <div
      class="flex sidebar-item items-center justify-center p-4 rounded hover:bg-gray-200 transition"
      @click="setActiveContainer('Каталог брокеров')"
    >
      <img src="../../../../assets/icons/stock-sidebar/каталог-брокеров.svg" alt="" />
      <span class="ml-2 hidden md:block text-sm block">Каталог брокеров</span>
    </div>
    <div
      class="flex sidebar-item items-center justify-center p-4 rounded hover:bg-gray-200 transition"
      @click="setActiveContainer('Последние новости')"
    >
      <img src="../../../../assets/icons/stock-sidebar/последние-новости.svg" alt="" />
      <span class="ml-2 hidden md:block text-sm block">Последние новости</span>
    </div>
    <div
      class="flex sidebar-item items-center justify-center p-4 rounded hover:bg-gray-200 transition"
      @click="setActiveContainer('Инструменты')"
    >
      <img src="../../../../assets/icons/stock-sidebar/инструменты.svg" alt="" />
      <span class="ml-2 hidden md:block text-sm block">Инструменты</span>
    </div>
    <div
      class="flex sidebar-item items-center justify-center p-4 rounded hover:bg-gray-200 transition"
      @click="setActiveContainer('Тариф')"
    >
      <img src="../../../../assets/icons/stock-sidebar/тарифф.svg" alt="" />
      <span class="ml-2 hidden md:block text-sm block">Тариф</span>
    </div>
  </aside>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["set-active-container"]);
const setActiveContainer = container => {
  emit("set-active-container", container);
};
</script>
<style>
.aside {
  width: 72px;
  background-color: #f2f7fc;
  color: black;
  border: 1px solid #ecedef;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
}
.block {
  display: block;
}
.sidebar-item-first {
  margin: 24px 0px;
}
.sidebar-item {
  margin: 33px 0px;
}
</style>
