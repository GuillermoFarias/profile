<template>
    <!-- ========== FOOTER ========== -->
    <footer class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6 border-t border-gray-200 dark:border-neutral-700">
            <div class="flex flex-wrap justify-between items-center gap-2">
                <div>
                    <p class="text-xs text-gray-600 dark:text-neutral-400">
                        © {{ new Date().getFullYear() }} Guillermo Farías.
                    </p>
                </div>
                <!-- End Col -->
                <!-- List -->
                <ul class="flex flex-wrap items-center gap-x-4">
                    <li class="inline-block text-xs">
                        <NuxtLink to="/"
                            class="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400">
                            Inicio
                        </NuxtLink>
                    </li>
                    <li class="inline-block text-xs">
                        <NuxtLink to="/developer"
                            class="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400">
                            Developer
                        </NuxtLink>
                    </li>
                    <li class="inline-block text-xs">
                        <NuxtLink to="/setup"
                            class="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400">
                            Setup
                        </NuxtLink>
                    </li>
                    <li class="inline-block text-xs">
                        <a class="text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                            href="https://github.com/guillermofarias">
                            Github
                        </a>
                    </li>
                    <li class="inline-block">
                        <!-- Dark Mode -->
                        <button type="button"
                            class="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-theme-click-value="dark">
                            <span class="sr-only">Dark</span>
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        </button>
                        <button type="button"
                            class="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-theme-click-value="light">
                            <span class="sr-only">Light</span>
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
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
                        </button>
                        <!-- End Dark Mode -->
                    </li>
                </ul>
                <!-- End List -->
            </div>
        </div>
    </footer>
    <!-- ========== END FOOTER ========== -->
</template>
