<template>
  <div class="todo-app-container">
    <h1>👉  TODO LISTE</h1>
    <button class="add-todo-btn" @click="showAddTodoForm = true">🗒 Ajouter Todo</button>

    <TodoForm
      v-if="showAddTodoForm || editingTodo"
      :show="showAddTodoForm || editingTodo"
      :todo="editingTodo"
      @submit="addOrUpdateTodo"
      @close="closeForm"
    />

    <div v-if="todos.length > 0">
      <h2> {{todos.length }} Todos !!</h2>
      <h2> {{ incompleteTodosCount }} Todos à faire 🤓</h2>
      <h2>{{ completedTodosCount }} Todos terminées 🥳</h2>
      <button @click="toggleIncompleteOnly" class="toggle-incomplete-btn">
        {{ showIncompleteOnly ? "Montrer tous les todos" : "Montrer que les todos à faire" }}
      </button>
      <button @click="removeAllTodos" class="delete-all-btn">Supprimer tout</button>

      <TodoItem
      v-for="(todo, index) in filteredTodos"
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
      const showIncompleteOnly = ref(false);

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

    const removeAllTodos = (): void => {
      todos.value = [];
    };

    const toggleIncompleteOnly = (): void => {
  showIncompleteOnly.value = !showIncompleteOnly.value;
};

    const incompleteTodosCount = computed(() => {
      return todos.value.filter(todo => !todo.isComplete).length;
    });

    const completedTodosCount = computed(() => {
      return todos.value.filter(todo => todo.isComplete).length;
    });

    const filteredTodos = computed(() => {
  const filtered = showIncompleteOnly.value
    ? todos.value.filter(todo => !todo.isComplete)
    : todos.value;
  return filtered;
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
      removeAllTodos,
      showIncompleteOnly,
      filteredTodos,
      toggleIncompleteOnly
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

.delete-all-btn {
  background-color: #f06b32 !important;
  color: black;
  padding: 10px;
  border: none !important;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.toggle-incomplete-btn {
  background-color: #32f058; 
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
.toggle-incomplete-btn:hover {
  background-color: #1c993a; 
}
</style>
