<template>
  <div class="filter">
    <el-row :gutter="20" class="filter-row">
      <el-col :span="6">
        <PillSelect
          v-model="selectedYear"
          :options="years"
          placeholder="Year"
        />
      </el-col>
      <el-col :span="6">
        <PillSelect
          v-model="selectedQuarter"
          :options="quarters"
          placeholder="Quarter"
        />
      </el-col>
    </el-row>
    <el-divider />
  </div>

  <div class="holder">
    <h2>Statistics</h2>
    <div class="left">
      <DynamicPieChart :percentage="73" :total="292" />
      <DynamicPieChart :percentage="85" :total="450" />
      <DynamicPieChart :percentage="100" :total="450" />
      <DynamicPieChart :percentage="96" :total="450" />
    </div>
    <div class="right">
      <UzbekistanMap />
    </div>
  </div>
</template>

<script setup>
import PillSelect from "@/shared/components/pill-shaped-select/PillSelect.vue";
import UzbekistanMap from "../statistics-map/UzbekistanMap.vue";
import DynamicPieChart from "./DynamicPieChart.vue";

import { ref } from "vue";

const years = [2023, 2024, 2025];
const quarters = [
  { label: "Q1", value: "q1" },
  { label: "Q2", value: "q2" },
  { label: "Q3", value: "q3" },
  { label: "Q4", value: "q4" },
];

const selectedYear = ref(2024);
const selectedQuarter = ref("q1");
</script>

<style>
.holder {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  max-width: 80%;
  margin: 0 auto;
}

.left {
  display: flex;
  gap: 20px;
}

.filter {
  margin-bottom: 20px;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 40px;
}

.filter-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
</style>
