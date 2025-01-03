<template>
  <div class="broker-catalog">
    <h2 class="title">Каталог брокеров</h2>
    <div class="broker-list">
      <div class="broker-item" v-for="broker in brokers" :key="broker.id">
        <div class="flex">
          <img :src="broker.logo" alt="Broker Logo" class="broker-logo" />
          <div class="broker-details">
            <h3 class="broker-name">{{ broker.name }}</h3>
            <p class="broker-info">Кол-во: {{ broker.count }}</p>
            <p class="broker-info">Сумма: {{ broker.amount }}</p>
          </div>
        </div>
        <a :href="broker.website" target="_blank" class="broker-link"> ВЕБ-САЙТ <span class="arrow">>></span> </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const brokers = [
  {
    id: 1,
    logo: "data:image/png;base64,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",
    name: 'ООО "DALAL STANDARD"',
    count: "43 471",
    amount: "59 074 557 521 сум",
    website: "https://example.com",
  },
  {
    id: 2,
    logo: "data:image/png;base64,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",
    name: 'ООО "Alp omad invest"',
    count: "8 476",
    amount: "1 484 910 000 000 сум",
    website: "https://example.com",
  },
  {
    id: 3,
    logo: "data:image/png;base64,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",
    name: 'ООО "ТашИнвестКом"',
    count: "6 786",
    amount: "14 378 275 056 сум",
    website: "https://example.com",
  },
  {
    id: 4,
    logo: "data:image/png;base64,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",
    name: 'ООО "Leader Finance"',
    count: "371",
    amount: "716 168 971.9 сум",
    website: "https://example.com",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

.broker-catalog {
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

.title {
  font-size: 15px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #000;
  margin-bottom: 16px;
}

.broker-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.broker-item {
  width: 272;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 16px 0;
  border-bottom: 1px solid #f1f1f1;
}

.broker-item:hover {
  background-color: #f5f5f5;
}

.broker-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-right: 16px;
}

.broker-details {
  flex-grow: 1;
}

.broker-name {
  font-size: 13px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #000;
  margin: 0 0 4px;
}

.broker-info {
  font-size: 12px;
  color: #555;
  margin: 0;
}

.broker-link {
  font-size: 12px;
  border-radius: 4px;
  font-family: "Open Sans";
  font-weight: 600;
  background-color: #dce7f4;
  color: #1256a0;
  text-decoration: none;
  text-align: center;
  height: 30px;
  padding: 6px;
  margin-top: 10px;
}

.broker-link:hover {
  text-decoration: underline;
}

.arrow {
  margin-left: 4px;
}
</style>
