<template>
  <div class="holder">
    <div class="left">
      <DynamicPieChart :percentage="73" :total="100" />
      <DynamicPieChart :percentage="35" :total="100" />
      <DynamicPieChart :percentage="70" :total="100" />
      <DynamicPieChart :percentage="93" :total="100" />
    </div>
    <div class="right">
      <UzbekistanMap />
    </div>
  </div>
</template>

<script setup>
import UzbekistanMap from "../statistics-map/UzbekistanMap.vue";
import DynamicPieChart from "./DynamicPieChart.vue";
</script>
<style>
.holder {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.left {
  display: flex;

  gap: 20px;
}
</style>
