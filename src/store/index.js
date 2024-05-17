import { createStore } from 'vuex';
import axios from 'axios';

export default createStore( {
  state: {
    items: []
  },
  mutations: {
    setTasks(state, items) {
      state.items = items;
    },
    addTask(state, item) {
      state.items.push(item);
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      const response = await axios.get('http://localhost:3000/todoList');
      commit('setTasks', response.data)
    },
    async addTask({ commit }, newTask) {
      const response = await axios.post('http://localhost:3000/todoList', newTask);
      commit('addTask', response.data)
    }
  }
});