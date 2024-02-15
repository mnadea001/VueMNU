<template>
  <div class="todo-app-container">
    <h1>Todo Application</h1>
    <button class="add-todo-btn" @click="showAddTodoForm = true">Add Todo</button>

    <TodoForm
      v-if="showAddTodoForm || editingTodo"
      :show="showAddTodoForm || editingTodo"
      :todo="editingTodo"
      @submit="addOrUpdateTodo"
      @close="closeForm"
    />

    <div v-if="todos.length > 0">
      <h2> 👉 {{todos.length }} Todos !!</h2>
      <h2> {{ incompleteTodosCount }} Todos à faire 🤓</h2>
      <h2>{{ completedTodosCount }} Todos terminées 🥳</h2>
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
      <span class="no-todo">
      <h2>Pas de todos pour le moment ! 😞</h2>
    </span>
    </div>

  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import TodoForm from '../components/TodoForm.vue';
import TodoItem from '../components/TodoItem.vue';

interface Todo {
  title: string;
  duration: number;
  isComplete: boolean;
}

export default {
  
  components: {
    TodoForm,
    TodoItem,
  },
  setup() {
    const todos = ref<Todo[]>([]);
    const showAddTodoForm = ref(false);
    const editingTodo = ref<Todo | null>(null);

    const addOrUpdateTodo = (todo: Todo): void => {
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

    const editTodo = (todo: Todo): void => {
      editingTodo.value = todo;
      showAddTodoForm.value = true;
    };

    const closeForm = (): void => {
      showAddTodoForm.value = false;
    };

    const removeTodo = (index: number): void => {
      todos.value.splice(index, 1);
    };

    const toggleComplete = (todo: Todo) => {
      todo.isComplete = !todo.isComplete;
    };

    const incompleteTodosCount = computed(() => {
      return todos.value.filter(todo => !todo.isComplete).length;
    });

    const completedTodosCount = computed(() => {
      return todos.value.filter(todo => todo.isComplete).length;
    });

    return {
      todos,
      showAddTodoForm,
      closeForm,
      removeTodo,
      toggleComplete,
      addOrUpdateTodo,
      editTodo,
      incompleteTodosCount,
      completedTodosCount,
    };
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #6b7280;
}

.no-todo {
  display: block;
  padding: 15px; 
  border: 1px solid white;
  border-radius: 5px;
}

.add-todo-btn{
  background-color: pink;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1.5em;
  margin-top: 10px;
  margin-bottom: 10px;
}
.add-todo-btn:hover{
  background-color: rgb(246, 139, 157);
}
</style>
