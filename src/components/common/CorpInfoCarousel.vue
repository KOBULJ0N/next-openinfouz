<template>
  <div :class="['container', theme]">
    <!-- Main Content with Background Image and Opacity -->
    <div class="info-card">
      <a href="#" class="info-text">
        ЕДИНЫЙ ПОРТАЛ КОРПОРАТИВНОЙ ИНФОРМАЦИИ<br />
        НАЦИОНАЛЬНОГО АГЕНТСТВА ПЕРСПЕКТИВНЫХ<br />
        ПРОЕКТОВ РЕСПУБЛИКИ УЗБЕКИСТАН
      </a>
    </div>

    <!-- Sidebar with Background Image -->
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
      // Toggle between light and dark themes
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
  background-color: var(--bg-color);
}

/* Info Card with Background and Opacity */
.info-card {
  flex: 1;
  background: url("@/assets/corp_info_header.png") no-repeat center center;
  background-size: cover;
  opacity: 0.5;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  color: inherit;
  position: relative;
}

.info-sidebar {
  flex: 1;
  background: url("@/assets/corp_info_header.png") no-repeat center center;
  background-size: cover;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  color: inherit;
  position: relative;
}

.info-text {
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.info-text:hover {
  color: #007bff; /* Hover effect for links */
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
  background: url("@/assets/corp_info_header.png") no-repeat center center;
  background-size: cover;
  background-blend-mode: overlay;
  color: #fff;
}

/* Responsive Design for Mobile */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .info-card,
  .info-sidebar {
    padding: 1rem;
  }
}
</style>
