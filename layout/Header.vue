<template>
  <div class="flex flex-col min-h-screen">
    <div class="p-4 border-b flex items-center justify-between sticky top-0 bg-background z-50">
      <Topbar></Topbar>
      
    </div>
    <div class="container max-w-6xl p-4 md:px-8 flex-grow">
      <div class="flex flex-col space-y-6">
        <div>
          <div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 mr-4"
                  ><img class="aspect-square h-full w-full" src="https://avatar.vercel.sh/me"
                /></span>
                <div>
                  <div class="flex items-center space-x-2">
                    <a
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
                      href="/me"
                      >me</a
                    >
                    <div>/</div>
                    <a
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
                      href="/me/gobblet"
                      >gobblet</a
                    >
                    <div class="pl-1">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="inline-flex items-center rounded-md border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-1 px-1.5"
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
                        class="lucide lucide-terminal w-4 h-4 mr-1"
                      >
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" x2="20" y1="19" y2="19"></line>
                      </svg>
                      Shell
                    </div>
                  </div>
                  <div class="text-xs text-muted-foreground">
                    Updated
                    <!-- -->28 days ago
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <div class="hidden md:flex items-center">
                  <div class="flex items-center h-8 px-2 rounded-l-md border text-sm __className_a26a16">
                    snippet run me/gobblet
                  </div>
                  <div class="flex items-center justify-center h-8 w-8 rounded-r-md border border-l-0 cursor-pointer">
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
                      class="lucide lucide-copy w-4 h-4"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
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
                  0<!-- -->
                  Runs
                </div>
              </div>
            </div>
            <div class="ml-12 text-sm text-muted-foreground mt-1"></div>
          </div>
          <div
            class="editor text-xs font-mono rounded-md overflow-hidden border mt-4"
            style="position: relative; text-align: left; box-sizing: border-box; padding: 0; overflow: hidden"
          >
            <pre
              aria-hidden="true"
              style="
                margin: 0;
                border: 0;
                background: none;
                box-sizing: inherit;
                display: inherit;
                font-family: inherit;
                font-size: inherit;
                font-style: inherit;
                font-variant-ligatures: inherit;
                font-weight: inherit;
                letter-spacing: inherit;
                line-height: inherit;
                tab-size: inherit;
                text-indent: inherit;
                text-rendering: inherit;
                text-transform: inherit;
                white-space: pre-wrap;
                word-break: keep-all;
                overflow-wrap: break-word;
                position: relative;
                pointer-events: none;
                padding-top: 8px;
                padding-right: 8px;
                padding-bottom: 8px;
                padding-left: 8px;
              "
            ><span class="editor_line_number">1</span><br></pre>
            <textarea
              style="
                margin: 0;
                border: 0;
                background: none;
                box-sizing: inherit;
                display: inherit;
                font-family: inherit;
                font-size: inherit;
                font-style: inherit;
                font-variant-ligatures: inherit;
                font-weight: inherit;
                letter-spacing: inherit;
                line-height: inherit;
                tab-size: inherit;
                text-indent: inherit;
                text-rendering: inherit;
                text-transform: inherit;
                white-space: pre-wrap;
                word-break: keep-all;
                overflow-wrap: break-word;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                resize: none;
                color: inherit;
                overflow: hidden;
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
                -webkit-text-fill-color: transparent;
                padding-top: 8px;
                padding-right: 8px;
                padding-bottom: 8px;
                padding-left: 8px;
              "
              class="npm__react-simple-code-editor__textarea"
              readonly=""
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
              data-gramm="false"
            ></textarea>
          </div>
        </div>
        <nav role="navigation" aria-label="pagination" class="mx-auto flex w-full justify-center">
          <ul class="flex flex-row items-center gap-1">
            <li class="">
              <a
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pl-2.5"
                aria-label="Go to previous page"
                href="/?page=1"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                >
                  <path
                    d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Previous</span></a
              >
            </li>
            <li class="">
              <a
                aria-current="page"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                href="/?page=1"
                >1</a
              >
            </li>
            <li class="">
              <a
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pr-2.5"
                aria-label="Go to next page"
                href="/?page=1"
                ><span>Next</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
