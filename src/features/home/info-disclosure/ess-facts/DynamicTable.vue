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
          placeholder="Search"
          v-model="searchText"
          clearable
          style="width: 300px"
        ></el-input>
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
import { MoreFilled } from "@element-plus/icons-vue";

export default {
  name: "DynamicTable",
  components: {
    MoreFilled,
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
</style>
