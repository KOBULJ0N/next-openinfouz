<template>
  <div class="chart-container">
    <div id="chart"></div>
    <div class="text-container">
      <p class="total">{{ total }}</p>
      <p class="label">Всего эмитентов</p>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "DynamicChart",
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.initChart();
  },
  watch: {
    percentage() {
      this.initChart();
    },
  },
  methods: {
    initChart() {
      const chartDom = this.$el.querySelector("#chart");
      const myChart = echarts.init(chartDom);

      const option = {
        series: [
          {
            type: "pie",
            radius: ["60%", "90%"],
            avoidLabelOverlap: false,
            silent: true,
            label: {
              show: true,
              position: "center",
              formatter: "{d}%",
              fontSize: 20,
              fontWeight: "bold",
              color: "#000",
            },
            data: [
              {
                value: this.percentage,
                name: "Completed",
                itemStyle: { color: "#90cdf4" },
              },
              {
                value: 100 - this.percentage,
                name: "Remaining",
                itemStyle: { color: "#e5e7eb" },
              },
            ],
          },
        ],
      };

      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#chart {
  width: 160px;
  height: 160px;
}

.text-container {
  text-align: center;
  margin-top: 16px;
}

.total {
  font-size: 24px;
  font-weight: bold;
  color: #1256a0;
  margin: 0;
}

.label {
  font-size: 16px;
  color: #1256a0;
  margin: 0;
}
</style>
