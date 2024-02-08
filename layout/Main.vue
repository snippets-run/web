<template>
  <main class="mt-32 w-full flex flex-col md:flex-row gap-16">
    <div class="flex items-center space-x-4">
      <img
        alt="logo"
        loading="lazy"
        width="30"
        height="30"
        decoding="async"
        data-nimg="1"
        style="color: transparent"
        src="/assets/icon.svg"
      />
      <div class="font-semibold">snippets.run</div>
    </div>
    <div class="text-sm text-muted-foreground mt-8">A repository for your runnable code snippets</div>
    <div class="mt-8">
      <a
        target="_blank"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
        href="#"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-4 h-4"
        >
          <title>...</title>
          <path
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          ></path>
        </svg>
      </a>
    </div>
  </main>
</template>
