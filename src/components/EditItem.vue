<template>
  <div class="mt-3">
    <h5 class="mb-3">Edit Task</h5>
    <form @submit.prevent="updateTask">
      <div class="input-group">
        <input class="form-control" v-model="task.name" required>
        <button class="btn btn-outline-secondary" type="button" @click="cancelEdit">Cancel</button>
        <button class="btn btn-outline-success" type="submit">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    task: Object
  },
  methods: {
    async updateTask() {
      await axios.put(`http://localhost:3000/todoList/${this.task.id}`, this.task)
      this.$emit('task-edited')
    },
    cancelEdit() {
      this.$emit('edit-cancel')
    }
  }
}
</script>