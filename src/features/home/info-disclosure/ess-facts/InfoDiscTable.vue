<template>
  <el-container>
    <el-header>
      <h2>Раскрытие информации</h2>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Существенные факты" name="facts"></el-tab-pane>
        <el-tab-pane
          label="Финансовая отчетность"
          name="financials"
        ></el-tab-pane>
        <el-tab-pane label="Объявления" name="announcements"></el-tab-pane>
        <el-tab-pane
          label="Выпуск ценных бумаг"
          name="securities"
        ></el-tab-pane>
      </el-tabs>
    </el-header>
    <el-main>
      <div class="filter-buttons" style="margin-bottom: 20px">
        <el-button
          v-for="filter in filters"
          :key="filter.value"
          :class="{ 'is-active': activeFilter === filter.value }"
          round
          @click="applyFilter(filter.value)"
        >
          {{ filter.label }}
        </el-button>
      </div>
      <el-row>
        <el-input
          placeholder="Эмитент"
          v-model="searchText"
          clearable
        ></el-input>
        <el-button
          icon="el-icon-download"
          type="primary"
          style="margin-left: 10px"
        ></el-button>
      </el-row>
      <el-table :data="filteredData" style="width: 100%; margin-top: 20px">
        <el-table-column prop="emitter" label="Эмитент"></el-table-column>
        <el-table-column
          prop="factNumber"
          label="№ сущ-факта"
        ></el-table-column>
        <el-table-column
          prop="disclosureDate"
          label="Дата раскрытия"
        ></el-table-column>
        <el-table-column
          prop="publicationDate"
          label="Дата публикации"
        ></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "facts",
      activeFilter: "simple", // Default filter value
      searchText: "",
      filters: [
        { label: "Банки", value: "simple" },
        { label: "Страхование", value: "privileged" },
        { label: "Лизинг", value: "bond" },
        { label: "Транспорт", value: "transport" },
        { label: "Энергетика", value: "energy" },
        { label: "АПК", value: "agriculture" },
        { label: "Промышленность", value: "industry" },
      ],
      tableData: [
        {
          emitter: '"CLICK" АО',
          factNumber: "Факт № 6",
          disclosureDate: "19.08.2024",
          publicationDate: "19.08.2024",
          type: "simple",
        },
        {
          emitter: '"Узбекгидроэнерго" АО',
          factNumber: "Факт № 4",
          disclosureDate: "19.08.2024",
          publicationDate: "19.08.2024",
          type: "energy",
        },
        {
          emitter: '"ARIA SUG\'URTA TASHKILOTI" АО',
          factNumber: "Факт № 33",
          disclosureDate: "19.08.2024",
          publicationDate: "19.08.2024",
          type: "privileged",
        },
        {
          emitter: '"Buxoro go\'sht-sut savdo" АО',
          factNumber: "Факт № 21",
          disclosureDate: "19.08.2024",
          publicationDate: "19.08.2024",
          type: "agriculture",
        },
        {
          emitter: '"Kafolat Hayot Insurance" АО',
          factNumber: "Факт № 7",
          disclosureDate: "19.08.2024",
          publicationDate: "19.08.2024",
          type: "privileged",
        },
        {
          emitter: '"HPC DEVELOPMENT" АО',
          factNumber: "Факт № 8",
          disclosureDate: "19.08.2024",
          publicationDate: "19.08.2024",
          type: "bond",
        },
      ],
    };
  },
  computed: {
    filteredData() {
      if (!this.activeFilter) {
        return this.tableData;
      }
      return this.tableData.filter((item) => item.type === this.activeFilter);
    },
  },
  methods: {
    applyFilter(value) {
      this.activeFilter = value;
    },
  },
};
</script>

<style scoped>
.filter-buttons {
  display: flex;
  align-items: center;
}

.is-active {
  background-color: #dceeff !important;
  color: #1256a0 !important;
  border: 1px solid #dceeff !important;
}
</style>
