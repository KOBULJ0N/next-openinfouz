<template>
  <div class="news-grid">
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
  </div>
</template>

<script setup>
import NewsCard from "./NewsCard.vue";
</script>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns, equally spaced */
  gap: 16px; /* Spacing between grid items */
}
</style>
