<template>
  <el-card class="news-card">
    <div class="news-container">
      <NewsIcon :src="imageSrc" />
      <NewsContent
        :title="title"
        :title-link="titleLink"
        :date="date"
        :date-link="dateLink"
        :section="section"
        :section-link="sectionLink"
      />
    </div>
  </el-card>
</template>

<script setup>
import { defineProps } from "vue";
import NewsIcon from "./NewsIcon.vue";
import NewsContent from "./NewsContent.vue";

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

<style>
:root {
  --card-bg-color: #ffffff;
  --card-border-color: #e5e6e7;
  --icon-bg-color: #e0f2ff;
  --text-color: #303133;
}

body.dark-mode :root {
  --card-bg-color: #1f1f1f;
  --card-border-color: #333333;
  --icon-bg-color: #4a4a4a;
  --text-color: #dcdcdc;
}
</style>

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

.news-container {
  display: flex;
  align-items: center;
}
</style>
