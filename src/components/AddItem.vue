<template>
  <div class="my-3">
    <div class="w-50 mx-auto">
      <form @submit.prevent="addTask">
        <div class="input-group">
          <input class="form-control" v-model="newTask.name" placeholder="Enter your new task here" required />
          <button class="btn btn-primary" type="submit">+ Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      newTask: {
        name: '',
        finished: false
      }
    }
  },
  methods: {
    async addTask() {
      await axios.post(`http://localhost:3000/todoList`, this.newTask);
      this.$emit('task-added');
      this.newTask.name = ''
    }
  }
}
</script>