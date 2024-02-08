<template>
  <div class="flex flex-col space-y-6">
    <div v-for="snippet in list">
      <SnippetHeader :snippet="snippet"></SnippetHeader>
      <SnippetBody :snippet="snippet"></SnippetBody>
    </div>
    <PageNavigation :max="1" :current="1"></PageNavigation>
  </div>
</template>

<script setup>
import SnippetHeader from './SnippetHeader.vue';
import SnippetBody from './SnippetBody.vue';
import PageNavigation from './PageNavigation.vue';

const list = [{ name: 'hello', owner: 'snippets', script: 'echo hello', platform: 'shell' }];
</script>
