<template>
  <div class="flex items-center space-x-4">
    <a class="relative w-8 h-8 flex-shrink-0" href="/home"
      ><img
        alt="/logo"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        style="position: absolute; height: 100%; width: 100%; left: 0; top: 0; right: 0; bottom: 0; color: transparent"
        sizes="100vw"
    /></a>
    <div>
      <input
        class="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hidden sm:block"
        placeholder="Search..."
        value=""
      />
    </div>
    <a class="font-semibold hidden sm:block" href="/me">My Snippets</a>
    <a class="font-semibold hidden sm:block" href="/discover">All Snippets</a>
  </div>
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
      class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative w-8 h-8 rounded-full"
      type="button"
      id="radix-:R55nlla:"
      aria-haspopup="menu"
      aria-expanded="false"
      data-state="closed"
    >
      <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"
        ><img class="aspect-square h-full w-full" src="https://avatar.vercel.sh/me"
      /></span>
    </button>
  </div>
</template>
