<template>
  <div class="todo-item">
    <h2 :class="{ completed: todo?.isComplete }">{{ todo?.title }}</h2>
    <span>⏱ {{ todo?.duration }} min</span>
    <span>{{ todo?.isComplete ? 'Terminé ✅' : 'À faire 🚨' }}</span>
    <div class="todo-btn">
      <button @click="toggleComplete" class="button status-button">
        {{ todo?.isComplete ? 'Modifier statut' : 'Todo terminé  ✅' }}
      </button>
      <button @click="editTodo" class="button action-button">Modifier</button>
      <button @click="removeTodo" class="button delete-button">Supprimer</button>
    </div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Todo {
  title: string;
  duration: number;
  isComplete: boolean;
}

  export default defineComponent({
    props: {
      todo: Object,
      edit: Function,
      remove: Function,
      toggleComplete: Function,
    },
    setup(props) {
      const editTodo = () => {
      props.edit?.(props.todo);
    };

    const removeTodo = () => {
      props.remove?.();
    };
  
      const toggleComplete = () => {
      props.toggleComplete?.(props.todo);
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
.todo-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  color: #818181;
  border: 1px solid #93c5fd;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
}
.todo-btn {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}

.completed {
  text-decoration: line-through;
  color: #6b7280;
}

.status-button {
  background-color: transparent;
  color: black;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}
.action-button {
  background-color: #32f058;
  color: black;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.delete-button {
  background-color: #f06b32;
  color: black;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.button:hover {
  background-color: #35353561;
}
</style>
  