<template>
  <LayoutContainer>
    <main class="app">
      <h1>Random Quote Generator</h1>
      <QuoteView />
    </main>
  </LayoutContainer>
</template>

<script setup>
import LayoutContainer from './components/LayoutContainer.vue';
import QuoteView from './components/QuoteView.vue';
</script>

<style>.app{text-align:center;}</style>