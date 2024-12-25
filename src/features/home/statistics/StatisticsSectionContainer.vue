<template>
  <div class="filter">
    <el-row :gutter="20" class="filter-row">
      <el-col :span="6">
        <el-select v-model="selectedYear" placeholder="Select Year">
          <el-option
            v-for="year in years"
            :key="year"
            :label="year"
            :value="year"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="selectedQuarter" placeholder="Select Quarter">
          <el-option
            v-for="quarter in quarters"
            :key="quarter.value"
            :label="quarter.label"
            :value="quarter.value"
          />
        </el-select>
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
  justify-content: center;
  align-items: center;
}
.el-select {
  width: 100%;
  border-radius: 20px;
  border: 1px solid #dce7f4 !important;
  color: #1256a0 !important;
  overflow: hidden;
  padding: 0 12px;
  height: 40px;
}

.el-select__wrapper {
  border: none !important;
  box-shadow: none !important;
}

.el-select__wrapper:hover {
  border: none !important;
  box-shadow: none !important;
}

.el-select:hover {
  border-color: #dce7f4;
}
</style>
