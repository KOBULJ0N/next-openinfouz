<template>
  <div class="news-content">
    <h3 class="news-title">
      <a :href="titleLink" target="_blank">{{ title }}</a>
    </h3>
    <p class="news-date">
      <a :href="dateLink" target="_blank">{{ date }}</a>
    </p>
    <p class="news-section">
      <a :href="sectionLink" target="_blank">{{ section.en }}</a> |
      <a :href="sectionLink" target="_blank">{{ section.ru }}</a> |
      <a :href="sectionLink" target="_blank">{{ section.fr }}</a>
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  titleLink: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  dateLink: {
    type: String,
    required: true,
  },
  sectionLink: {
    type: String,
    required: true,
  },
  section: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.news-content {
  flex: 1;
}

.news-title,
.news-date,
.news-section {
  margin: 5px 0;
}

.news-title a,
.news-date a,
.news-section a {
  color: var(--text-color);
  text-decoration: none;
}

.news-title a:hover,
.news-date a:hover,
.news-section a:hover {
  text-decoration: underline;
}
</style>
