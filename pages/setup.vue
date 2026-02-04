<script setup>
import {
    IconDeviceDesktop,
    IconHeadphones,
    IconDeviceLaptop,
    IconKeyboard,
    IconMouse,
    IconVideo,
    IconArrowLeft,
    IconMusic,
    IconHome,
    IconBulb,
} from "@tabler/icons-vue";

definePageMeta({
    pageTransition: {
        name: "fade",
        mode: "out-in",
    },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Dancing+Script:wght@400..700&display=swap");
</style>

<template>
    <div class="bg-gray-50 dark:bg-neutral-900 min-h-screen font-sans">
        <!-- Navigation -->
        <main id="content" class="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-12">
            <!-- Profile -->
            <AppHeader :links="[{ label: 'Inicio', to: '/' }, { label: 'Developer', to: '/developer' }]" />
            <!-- End Profile -->

            <header class="text-center space-y-2 pt-2">
                <h2 class="text-3xl md:text-3xl font-bold text-gray-800 dark:text-neutral-100 pb-3">
                    Mi Setup
                </h2>
                <AppWavyDivider />
            </header>

            <!-- Hero Image -->
            <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl group">
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500">
                </div>
                <NuxtImg src="/images/personal/escritorio_1.JPG" alt="Mi escritorio completo"
                    class="w-full h-auto object-cover max-h-[500px]" />
            </div>

            <!-- Gear Grid -->
            <div class="flex flex-col gap-6">

                <!-- Computador -->
                <div
                    class="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-3 text-gray-800 dark:text-neutral-200">
                        <IconDeviceLaptop class="size-6" />
                        <h2 class="font-semibold">Equipo</h2>
                    </div>
                    <ul class="space-y-2">
                        <li class="text-sm text-gray-600 dark:text-neutral-400 flex justify-between">
                            <span>Computador:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200">Macbook Pro M1 Pro 16"
                                2021</span>
                        </li>
                    </ul>
                </div>

                <!-- Pantallas -->
                <div
                    class="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-3 text-gray-800 dark:text-neutral-200">
                        <IconDeviceDesktop class="size-6" />
                        <h2 class="font-semibold">Monitores</h2>
                    </div>
                    <ul class="space-y-2">
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Principal:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">Xiaomi Mi Curved
                                34" EU</span>
                        </li>
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Secundario:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">Samsung 19"</span>
                        </li>
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Portátil:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">Arzopa Portátil S1
                                15.6"</span>
                        </li>
                    </ul>
                </div>

                <!-- Periféricos Entrada -->
                <div
                    class="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-3 text-gray-800 dark:text-neutral-200">
                        <IconKeyboard class="size-6" />
                        <h2 class="font-semibold">Periféricos</h2>
                    </div>
                    <ul class="space-y-2">
                        <li class="text-sm text-gray-600 dark:text-neutral-400 flex justify-between items-center">
                            <span>Teclado 1:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200">Logitech MX Keys Mini
                                (Grafito)</span>
                        </li>
                        <li class="text-sm text-gray-600 dark:text-neutral-400 flex justify-between items-center">
                            <span>Teclado 2:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200">NuPhy Air75 v2</span>
                        </li>
                        <li class="text-sm text-gray-600 dark:text-neutral-400 flex justify-between items-center">
                            <span>Mouse:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200">Logitech MX Master 3s</span>
                        </li>
                    </ul>
                </div>

                <!-- Audio & Video -->
                <div
                    class="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-3 text-gray-800 dark:text-neutral-200">
                        <IconHeadphones class="size-6" />
                        <h2 class="font-semibold">Audio y Video</h2>
                    </div>
                    <ul class="space-y-2">
                        <li class="text-sm text-gray-600 dark:text-neutral-400 flex justify-between">
                            <span>Audífonos:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200">Sonos Ace Blanco</span>
                        </li>
                        <li class="text-sm text-gray-600 dark:text-neutral-400 flex justify-between">
                            <span>Parlantes:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200">Logitech Z407 80w</span>
                        </li>
                        <li class="text-sm text-gray-600 dark:text-neutral-400 flex justify-between">
                            <span>Webcam:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200">Logitech Streamcam Plus</span>
                        </li>
                    </ul>
                </div>

                <!-- Mueble -->
                <div
                    class="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-3 text-gray-800 dark:text-neutral-200">
                        <IconHome class="size-6" />
                        <h2 class="font-semibold">Mobiliario</h2>
                    </div>
                    <ul class="space-y-2">
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Escritorio:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">Hecho a mano,
                                diseño a medida</span>
                        </li>
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Silla:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">IOO Ultra Gris
                                claro</span>
                        </li>
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Rack:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">Hecho a mano
                                (Plantas)</span>
                        </li>
                    </ul>
                </div>

                <!-- Iluminación -->
                <div
                    class="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-3 text-gray-800 dark:text-neutral-200">
                        <IconBulb class="size-6" />
                        <h2 class="font-semibold">Iluminación</h2>
                    </div>
                    <ul class="space-y-2">
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Barra de luz:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">Xiaomi Mi Computer
                                Monitor Light Bar</span>
                        </li>
                        <li
                            class="text-sm text-gray-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:justify-between">
                            <span>Lámpara:</span>
                            <span class="font-medium text-gray-800 dark:text-neutral-200 text-right">Tertial -
                                Ikea</span>
                        </li>
                    </ul>
                </div>

            </div>

        </main>

        <!-- Footer Simple -->
        <!-- Footer Simple -->
        <AppFooter />
    </div>
</template>
