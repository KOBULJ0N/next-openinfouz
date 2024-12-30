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
          {
            emitter: '"ENERGY PLUS" ООО',
            factNumber: "Факт № 7",
            disclosureDate: "20.08.2024",
            publicationDate: "20.08.2024",
            type: "energy",
          },
          {
            emitter: '"INDUSTRIAL CORP" ПАО',
            factNumber: "Факт № 8",
            disclosureDate: "21.08.2024",
            publicationDate: "21.08.2024",
            type: "industry",
          },
        ],
      },
      financials: {
        columns: [
          { label: "Issuer", prop: "issuer" },
          { label: "Report Type", prop: "reportType" },
          { label: "Disclosure Date", prop: "disclosureDate" },
          { label: "Publication Date", prop: "publicationDate" },
        ],
        filters: [
          { label: "All", value: "" },
          { label: "Quarterly", value: "Quarterly" },
          { label: "Annual", value: "annual" },
        ],
        tableData: [
          {
            issuer: '"BANK OF FINANCE" ПАО',
            reportType: "Quarterly",
            disclosureDate: "15.08.2024",
            publicationDate: "16.08.2024",
            type: "Quarterly",
          },
          {
            issuer: '"AGRICULTURE FUND" ООО',
            reportType: "Annual",
            disclosureDate: "18.08.2024",
            publicationDate: "19.08.2024",
            type: "annual",
          },
        ],
      },
      announcements: {
        columns: [
          { label: "Issuer", prop: "issuer" },
          { label: "Announcement Type", prop: "announcementType" },
          { label: "Disclosure Date", prop: "disclosureDate" },
          { label: "Publication Date", prop: "publicationDate" },
        ],
        filters: [
          { label: "All", value: "" },
          { label: "Banks", value: "banks" },
          { label: "Energy", value: "energy" },
          { label: "Insurance", value: "insurance" },
          { label: "Leasing", value: "leasing" },
          { label: "Industry", value: "industry" },
          { label: "Agriculture", value: "agriculture" },
        ],
        tableData: [
          {
            issuer: '"CITY DEVELOPMENT" АО',
            announcementType: "New Policy",
            disclosureDate: "10.08.2024",
            publicationDate: "11.08.2024",
            type: "leasing",
          },
          {
            issuer: '"GREEN ENERGY" ООО',
            announcementType: "Dividend Declaration",
            disclosureDate: "12.08.2024",
            publicationDate: "13.08.2024",
            type: "energy",
          },
        ],
      },
      securities: {
        columns: [
          { label: "Issuer", prop: "issuer" },
          { label: "Emission Type", prop: "emissionType" },
          { label: "Disclosure Date", prop: "disclosureDate" },
          { label: "Publication Date", prop: "publicationDate" },
        ],
        filters: [
          { label: "All", value: "" },
          { label: "Banks", value: "banks" },
          { label: "JSC", value: "jsc" },
          { label: "PO", value: "po" },
          { label: "LLC", value: "llc" },
        ],
        tableData: [
          {
            issuer: '"STOCKTRADE" ООО',
            emissionType: "Public Offering",
            disclosureDate: "05.08.2024",
            publicationDate: "06.08.2024",
            type: "llc",
          },
          {
            issuer: '"MINING INC" ПАО',
            emissionType: "Private Placement",
            disclosureDate: "07.08.2024",
            publicationDate: "08.08.2024",
            type: "jsc",
          },
        ],
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
