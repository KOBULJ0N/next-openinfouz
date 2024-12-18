<template>
  <div class="news-grid">
    <News />
    <News />
    <News />
    <News />
  </div>
</template>

<script setup>
import News from "./News.vue";
</script>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns, equally spaced */
  gap: 16px; /* Spacing between grid items */
}
</style>
