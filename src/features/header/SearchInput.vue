<template>
  <el-input ref="searchValue" size="small" style="width: 25%" :placeholder="t('header.Search')">
    <template #suffix>
      <el-icon class="el-input__icon" size="18">
        <Search />
      </el-icon>
    </template>
  </el-input>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";

const searchValue = ref("");
const { t } = useI18n();
</script>
