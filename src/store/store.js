import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        data: []
    },
    getters: {
        getData: state => {
            return state.data;
        }
    }
})
