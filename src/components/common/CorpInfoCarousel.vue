<template>
  <div :class="['container', theme]">
    <div class="info-card">
      <a href="#" class="info-text">
        ЕДИНЫЙ ПОРТАЛ КОРПОРАТИВНОЙ ИНФОРМАЦИИ<br />
        НАЦИОНАЛЬНОГО АГЕНТСТВА ПЕРСПЕКТИВНЫХ<br />
        ПРОЕКТОВ РЕСПУБЛИКИ УЗБЕКИСТАН
      </a>
    </div>
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
      theme: "light",
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
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.info-card {
  flex: 0 0 60%;
  height: 330px;
  background: url("@/assets/opacity_corp_info_header.png") no-repeat center
    center;
  background-size: cover;
  position: relative;
  color: white;
  padding: 1rem;
}

.info-card .info-text {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  line-height: 1.4;
}

.info-sidebar {
  flex: 0 0 35%;
  height: 330px;
  background: url("@/assets/corp_info_header.png") no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 1rem;
  color: white;
}

.info-sidebar .info-text {
  position: absolute;
  top: 1rem;
  left: 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  line-height: 1.4;
}

.light {
  background-color: #f0f4f8;
  color: #333;
}

.dark {
  background-color: #1e1e2f;
  color: #f0f0f0;
}

.dark .info-card,
.dark .info-sidebar {
  color: white;
  background-blend-mode: overlay;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .info-card,
  .info-sidebar {
    flex: 1;
    width: 100%;
    height: 300px;
  }

  .info-card .info-text,
  .info-sidebar .info-text {
    position: static;
    margin-top: 0.5rem;
    text-align: left;
  }
}
</style>
