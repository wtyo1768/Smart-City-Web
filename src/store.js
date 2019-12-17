import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        price_mode: '',
        date: '',
        fish: 'wu',
        rows: [{ '日期': '2010-1-1', '實際價格': 0 }],
        alertmes: '',
        history: true,
    },
    mutations: {
        SET_DATE_UNIT(state, mode) {
            if (mode == 'week' && state.date)
                while (moment(state.date).format("dddd") != "Saturday") {
                    state.date = moment(state.date, "YYYY-MM-DD")
                        .subtract(1, "days")
                        .format("YYYY-MM-DD");
                }
            state.price_mode = mode
        },
        SET_DATE(state, date) {
            state.date = date
        },
        SELECT_FISH(state, fish) {
            state.fish = fish
        },
        ALERT(state, mes) {
            state.alertmes = mes
        },
        SET_ROWS(state, row) {
            state.rows = row;
        },
        SET_HISTORY(state) {
            state.history = !state.history;
        },

    }
})
export default store
