<template>
  <el-container>
    <el-main>
      <div class="filter-buttons" style="margin-bottom: 20px">
        <el-button
          v-for="filter in filters"
          :key="filter.value"
          :class="{
            'is-active': activeFilter === filter.value,
            'is-inactive': activeFilter !== filter.value,
          }"
          round
          @click="applyFilter(filter.value)"
        >
          {{ filter.label }}
        </el-button>
      </div>
      <el-row>
        <el-input
          placeholder="Issuer"
          v-model="searchText"
          clearable
          class="custom-input"
        ></el-input>
        <span class="custom-icon">
          <el-icon>
            <Bottom />
          </el-icon>
        </span>
      </el-row>
      <el-table
        :data="filteredAndSearchedData"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          v-for="(column, index) in columns"
          :key="index"
          :prop="column.prop"
          :label="column.label"
        ></el-table-column>
        <el-table-column label="" prop="actions">
          <template #default="scope">
            <el-icon>
              <MoreFilled />
            </el-icon>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { MoreFilled, Bottom } from "@element-plus/icons-vue";

export default {
  name: "DynamicTable",
  components: {
    MoreFilled,
    Bottom,
  },
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => [],
    },
    tableData: {
      type: Array,
      required: true,
      default: () => [],
    },
    filters: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      activeFilter: "",
      searchText: "",
    };
  },
  computed: {
    filteredAndSearchedData() {
      let filteredData = this.activeFilter
        ? this.tableData.filter((item) => item.type === this.activeFilter)
        : this.tableData;

      if (this.searchText) {
        const searchText = this.searchText.toLowerCase();
        filteredData = filteredData.filter((item) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchText)
          )
        );
      }
      return filteredData;
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

.is-inactive {
  background-color: #dceeff !important;
  color: #000000db !important;
  border-color: transparent !important;
}

::v-deep .el-input__wrapper {
  border-radius: 20px !important;
}
/* Input without rectangular wrapper */
.custom-input {
  width: 300px;
  border: 1px solid #dce7f4;
  border-radius: 20px;
}

/* Customize placeholder color */
::v-deep(.custom-input .el-input__inner::placeholder) {
  color: #1256a0;
}

/* Input inner styles */
::v-deep(.custom-input .el-input__inner) {
  border-radius: 20px !important;
  padding: none;
}

/* Input focus styles */
::v-deep(.custom-input .el-input__inner:focus) {
  border-color: #1256a0 !important;
  outline: none;
}

/* Icon Circle Styles */
.custom-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #dce7f4; /* Circle border */
  border-radius: 50%; /* Makes the circle */
  margin-left: 8px;
}

.custom-icon .el-icon {
  font-size: 16px;
  color: #1256a0; /* Arrow color */
}

.custom-icon:hover {
  background-color: #f0f8ff; /* Optional: Adds a hover effect */
}
</style>
