<template>
  <h1 class="h2 text-center mt-3">Todo List</h1>
  <AddItem @task-added="fetchTasks" />
  <div class="row">
    <div class="col-6 py-3">
      <ViewItems :tasks="tasks" @task-updated="fetchTasks" @task-deleted="fetchTasks" />
    </div>
    <div class="col-6 py-3">
      <FinishedItems :tasks="tasks" @task-updated="fetchTasks" @task-deleted="fetchTasks" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AddItem from './components/AddItem.vue'
import ViewItems from './components/ViewItems.vue'
import FinishedItems from './components/FinishedItems.vue'

export default {
  components: {
    AddItem,
    ViewItems,
    FinishedItems
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    async fetchTasks() {
      const response = await axios.get(`http://localhost:3000/todoList`);
      this.tasks = response.data;
    }
  },
  created() {
    this.fetchTasks();
  }
}
</script>