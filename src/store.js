import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        price_mode: '',
        date: '',
        fish: 'wu',
        rows: [{ '日期': '2010-1-1', '實際價格': 0 }],
        alertmes: '',
        history : true,
        loading : false,
    },
    mutations: {
        SET_DATE_UNIT(state, mode) {
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
        SET_LOADING(state) {
            state.loading = !state.loading;
        }

    }
})
export default store
