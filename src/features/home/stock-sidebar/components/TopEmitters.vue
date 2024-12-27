<template>
  <div class="top-emitters">
    <div class="header">
      <p>Топ 5 Эмитентов по прибыли</p>
      <a href="#" class="see-all">></a>
    </div>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: tab === activeTab }]"
        @click="setActiveTab(tab)"
      >
        {{ tab }}
      </div>
    </div>
    <div class="list">
      <div v-for="(item, index) in filteredData" :key="index" class="list-item">
        <div class="name">{{ item.name }}</div>
        <div class="value">
          <span class="amount">{{ item.amount }}</span>
          <br />
          <span class="unit">тыс.сум</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["Kv1", "Kv2", "Kv3", "Kv4"],
      activeTab: "Kv1",
      data: {
        Kv1: [
          { name: "O'zmilliybank", amount: "1 647 747 384" },
          { name: '"Kapitalbank" ATB', amount: "2 245 712 908" },
          { name: '"Hamkorbank" ATB', amount: "1 637 208 419" },
          { name: '"Ipoteka-bank" ATIB', amount: "510 431 678" },
          { name: '"O\'ztransgaz" AJ', amount: "510 431 678" },
        ],
        Kv2: [
          { name: "ExampleBank 1", amount: "1 500 000 000" },
          { name: "ExampleBank 2", amount: "1 400 000 000" },
        ],
        Kv3: [],
        Kv4: [],
      },
    };
  },
  computed: {
    filteredData() {
      return this.data[this.activeTab] || [];
    },
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

.top-emitters {
  font-family: "Open Sans";
  font-size: 14px;
  margin: 0 8px;
  color: #333;
  padding: 16px;
}

.header {
  display: flex;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 15px;
  color: #1256a0;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}

.header p {
  margin: 0;
}

.see-all {
  text-decoration: none;
  color: blue;
  font-weight: bold;
  font-size: 18px;
}

.tabs {
  display: flex;
  gap: 24px;
  margin-top: 11px;
  margin-bottom: 12px;
  font-family: "Open Sans";
  font-size: 15px;
  font-weight: 400;
}

.tab {
  padding: 6px 12px;
  border-radius: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.tab.active {
  color: #1256a0;
}

.list {
  border-top: 1px solid #ccc;
  width: 269px;
  padding-top: 20px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.name {
  font-size: 15px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #000;
}

.value {
  text-align: right;
}

.amount {
  font-size: 15px;
  font-family: "Open Sans";
  font-weight: 400;
  color: #000;
}

.unit {
  font-size: 11px;
  font-family: "Open Sans";
  font-weight: 400;
  color: #000;
}
</style>
