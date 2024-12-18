<template>
  <el-card class="news-card">
    <div class="news-container">
      <div class="news-icon">
        <el-image :src="imageSrc" fit="cover" />
      </div>
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
    </div>
  </el-card>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Lorem ipsum dolor sit amet consectetur.",
  },
  date: {
    type: String,
    default: "Aug 28, 2024",
  },
  imageSrc: {
    type: String,
    default: "https://via.placeholder.com/80x80?text=NEWS",
  },
  titleLink: {
    type: String,
    default: "#",
  },
  dateLink: {
    type: String,
    default: "#",
  },
  sectionLink: {
    type: String,
    default: "#",
  },
  section: {
    type: Object,
    default: () => ({
      en: "News Section",
      ru: "Раздел новостей",
      fr: "Section des nouvelles",
    }),
  },
});
</script>

<style scoped>
.news-card {
  height: auto;
  padding: 15px;
  margin: 20px;
  border-radius: 8px;
  border: 1px solid var(--card-border-color);
  background-color: var(--card-bg-color);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.news-card:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-5px);
}

:root {
  --card-bg-color: #ffffff;
  --card-border-color: #7e8085;
}

body.dark-mode :root {
  --card-bg-color: #1f1f1f;
  --card-border-color: #333333;
}

.news-container {
  display: flex;
  align-items: center;
}

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

.news-icon img {
  border-radius: 8px;
}

:root {
  --icon-bg-color: #e0f2ff;
}

body.dark-mode :root {
  --icon-bg-color: #4a4a4a;
}

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

:root {
  --text-color: #303133;
}

body.dark-mode :root {
  --text-color: #dcdcdc;
}
</style>
