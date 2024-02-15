<template>
  <div class="add-todo-modal">
    <h2>
      <strong>
        Ajouter un Todo
      </strong>
      </h2>
    <form @submit.prevent="submitForm">
      <div>
        <label>Titre:</label>
        <input v-model="title" type="text" required />
      </div>
      <div>
        <label>Durée de la tâche (min):</label>
        <input v-model.number="duration" type="number" required />
      </div>
      <div>
        <label>Responsable:</label>
        <select v-model="proprio" required>
          <option v-for="name in responsableNames" :key="name" :value="name">{{ name }}</option>
        </select>
      </div>
      <div>
        <button class="button add-button" type="submit">{{ editingTodo ? 'Modifier' : 'Ajouter' }}</button>
        <button class="cancel-button" type="button" @click="close">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent } from 'vue';

export default defineComponent({
  props: {
    show: Boolean,
    todo: Object,
    editingTodo: Object,
  },
  emits: ['submit', 'close'],
  setup(props, { emit }) {
    const title = ref('');
    const duration = ref('');
    const proprio = ref('');

    const responsableNames = ref(['UX designer', 'Developer', 'Commercial']);

    watch(() => props.todo, (newTodo) => {
      if (newTodo) {
        title.value = newTodo.title || '';
        duration.value = newTodo.duration?.toString() || '';
        proprio.value = newTodo.proprio || '';
      }
    });

    const submitForm = () => {
      if (title.value && duration.value) {
        emit('submit', {
          title: title.value,
          duration: parseInt(duration.value),
          proprio: proprio.value,
          isComplete: props.todo ? props.todo.isComplete : false,
        });
        resetForm();
      }
    };

    const close = () => {
      emit('close');
      resetForm();
    };

    const resetForm = () => {
      title.value = '';
      duration.value = '';
      proprio.value = '';
    };

    return {
      title,
      duration,
      proprio,
      submitForm,
      close,
      responsableNames,
    };
  },
});
</script>


<style scoped>
.add-todo-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50vw;
  height: 50vh;
  top: 25%;
  left: 25%;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px white solid;
  border-radius: 15px;
  color: white;
  padding: 20px;
}

form {
  width: 100%;
}

label {
  margin-bottom: 5px;
  display: block;
}

input, select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px !important;
  height: 25px !important
}

.cancel-button {
  background-color: #ffffff !important;
  color: black;
  padding: 10px;
  border: none !important;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

button {
  background-color: #32f058;
  color: black;
  padding: 10px;
  border: none !important;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

button[type="submit"] {
  background-color: #32f058;
}

button[type="button"] {
  background-color: transparent;
  border: 1px solid white;
}

</style>
