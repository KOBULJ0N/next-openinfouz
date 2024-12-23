<template>
  <div class="news-icon">
    <el-image :src="src" fit="cover" />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.news-icon {
  width: 80px;
  height: 80px;
  background-color: var(--icon-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 15px;
}

.news-icon :deep(img) {
  border-radius: 8px;
}
</style>
