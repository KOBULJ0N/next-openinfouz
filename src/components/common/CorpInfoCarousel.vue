<template>
  <div :class="['container', theme]">
    <!-- Main Content -->
    <div class="info-card">
      <a href="#" class="info-text">
        ЕДИНЫЙ ПОРТАЛ КОРПОРАТИВНОЙ ИНФОРМАЦИИ<br />
        НАЦИОНАЛЬНОГО АГЕНТСТВА ПЕРСПЕКТИВНЫХ<br />
        ПРОЕКТОВ РЕСПУБЛИКИ УЗБЕКИСТАН
      </a>
    </div>

    <!-- Sidebar -->
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
}

/* Info Card and Sidebar */
.info-card,
.info-sidebar {
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  background: rgba(0, 0, 0, 0.5);
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
