<template>
  <el-container>
    <!-- Header Section -->
    <el-header>
      <el-tabs v-model="activeTab" @tab-click="onTabClick">
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

    <!-- Dynamic Table Section -->
    <DynamicTable
      :columns="currentColumns"
      :tableData="filteredTableData"
      :filters="currentFilters"
    />
  </el-container>
</template>

<script>
import { ref, computed } from "vue";
import DynamicTable from "../ess-facts/DynamicTable.vue";

export default {
  name: "InfoDisclosure",
  components: { DynamicTable },
  setup() {
    // Active tab state with a default value
    const activeTab = ref("facts");

    // Mock Data for tabs
    const mockData = {
      facts: {
        columns: [
          { label: "Эмитент", prop: "emitter" },
          { label: "№ сущ-факта", prop: "factNumber" },
          { label: "Дата раскрытия", prop: "disclosureDate" },
          { label: "Дата публикации", prop: "publicationDate" },
        ],
        filters: [
          { label: "All", value: "" },
          { label: "Banks", value: "simple" },
          { label: "Energy", value: "energy" },
          { label: "Insurance", value: "privileged" },
          { label: "Lising", value: "lising" },
          { label: "Industry", value: "industry" },
          { label: "Agriculture", value: "agriculture" },
        ],
        tableData: [
          {
            emitter: '"CLICK" АО',
            factNumber: "Факт № 6",
            disclosureDate: "19.08.2024",
            publicationDate: "19.08.2024",
            type: "simple",
          },
        ],
      },
      financials: {
        columns: [
          { label: "Issuer", prop: "period" },
          { label: "Report Type", prop: "profit" },
          { label: "Disclosure Date", prop: "revenue" },
          { label: "Publication dates", prop: "expenses" },
        ],
        filters: [
          { label: "All", value: "" },
          { label: "Quarterly", value: "quarter" },
          { label: "Annual", value: "annaul" },
        ],

        tableData: [],
      },
      announcements: {
        columns: [
          { label: "Issuer", prop: "emitnet" },
          { label: "Announcement Type", prop: "ann_type" },
          { label: "Disclosure Date", prop: "revenue" },
          { label: "Publication dates", prop: "expenses" },
        ],
        filters: [
          { label: "All", value: "" },
          { label: "Banks", value: "simple" },
          { label: "Energy", value: "energy" },
          { label: "Insurance", value: "privileged" },
          { label: "Lising", value: "lising" },
          { label: "Industry", value: "industry" },
          { label: "Agriculture", value: "agriculture" },
        ],
        tableData: [],
      },
      securities: {
        columns: [
          { label: "Issuer", prop: "emitnet" },
          { label: "Emission Type", prop: "em_type" },
          { label: "Disclosure Date", prop: "revenue" },
          { label: "Publication dates", prop: "expenses" },
        ],
        filters: [
          { label: "All", value: "" },
          { label: "Banks", value: "Banks" },
          { label: "JSC", value: "JSC" },
          { label: "PO", value: "privorg" },
          { label: "LLC", value: "limitedLiabComp" },
        ],
        tableData: [],
      },
    };

    // Computed properties with null-safe access
    const currentColumns = computed(
      () => mockData[activeTab.value]?.columns || []
    );
    const currentFilters = computed(
      () => mockData[activeTab.value]?.filters || []
    );
    const filteredTableData = computed(
      () => mockData[activeTab.value]?.tableData || []
    );

    const onTabClick = (tab) => {
      activeTab.value = tab.name;
    };

    return {
      activeTab,
      currentColumns,
      currentFilters,
      filteredTableData,
      onTabClick,
    };
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
  padding: 10px 0;
  font-size: 24px;
}

.el-tabs__header {
  margin-top: 10px;
}
</style>
