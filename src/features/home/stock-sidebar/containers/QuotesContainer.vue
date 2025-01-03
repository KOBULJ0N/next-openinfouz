<template>
  <div>
    <QuotesTabs v-model:activeTab="activeTab" />
    <div>
      <LineChart v-if="activeTab === 'obligations'" />
      <LineChart v-if="activeTab === 'stocks'" />
      <LineChart v-if="activeTab === 'uci'" />
    </div>
    <TopEmitters />
  </div>
</template>

<script setup>
import LineChart from "../components/LineChart.vue";
import QuotesTabs from "../components/QuotesTabs.vue";

import { ref } from "vue";
import TopEmitters from "../components/TopEmitters.vue";

const activeTab = ref("stocks");
</script>
