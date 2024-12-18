<template>
  <el-card>CArd </el-card>
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
});
</script>

<style scoped>
/* Card styling with strong box shadow */
.news-card {
  height: 150px;
  padding: 10px;
  margin: 20px; /* Adds spacing around the card */
  border-radius: 8px;
  border: 1px solid #7e8085; /* Subtle border for better visibility */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* More prominent shadow */
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
}

/* Hover effect for a dynamic feel */
.news-card:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-5px); /* Adds slight lift effect */
}

/* Container to align icon and content horizontally */
.news-container {
  display: flex;
}

/* Icon styling */
.news-icon {
  width: 80px;
  height: 80px;
  background-color: #e0f2ff; /* Light blue background */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

/* Content Styling */
.news-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #303133;
}

.news-date {
  font-size: 14px;
  color: #909399;
  margin-top: 5px;
}
</style>
