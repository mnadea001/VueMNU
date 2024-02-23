<template>
  <main class="dark:bg-white">
    <button
          @click="goBack"
          class="text-lg font-medium text-black-500 hover:underline mb-4 flex"
        >
        <img :src="backIcon" class="w-10 h-10" /> Back
        </button>
    <h1 class="text-3xl font-semibold text-center my-4">MENTAL IS VITAL</h1>
    <div class="content">
      <img :src="quoteImageSrc" class="w-80 h-80 rounded-full mt-4" />
    </div>
    <div class="quote-card my-4">
      <p class="text-3xl font-semibold text-center my-4">{{ quote }}</p>
      <p class="text-3xl font-semibold text-center my-4">- {{ author }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import quoteImg from "../assets/mental.gif";
import { useRouter } from "vue-router";
import backIcon from "../assets/back.svg";
const quote = ref<string>("");
const author = ref<string>("");
const quoteImageSrc: string = quoteImg;

const router = useRouter();

function goBack() {
  router.go(-1);
}

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=handleQuoteResponse";
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

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}
.quote-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
