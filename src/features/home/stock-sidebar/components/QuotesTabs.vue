<template>
  <div class="tabs">
    <div v-for="(tab, index) in tabs" :key="tab.id" class="tab-wrapper">
      <div :class="['tab', { active: tab.id === activeTab }]" @click="setActiveTab(tab.id)">
        {{ tab.label }}
      </div>
      <div v-if="index < tabs.length - 1" class="divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      required: true,
    },
  },
  emits: ["update:activeTab"],
  data() {
    return {
      tabs: [
        { id: "obligations", label: "Облигации" },
        { id: "stocks", label: "Акции" },
        { id: "uci", label: "UCI" },
      ],
    };
  },
  methods: {
    setActiveTab(tabId) {
      this.$emit("update:activeTab", tabId); // Emit the selected tab
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

.tabs {
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 24px;
  font-family: "Open Sans";
  font-weight: 600;
}

.tab-wrapper {
  display: flex;
  align-items: center;
}

.tab {
  cursor: pointer;
  color: #00000099;
  position: relative;
  transition: color 0.3s;
}

.tab:hover {
  color: black;
}

.tab.active {
  color: blue;
  font-weight: bold;
}

.divider {
  width: 1px;
  height: 24px;
  background-color: lightgray;
  margin: 0 16px;
}
</style>
