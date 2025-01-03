<template>
  <div class="dynamic-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :name="index.toString()"
      >
        <component :is="item.component" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

const activeNames = ref(["0"]); // Default active items
const handleChange = (val: string[]) => {
  console.log(val);
};

// Props to accept dynamic data
defineProps({
  items: {
    type: Array as () => Array<{ title: string; component: any }>,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.dynamic-collapse {
  margin: 20px;
}
</style>
