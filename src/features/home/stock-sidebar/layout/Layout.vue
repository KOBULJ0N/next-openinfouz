<template>
  <div class="stock-saidbar">
    <main class="">
      <div v-if="activeContainer === 'Котировки'">
        <QuotesContainer />
      </div>
      <div v-if="activeContainer === 'Список наблюдения'">
        <WatchlistContainer />
      </div>
      <div v-if="activeContainer === 'Уведомления'">
        <NotificationsContainer />
      </div>
      <div v-if="activeContainer === 'Каталог брокеров'">
        <BrokersCatalogContainer />
      </div>
      <div v-if="activeContainer === 'Последние новости'">
        <LatestNewsContainer />
      </div>
      <div v-if="activeContainer === 'Инструменты'">
        <ToolsContainer />
      </div>
      <div v-if="activeContainer === 'Тариф'">
        <TariffContainer />
      </div>
    </main>
    <Sidebar class="fixed-aside" @set-active-container="activeContainer = $event" />
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import QuotesContainer from "../containers/QuotesContainer.vue";
import WatchlistContainer from "../containers/WatchlistContainer.vue";
import NotificationsContainer from "../containers/NotificationsContainer.vue";
import BrokersCatalogContainer from "../containers/BrokersCatalogContainer.vue";
import LatestNewsContainer from "../containers/LatestNewsContainer.vue";
import ToolsContainer from "../containers/ToolsContainer.vue";
import TariffContainer from "../containers/TariffContainer.vue";
import { ref } from "vue";

const activeContainer = ref("Котировки");
</script>

<style>
.stock-saidbar {
  width: 391px;
  height: 100vh;
  position: relative;
  background-color: aqua;
}

.fixed-aside {
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
}

.main {
  margin-right: 72px;
}
</style>
