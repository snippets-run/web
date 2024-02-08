<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <div class="flex items-center space-x-2">
        <a
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
          href="/me"
          >{{ snippet.owner }}</a
        >
        <span>/</span>
        <a
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
          href="/me/gobblet"
          >{{ snippet.name }}</a
        >
        <div class="pl-1">[platform]</div>
        <div
          class="inline-flex items-center rounded-md border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-1"
        >
          {{ snippet.platform }}
        </div>
      </div>
      <div class="text-xs text-muted-foreground">[...]</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="hidden md:flex items-center">
        <div class="flex items-center h-8 px-2 rounded-l-md border text-sm" v-if="snippet.owner">
          run {{ snippet.owner }}/{{ snippet.name }}
        </div>
        <div class="flex items-center h-8 px-2 rounded-l-md border text-sm" v-if="!snippet.owner">
          run {{ snippet.name }}
        </div>
        <div class="flex items-center justify-center h-8 w-8 rounded-r-md border border-l-0 cursor-pointer">
          <img src="../assets/copy.svg" class="w-4 h-4" />
        </div>
      </div>
      <div class="hidden md:flex items-center h-8 px-2 rounded-md border text-s-m text-xs font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-play-square w-4 h-4 mr-2"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="m9 8 6 4-6 4Z"></path>
        </svg>
        {{ stats.runs }} runs
      </div>
    </div>
  </div>
  <div class="ml-12 text-sm text-muted-foreground mt-1"></div>
</template>

<script setup>
defineProps({
  snippet: { type: Object, default: () => ({}) },
  stats: { type: Object, default: () => ({}) },
});
</script>
