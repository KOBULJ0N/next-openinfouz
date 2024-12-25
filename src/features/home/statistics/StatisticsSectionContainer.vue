<template>
  <div class="filter mb-5 max-w-4/5 mx-auto mt-10">
    <el-row
      :gutter="20"
      class="filter-row flex justify-start items-center gap-5"
    >
      <el-col :span="6" class="w-auto">
        <PillSelect
          v-model="selectedYear"
          :options="years"
          placeholder="Year"
        />
      </el-col>
      <el-col :span="6" class="w-auto">
        <PillSelect
          v-model="selectedQuarter"
          :options="quarters"
          placeholder="Quarter"
        />
      </el-col>
    </el-row>
    <el-divider />
  </div>

  <div class="holder flex justify-between gap-5 mt-5 max-w-4/5 mx-auto">
    <h2>Statistics</h2>
    <div class="left flex gap-5">
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

<style scoped>
.el-select-dropdown__item.is-hovering {
  background-color: #f5f7fa !important;
}

.el-col.el-col-6.is-guttered {
  padding: 0 !important;
  width: auto !important;
  flex: 0 0 auto !important;
}
</style>
