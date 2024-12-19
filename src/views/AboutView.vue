<script setup lang="ts">
import DynamicPieChart from "@/components/statistics/DynamicPieChart.vue";
</script>

<template>
  <DynamicPieChart :percentage="73" :total="100" />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
