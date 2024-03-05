<template>
  <main class="dark:bg-white">
    <div class="content">
    <h1>Create an account</h1>
    <p>
        <input type="text" placeholder="email" v-model="email">
    </p>
    <p>
        <input type="password" placeholder="password" v-model="password">
    </p>
    <p>
        <button @click="register">Submit</button>
    </p>
</div>
  </main>
</template>
<script setup lang="ts">
import { ref} from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from 'vue-router'
const email = ref("")
const password = ref("")
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Succesfully registered")
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message)
        })
}

</script>
<style scoped>
main {
  max-width: 100vw;
  height: 100vh;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}
</style>
