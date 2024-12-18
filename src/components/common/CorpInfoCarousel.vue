<template>
  <div :class="['container', theme]">
    <!-- Main Content with Background Image, Fixed Height, and Bottom-Left Text -->
    <div class="info-card">
      <a href="#" class="info-text">
        ЕДИНЫЙ ПОРТАЛ КОРПОРАТИВНОЙ ИНФОРМАЦИИ<br />
        НАЦИОНАЛЬНОГО АГЕНТСТВА ПЕРСПЕКТИВНЫХ<br />
        ПРОЕКТОВ РЕСПУБЛИКИ УЗБЕКИСТАН
      </a>
    </div>

    <!-- Sidebar with Background Image, Fixed Height, and Top-Left Text -->
    <div class="info-sidebar">
      <a href="#" class="info-text">
        Важность корпоративного управления в АО
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CorporateInfo",
  data() {
    return {
      theme: "light", // Default theme
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
};
</script>

<style scoped>
/* General Container */
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

/* Info Card with Fixed Height, Background, Opacity, and Bottom-Left Positioned Text */
.info-card {
  flex: 0 0 60%; /* Set width to 55% */
  height: 330px; /* Fixed height */
  background: url("@/assets/corp_info_header.png") no-repeat center center;
  background-size: cover;
  position: relative;

  color: white; /* White text */
  opacity: 0.5;
  padding: 1rem;
}

.info-card .info-text {
  position: absolute;
  bottom: 1rem; /* Align text to bottom */
  left: 1rem; /* Align text to left */
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  line-height: 1.4;
}

/* Info Sidebar with Fixed Height, Background, and Top-Left Positioned Text */
.info-sidebar {
  flex: 0 0 35%; /* Set width to 35% */
  height: 330px; /* Fixed height */
  background: url("@/assets/corp_info_header.png") no-repeat center center;
  background-size: cover;
  position: relative;

  padding: 1rem;
  color: white;
}

.info-sidebar .info-text {
  position: absolute;
  top: 1rem; /* Align text to top */
  left: 1rem; /* Align text to left */
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit; /* Adjusts text color for theme */
  line-height: 1.4;
}

/* Light Theme */
.light {
  background-color: #f0f4f8;
  color: #333;
}

/* Dark Theme */
.dark {
  background-color: #1e1e2f;
  color: #f0f0f0;
}

.dark .info-card,
.dark .info-sidebar {
  color: white; /* Ensures white text in dark theme */
  background-blend-mode: overlay;
}

/* Responsive Design for Mobile */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .info-card,
  .info-sidebar {
    flex: 1;
    width: 100%;
    height: 300px; /* Slightly smaller height for mobile */
  }

  .info-card .info-text,
  .info-sidebar .info-text {
    position: static; /* Remove absolute positioning for mobile */
    margin-top: 0.5rem;
    text-align: left;
  }
}
</style>
