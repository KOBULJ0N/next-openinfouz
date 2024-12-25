<template>
  <el-select
    v-model="localValue"
    :placeholder="placeholder"
    class="pill-select"
  >
    <el-option
      v-for="option in options"
      :key="option.value || option"
      :label="option.label || option"
      :value="option.value || option"
    />
  </el-select>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
});

const emit = defineEmits(["update:modelValue"]);

const localValue = ref(props.modelValue);

watch(localValue, (newValue) => {
  emit("update:modelValue", newValue);
});
watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue;
  }
);
</script>

<style scoped>
.pill-select {
  width: auto !important;
  min-width: 105px !important;
  border-radius: 20px !important;
  border: 1px solid #dce7f4 !important;
  color: #1256a0 !important;
  overflow: hidden !important;
  padding: 0 12px !important;
  height: 40px !important;
}

.pill-select :deep(.el-select__wrapper.el-tooltip__trigger) {
  border: none !important;
  box-shadow: none !important;
}

.pill-select :deep(.el-select__wrapper:hover) {
  border: none !important;
  box-shadow: none !important;
}

.pill-select :deep(.el-select-dropdown__item.is-hovering) {
  background-color: #f5f7fa !important;
}

.pill-select :deep(.el-select__placeholder) {
  color: #1256a0 !important;
}

.pill-select :deep(.el-select__caret) {
  color: #1256a0 !important;
}

.pill-select:hover {
  border-color: #dce7f4 !important;
}

.pill-select :deep(.el-col.el-col-6.is-guttered) {
  padding: 0 !important;
  width: auto !important;
  flex: 0 0 auto !important;
}
</style>
