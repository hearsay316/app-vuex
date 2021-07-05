import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    count: 0,
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  mutations: {
    add(state, data) {
      state.count += data;
    },
  },
  actions: {
    asyncAdd({ commit }, payload) {
      setTimeout(() => {
        commit("add", payload);
      }, 1000);
    },
  },
  modules: {},
});
