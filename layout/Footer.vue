<template>
  <div class="flex-grow grid sm:grid-cols-3 gap-8">
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
          <line x1="10" x2="21" y1="14" y2="3"></line>
        </svg>
      </a>
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
      >
      <a
        class="text-sm underline flex items-center text-muted-foreground hover:no-underline hover:text-primary"
        href="/legal/privacy"
        >Privacy</a
      >
    </div>
  </div>
  <div class="mt-8 border-t w-full pt-4 flex items-center justify-between">
    <div class="text-muted-foreground text-sm">© 2024 snippets.run</div>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
      type="button"
      aria-haspopup="menu"
      aria-expanded="false"
      data-state="closed"
    >
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
        class="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
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
        class="lucide lucide-moon absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
      <span class="sr-only">Toggle theme</span>
    </button>
  </div>
</template>
