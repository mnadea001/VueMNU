<template>
    <main class="dark:bg-white">
      <h1 class="text-3xl font-semibold text-center my-4">MENTAL IS VITAL</h1>

  <div class="quote-card my-4">
    <p>{{ quote }}</p>
    <p>- {{ author }}</p>
  </div>
</main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const quote = ref<string>('');
const author = ref<string>('');

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=handleQuoteResponse';
  document.body.appendChild(script);
});


window.handleQuoteResponse = (data: any) => {
  quote.value = data.quoteText;
  author.value = data.quoteAuthor;
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

main {
  width: 100vw;
  height: 100vh;
  display: block;
}

h1 {
  font-family: "Anton", sans-serif;
}

.quote-card {
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
}

</style>