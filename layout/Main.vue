<template>
  <div class="container max-w-6xl p-4 md:px-8 pb-16 h-full">
    <main class="mt-32 w-full flex flex-col gap-16 overflow-y-auto">
      <Hero></Hero>
      <SnippetList></SnippetList>
    </main>
  </div>
</template>

<script setup>
import Hero from './Hero.vue';
import SnippetList from './SnippetList.vue';
</script>
