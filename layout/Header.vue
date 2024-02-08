<template>
  <div class="p-4 border-b sticky top-0 bg-white z-50">
    <div class="flex items-center justify-items-stretch space-x-4 w-full">
      <a class="w-16 h-11 block" href="/home"><img alt="/logo" src="/assets/icon-a0698e3a.svg" /></a>
      <div class="w-full">
        <h1 class="font-semibold">snippets.run</h1>
        <p class="text-sm">A repository for runnable code snippets</p>
      </div>
      <input
        class="h-9 w-72 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hidden sm:block"
        placeholder="Search..."
        value=""
      />
      <div class="flex items-center space-x-4">
        <a class="font-semibold" href="/new"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-plus w-5 h-5"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path></svg></a
        ><button
          class="inline-block rounded-full w-8 h-8 overflow-hidden"
          type="button"
          id="radix-:R55nlla:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <span><img class="aspect-square h-full w-full" src="https://avatar.vercel.sh/me" /></span>
        </button>
      </div>
    </div>
  </div>
</template>
