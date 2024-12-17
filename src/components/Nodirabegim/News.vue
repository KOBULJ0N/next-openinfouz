<template>
  <el-card class="news-card">
    <div class="news-container">
      <!-- News Icon Placeholder -->
      <div class="news-icon">
        <el-image :src="iconSrc" fit="cover" />
      </div>

      <!-- News Content -->
      <div class="news-content">
        <h3 class="news-title">Lorem ipsum dolor sit amet consectetur.</h3>
        <p class="news-date">Aug 28, 2024</p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
// Importing reactive state
import { ref } from "vue";

// Path for your news icon image
const iconSrc = ref("https://via.placeholder.com/80x80?text=NEWS"); // Replace with actual path
</script>

<style scoped>
/* Card styling */
.news-card {
  max-width: 500px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Container to align icon and content horizontally */
.news-container {
  display: flex;
  align-items: center;
  gap: 15px;
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
}

.news-date {
  font-size: 14px;
  color: #909399; /* Grey */
  margin-top: 5px;
}

.card-with-shadow {
}
</style>
