<template>
  <div class="stock-sidebar">
    <main class="main-content">
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
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import QuotesContainer from "../containers/QuotesContainer.vue";
import WatchlistContainer from "../containers/WatchlistContainer.vue";
import NotificationsContainer from "../containers/NotificationsContainer.vue";
import BrokersCatalogContainer from "../containers/BrokersCatalogContainer.vue";
import LatestNewsContainer from "../containers/LatestNewsContainer.vue";
import ToolsContainer from "../containers/ToolsContainer.vue";
import TariffContainer from "../containers/TariffContainer.vue";

const activeContainer = ref("Котировки");
</script>

<style scoped>
.stock-sidebar {
  width: 391px;
  display: flex;
  height: 100vh;
  position: relative;
  background-color: #fff;
}

.fixed-aside {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  width: 72px;
  background-color: #f2f7fc;
  border-left: 1px solid #ecedef;
}

.main-content {
  flex: 1;
}
</style>
