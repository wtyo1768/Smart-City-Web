<template>
  <div id="query_region">
    <div id="select-box">
      <div id="date-picker-box">
        <v-menu ref="menu" v-model="menu" :close-on-content-click="false">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="primary" outlined="false">
              <span class="mr-2">{{s_date || "選擇日期"}}</span>
              <v-icon>mdi-calendar-month</v-icon>
            </v-btn>
          </template>
          <v-date-picker
            :type="month ? 'month' : 'date'"
            v-model="s_date"
            @input="menu = false"
            show-current="false"
          ></v-date-picker>
        </v-menu>
      </div>
      <v-spacer />
      <v-btn class="btn" @click="DisplayWu" color="primary" :outlined="wu_btn">
        <span class="mr-2">吳郭魚</span>
        <v-icon>mdi-fish</v-icon>
      </v-btn>
      <v-btn class="btn" @click="DisplayChi" color="primary" :outlined="chi_btn">
        <span class="mr-2">虱目魚</span>
        <v-icon>mdi-fish</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="btn" color="primary" dark v-on="on" outlined="false">
            <span class="mr-2">{{price_mode ||"選擇單位" }}</span>
            <v-icon>mdi-currency-usd</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="ChangeUnitPrice" v-for="(obj, index) in prices" :key="index">
            <v-list-item-title>{{ obj.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn @click="DisplayHistory" color="primary" :outlined="history_btn">
        <span class="mr-2">歷史紀錄</span>
        <v-icon>mdi-currency-usd</v-icon>
      </v-btn>
    </div>
  </div>
</template>


<script>
import store from "../store";
import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "query_region",
  computed: {
    ...mapState(["date"]),
    s_date: {
      get() {
        return this.date;
      },
      set(date) {
        if (this.price_mode == "周價格")
          while (moment(date).format("dddd") != "Saturday") {
            date = moment(date, "YYYY-MM-DD")
              .subtract(1, "days")
              .format("YYYY-MM-DD");
          }
        store.commit("SET_DATE", date);
      }
    }
  },
  methods: {
    ChangeUnitPrice(e) {
      let mode = {
        月價格: "month",
        日價格: "day",
        周價格: "week"
      };
      if (
        e.target.innerText == "月價格" ||
        e.target.innerText == "日價格" ||
        e.target.innerText == "周價格"
      ) {
        this.price_mode = e.target.innerText;
        if (this.price_mode == "月價格") this.month = true;
        else this.month = false;
        store.commit("SET_DATE_UNIT", mode[this.price_mode]);
      }
    },
    DisplayWu() {
      this.$data.wu_btn = false;
      this.$data.chi_btn = true;
      store.commit("SELECT_FISH", "wu");
    },
    DisplayChi() {
      this.$data.chi_btn = false;
      this.$data.wu_btn = true;
      store.commit("SELECT_FISH", "chi");
    },
    ChangeUnitDate() {
      this.$data.date_btn = false;
      this.$data.month_btn = true;
      this.month = false;
    },
    ChangeUnitMonth() {
      this.month = true;
      this.$data.month_btn = false;
      this.$data.date_btn = true;
    },
    DisplayHistory() {
      store.commit("SET_HISTORY");
      this.history_btn = !this.history_btn;
    }
  },
  data: function() {
    return {
      prices: [{ title: "月價格" }, { title: "周價格" }, { title: "日價格" }],
      menu: false,
      wu_btn: false,
      chi_btn: true,
      month_btn: true,
      date_btn: false,
      month: false,
      history_btn: false,
      price_mode: ""
    };
  }
};
</script>

<style scoped>
#query_region {
  width: 100%;
}
.btn {
  width: 11%;
  margin-right: 15px;
}
#select-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
}
#date-picker-box {
  width: 13%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
</style>