<template>
    <div>
      <span :class="{ completed: todo.isComplete }">{{ todo.title }}</span>
      <span>{{ todo.duration }} min</span>
      <span>{{ todo.isComplete }} </span>
      <button @click="toggleComplete">Toggle Complete</button>
      <button @click="editTodo">Edit</button>
      <button @click="removeTodo">Remove</button>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      todo: Object,
      edit: Function,
      remove: Function,
      toggleComplete: Function,
    },
    setup(props) {
      const editTodo = () => {
        props.edit(props.todo);
      };
  
      const removeTodo = () => {
        props.remove();
      };
  
      const toggleComplete = () => {
        props.toggleComplete(props.todo);
      };
  
      return {
        editTodo,
        removeTodo,
        toggleComplete,
      };
    },
  });
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
    color: #6b7280;
  }
  </style>
  