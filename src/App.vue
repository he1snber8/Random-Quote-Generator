<template>
  <main class="app">
    <h1>Random Quote Generator</h1>
    <QuoteView />
  </main>
</template>

<script setup>
import QuoteView from './components/QuoteView.vue';
</script>

<style>
.app{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;}
</style>