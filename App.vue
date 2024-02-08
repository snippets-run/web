<template>
  <Header></Header>
  <div class="container max-w-6xl p-4 md:px-8 pb-16">
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import Main from './layout/Main.vue';
</script>
