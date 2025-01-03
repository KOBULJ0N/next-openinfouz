<template>
  <div class="container">
    <h2 class="heading">Мои списки наблюдения</h2>
    <div>
      <div v-for="item in watchlist" :key="item.symbol" class="watchlist-item">
        <div class="item-details">
          <span class="symbol">{{ item.symbol }}</span>
          <span class="name">{{ item.name }}</span>
        </div>
        <div class="flex">
          <div class="price-change">
            <span class="price">{{ item.price }}</span>
            <span :class="item.change > 0 ? 'change positive' : 'change negative'">
              {{ item.change }} ({{ item.percentChange }})
            </span>
          </div>
          <button class="add-button">
            <img src="../../../../assets/icons/wachlist/notification+.svg" alt="Add to Notifiaction" class="icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const watchlist = [
  { symbol: "TSLA", name: "Tesla", price: "210.60", change: -3.51, percentChange: "-1.64%" },
  { symbol: "AAPL", name: "Apple", price: "222.77", change: -4.32, percentChange: "-1.91%" },
  { symbol: "DJI", name: "Dow Jones", price: "40,936.93", change: 6.55, percentChange: "1.15%" },
  { symbol: "US500", name: "S&P 500", price: "5,528.93", change: -119.47, percentChange: "-2.12%" },
  { symbol: "AMZN", name: "Amazon.com", price: "2,526.55", change: 3.55, percentChange: "1.45%" },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

.container {
  padding: 24px;
  width: 100%;
  font-family: "Open Sans";
}

.heading {
  color: #000;
  font-size: 15px;
  font-family: "Open Sans";
  font-weight: 600;
  margin-bottom: 16px;
}

.watchlist-item {
  display: flex;
  justify-content: space-between;
  width: 273px;
  align-items: center;
  background-color: #ffffff;
  padding: 8px;
  border-bottom: 1px solid #f1f1f1;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.symbol {
  color: #000;
  font-weight: 600;
  font-family: "Open Sans";
  font-size: 15px;
}

.name {
  color: #000;
  font-size: 10px;
  font-weight: 400;
}

.price-change {
  text-align: right;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
}

.price {
  color: #000;
  font-weight: 400;
  font-size: 15px;
}

.change {
  font-size: 10px;
  font-weight: 400;
  color: #000;
}

.change.positive {
  color: #187e45;
}

.change.negative {
  color: #da5442;
}

.add-button:hover .icon {
  opacity: 0.8;
}
</style>
