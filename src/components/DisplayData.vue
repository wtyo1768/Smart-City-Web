<template>
  <div id="outter-box">
    <div id="select-box">
      <v-btn @click="DisplayWu" color="primary" :outlined="wu_btn">
        <span class="mr-2">吳郭魚</span>
        <v-icon>mdi-fish</v-icon>
      </v-btn>
      <!-- <v-spacer/> -->
      <v-btn @click="DisplayChi" color="primary" :outlined="chi_btn">
        <span class="mr-2">虱目魚</span>
        <v-icon>mdi-fish</v-icon>
      </v-btn>
      <v-btn @click="ChangeUnitMonth" color="primary" :outlined="month_btn">
        <span class="mr-2">月價格</span>
        <v-icon>mdi-currency-usd</v-icon>
      </v-btn>
      <v-btn @click="ChangeUnitDate" color="primary" :outlined="date_btn">
        <span class="mr-2">日價格</span>
        <v-icon>mdi-currency-usd</v-icon>
      </v-btn>
    </div>

    <ve-line legend-position="bottom" :data="chartData" :extend="extend"></ve-line>
  </div>
</template>

<script>
export default {
  name: "DisplayData",
  methods: {
    DisplayWu() {
      this.$data.chartData.rows = this.$data.WuData;
      this.$data.wu_btn = false;
      this.$data.chi_btn = true;
    },
    DisplayChi() {
      this.$data.chartData.rows = this.$data.ChiData;
      this.$data.chi_btn = false;
      this.$data.wu_btn = true;
    },
    ChangeUnitDate() {
      this.$data.date_btn = false;
      this.$data.month_btn = true;
    },
    ChangeUnitMonth() {
      this.$data.month_btn = false;
      this.$data.date_btn = true;
      this.$data.chartData.rows = this.$data.MonthData;
    }
  },
  data: function() {
    return {
      wu_btn: false,
      chi_btn: true,
      month_btn: false,
      date_btn: true,
      MonthData: [
        { 日期: "1月", 過去價格: 1293 },
        { 日期: "2月", 過去價格: 1130 },
        { 日期: "3月", 過去價格: 1623 },
        { 日期: "4月", 過去價格: 2423 },
        { 日期: "5月", 過去價格: 1492 },
        { 日期: "5月", 未來價格: 1492 },
        { 日期: "6月", 未來價格: 492 },
        { 日期: "7月", 未來價格: 2193 },
        { 日期: "8月", 未來價格: 3293 },
        { 日期: "9月", 未來價格: 2130 },
        { 日期: "10月", 未來價格: 1623 },
        { 日期: "11月", 未來價格: 2423 },
        { 日期: "12月", 未來價格: 3492 }
      ],
      extend: {
        series: {
          smooth: false
        }
      },
      ChiData: [
        { 日期: "1/1", 過去價格: 1293 },
        { 日期: "1/2", 過去價格: 1130 },
        { 日期: "1/3", 過去價格: 1623 },
        { 日期: "1/4", 過去價格: 2423 },
        { 日期: "1/5", 過去價格: 1492 },
        { 日期: "1/5", 未來價格: 1492 },
        { 日期: "1/6", 未來價格: 2293 },
        { 日期: "1/7", 未來價格: 1293 },
        { 日期: "1/8", 未來價格: 1130 },
        { 日期: "1/9", 未來價格: 1623 },
        { 日期: "1/10", 未來價格: 2423 },
        { 日期: "1/11", 未來價格: 1492 },
        { 日期: "1/12", 未來價格: 2293 }
      ],
      WuData: [
        { 日期: "1/1", 過去價格: 1093 },
        { 日期: "1/2", 過去價格: 3230 },
        { 日期: "1/3", 過去價格: 2623 },
        { 日期: "1/4", 過去價格: 1423 },
        { 日期: "1/5", 過去價格: 3492 },
        { 日期: "1/6", 過去價格: 4293 },
        { 日期: "1/6", 未來價格: 4293 },
        { 日期: "1/7", 未來價格: 1293 },
        { 日期: "1/8", 未來價格: 1130 },
        { 日期: "1/9", 未來價格: 1623 },
        { 日期: "1/10", 未來價格: 2423 },
        { 日期: "1/11", 未來價格: 1492 },
        { 日期: "1/12", 未來價格: 2293 }
      ],
      chartData: {
        columns: ["日期", "過去價格", "未來價格"],
        rows: [
          { 日期: "1/1", 過去價格: 1093 },
          { 日期: "1/2", 過去價格: 3230 },
          { 日期: "1/3", 過去價格: 2623 },
          { 日期: "1/4", 過去價格: 1423 },
          { 日期: "1/5", 過去價格: 3492 },
          { 日期: "1/6", 過去價格: 4293 },
          { 日期: "1/6", 未來價格: 4293 },
          { 日期: "1/7", 未來價格: 1293 },
          { 日期: "1/8", 未來價格: 1130 },
          { 日期: "1/9", 未來價格: 1623 },
          { 日期: "1/10", 未來價格: 2423 },
          { 日期: "1/11", 未來價格: 1492 },
          { 日期: "1/12", 未來價格: 2293 }
        ]
      }
    };
  }
};
</script>

<style scoped>
#outter-box {
  height: 100%;
  width: 90%;
  margin: auto;
  margin-top: 0;
}
#select-box {
  width: 500px;
  display: flex;
  justify-content: space-around;
}
</style>