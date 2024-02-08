<template>
  <div class="editor text-xs font-mono rounded-md overflow-hidden border mt-4">
    <pre aria-hidden="true">{{ snippet.script }}</pre>
  </div>
</template>

<script setup>
defineProps({
  snippet: { type: Object },
});
</script>
