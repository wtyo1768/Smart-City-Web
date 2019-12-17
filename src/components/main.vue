<template>
  <div id="outter-box">
    <QueryRegion id="query_region" />
    <ve-line
      id="data-graph"
      :yAxis="yAxis"
      legend-position="bottom"
      :data="chartData"
      :extend="extend"
      :title="title"
    ></ve-line>
    <div id="q_btn">
      <v-btn @click="query" color="primary" outlined width="100%">
        <span class="mr-2">查詢價格</span>
      </v-btn>
    </div>
    <v-snackbar v-model="snackbar" :multi-line="multiLine">
      <v-icon color="white">mdi-alert</v-icon>
      <span class="mr-2">{{alertmes}}</span>
      <v-btn color="white" text @click="snackbar = false">關閉</v-btn>
    </v-snackbar>
  </div>
</template>
    
<script>
import QueryRegion from "./query_region";
import { mapState } from "vuex";
import store from "../store";
import moment from "moment";

export default {
  components: {
    QueryRegion
  },
  name: "DisplayData",
  computed: {
    ...mapState(["date", "price_mode", "fish", "alertmes", "rows", "history"]),
    chartData: {
      get() {
        return {
          columns: ["日期", "實際價格", "預測價格"],
          rows: this.rows
        };
      },
      set(rows) {
        store.commit("SET_ROWS", rows);
        store.commit("SET_LOADING");
      }
    }
  },
  methods: {
    async query() {
      store.commit("SET_LOADING");
      const dateformat = {
        month: "YYYY-MM",
        day: "YYYY-MM-DD",
        week: "YYYY-MM-DD"
      };
      if (!this.price_mode) {
        this.snackbar = true;
        return store.commit("ALERT", "請選擇價格單位");
      }
      if (!this.date) {
        this.snackbar = true;
        return store.commit("ALERT", "請選擇日期");
      }
      let mode = this.fish + this.price_mode;
      let res = await this.$ajax
        .get(`/data?date=${this.date}&mode=${mode}`)
        .catch(err => {
          console.log(err);
          this.snackbar = true;
          store.commit("ALERT", "此日期沒有資料");
        });
      let rows = [];
      let h_point_number = 10;
      let h_start_day = moment(
        this.date.split("-"),
        dateformat[this.price_mode]
      )
        .subtract(h_point_number, this.price_mode + "s")
        .format(dateformat[this.price_mode]);
      // history price
      while (h_start_day != res.data.time) {
        let res_h = await this.$ajax.get(
          `/data?date=${h_start_day}&mode=${mode}`
        );
        h_start_day = moment(
          h_start_day.split("-"),
          dateformat[this.price_mode]
        )
          .add(1, this.price_mode + "s")
          .format(dateformat[this.price_mode]);
        rows.push({
          日期: h_start_day,
          預測價格: this.history ? res_h.data["pred1"] : null,
          實際價格: res_h.data["ans1"]
        });
      }
      // future price
      let i = 1;
      while (res.data[`pred${i}`]) {
        let split_time = res.data.time.split("-");
        res.data.time = moment(split_time, dateformat[this.price_mode])
          .add(1, this.price_mode + "s")
          .format(dateformat[this.price_mode]);
        rows.push({
          日期: res.data.time,
          預測價格: res.data[`pred${i}`],
          // 實際價格: this.history ? res.data[`ans${i}`] : null
          實際價格: this.history ? res.data[`ans${i}`] : (i==1) ? res.data[`pred${i}`] : null
        });
        i++;
      }
      this.chartData = rows;
    },
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
    DisplayHistory() {
      this.history_btn = !this.history_btn;
    }
  },
  data: function() {
    return {
      multiLine: true,
      snackbar: false,
      extend: {
        series: {
          smooth: false
        },
        legend: {
          left: 20
        }
      },
      yAxis: {
        min: 40
      }
    };
  }
};
</script>

<style scoped>
#q_btn {
  margin: auto;
  width: 150px;
  z-index: 2;
}
#outter-box {
  height: 100%;
  width: 90%;
  margin: auto;
  margin-top: 0;
}
</style>

