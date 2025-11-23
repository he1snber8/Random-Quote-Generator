<template>
  <section class="quote-card">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Failed to load quote.</p>
    <div v-else>
      <blockquote>{{ quote.text }}</blockquote>
      <cite v-if="quote.author">- {{ quote.author }}</cite>
    </div>
    <button @click="fetchQuote">New Quote</button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { client, GET_RANDOM_QUOTE } from '../graphql';

const quote = ref({ text: '', author: '' });
const loading = ref(false);
const error = ref(false);

const fetchQuote = async () => {
  loading.value = true;
  error.value = false;
  try {
    const data = await client.request(GET_RANDOM_QUOTE);
    quote.value = data.randomQuote;
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchQuote);
</script>

<style scoped>
.quote-card{max-width:600px;width:100%;text-align:center;padding:1.5rem;border-radius:8px;border:1px solid #ddd;box-shadow:0 2px 6px rgba(0,0,0,.06);}
blockquote{font-size:1.25rem;margin-bottom:1rem;}
button{margin-top:1rem;padding:.5rem 1rem;}
</style>