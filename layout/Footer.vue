<template>
  <div class="flex-grow flex justify-between gap-4 container mx-auto px-8 sm:w-1/2">
    <div class="flex flex-col space-y-1">
      <h1 class="font-semibold">Resources</h1>
      <a
        class="text-sm underline flex items-center text-muted-foreground hover:no-underline hover:text-primary"
        target="_blank"
        href="https://docs.snippet.run"
        >Docs
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
          class="lucide lucide-external-link w-4 h-4 ml-2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" x2="21" y1="14" y2="3"></line></svg
      ></a>
    </div>
    <div class="flex flex-col space-y-1">
      <h1 class="font-semibold">Product</h1>
      <a
        class="text-sm underline flex items-center text-muted-foreground hover:no-underline hover:text-primary"
        href="/pricing"
        >Pricing</a
      ><a
        class="text-sm underline flex items-center text-muted-foreground hover:no-underline hover:text-primary"
        href="/changelog"
        >Changelog</a
      >
    </div>
    <div class="flex flex-col space-y-1">
      <h1 class="font-semibold">Legal</h1>
      <a
        class="text-sm underline flex items-center text-muted-foreground hover:no-underline hover:text-primary"
        href="/legal/terms"
        >Terms</a
      ><a
        class="text-sm underline flex items-center text-muted-foreground hover:no-underline hover:text-primary"
        href="/legal/privacy"
        >Privacy</a
      >
    </div>
  </div>
  <div class="mt-8 border-t py-4 px-8 flex items-center justify-between container mx-auto">
    <div class="text-muted-foreground text-sm">© snippets.run</div>
  </div>
</template>
