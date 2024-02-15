<template>
  <div class="todo-app-container">
    <h1>Todo Application</h1>
    <button @click="showAddTodoForm = true">Add Todo</button>

    <TodoForm
      v-if="showAddTodoForm || editingTodo"
      :show="showAddTodoForm || editingTodo"
      :todo="editingTodo"
      @submit="addOrUpdateTodo"
      @close="closeForm"
    />

    <div v-if="todos.length > 0">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :edit="editTodo"
        :remove="() => removeTodo(index)"
        :toggleComplete="toggleComplete"
      />
    </div>

    <div v-else>
      <p>No todos for now! 😞</p>
    </div>

  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import TodoForm from '../components/TodoForm.vue';
import TodoItem from '../components/TodoItem.vue';

export default {
  components: {
    TodoForm,
    TodoItem,
  },
  setup() {
    const todos = ref([]);
    const showAddTodoForm = ref(false);
    const editingTodo = ref(null);

    const addOrUpdateTodo = (todo) => {
      if (editingTodo.value) {
        // Modifier un todo item
        Object.assign(editingTodo.value, todo);
        editingTodo.value = null; 
      } else {
        // Ajouter un todo item
        todos.value.push(todo);
      }

      closeForm();
    };

    const editTodo = (todo) => {
      editingTodo.value = todo;
      showAddTodoForm.value = true;
    };

    const closeForm = () => {
      showAddTodoForm.value = false;
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const toggleComplete = (todo) => {
      todo.isComplete = !todo.isComplete;
    };

    return {
      todos,
      showAddTodoForm,
      closeForm,
      removeTodo,
      toggleComplete,
      addOrUpdateTodo,
      editTodo,
    };
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #6b7280;
}
</style>
