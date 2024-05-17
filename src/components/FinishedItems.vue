<template>
  <div class="p-3">
    <h3 class="h5 mb-3">Accomplished Tasks</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="task in tasks" :key="task.id" v-show="task.finished">
        <div class="d-flex justify-content-between">
          <div>
            <input class="form-check-input me-3" type="checkbox" v-model="task.finished" @change="updateFinished(task)">
            <span :class="{ done: task.finished }">{{ task.name }}</span>
          </div>
          <div>
            <button class="btn btn-sm btn-danger" @click="deleteTask(task.id)">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    tasks: Array
  },
  methods: {
    async deleteTask(id) {
      await axios.delete(`http://localhost:3000/todoList/${id}`)
      this.$emit('task-deleted');
    },
    async updateFinished(task) {
      await axios.put(`http://localhost:3000/todoList/${task.id}`, task)
      this.$emit('task-updated')
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>