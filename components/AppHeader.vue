<script setup>
defineProps({
    links: {
        type: Array,
        default: () => [],
        // Expected format: [{ label: 'String', to: 'String' }]
    },
});
</script>

<template>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <!-- Profile -->
        <div class="flex items-center gap-x-3">
            <div class="shrink-0">
                <NuxtImg class="shrink-0 size-20 rounded-full border border-gray-800 dark:border-neutral-700"
                    src="images/avatar2.png" alt="Guillermo Farías" />
            </div>

            <div class="grow">
                <h1 class="text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    Guillermo Farías
                </h1>
                <p class="text-xl text-gray-600 dark:text-neutral-400 dark:gradient-dark">
                    Senior Software Engineer
                </p>
            </div>
        </div>
        <!-- End Profile -->

        <!-- Navigation -->
        <nav v-if="links.length > 0">
            <ul class="flex items-center gap-x-6">
                <li v-for="link in links" :key="link.to">
                    <NuxtLink :to="link.to"
                        class="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <!-- End Navigation -->
    </div>
</template>
