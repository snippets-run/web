<template>
  <div class="container max-w-6xl p-4 md:px-8 flex-grow">
    <div class="flex flex-col space-y-6">
      <div>
        <SnippetHeader></SnippetHeader>
        <SnippetBody></SnippetBody>
      </div>
      <PageNavigation></PageNavigation>
    </div>
  </div>
</template>

<script setup>
import SnippetHeader from './SnippetHeader.vue';
import SnippetBody from './SnippetBody.vue';
import PageNavigation from './PageNavigation.vue';
</script>
