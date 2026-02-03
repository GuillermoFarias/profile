<script setup>
import {
    IconHome,
    IconBriefcase,
    IconHeart,
    IconDeviceDesktop,
    IconArrowLeft,
    IconCpu,
    IconBook,
    IconUsers,
    IconArrowRight,
} from "@tabler/icons-vue";

definePageMeta({
    pageTransition: {
        name: "fade",
        mode: "out-in",
    },
});

const julianAge = new Date().getFullYear() - 2018;
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Dancing+Script:wght@400..700&display=swap");

.dancing-script-700 {
    font-family: "Dancing Script", cursive;
    font-weight: 700;
}
</style>

<template>
    <div class="bg-gray-50 dark:bg-neutral-900 min-h-screen font-sans">
        <!-- Navigation -->
        <main id="content" class="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-10">
            <!-- Profile -->
            <AppHeader :links="[{ label: 'Inicio', to: '/' }, { label: 'Setup', to: '/setup' }]" />
            <!-- End Profile -->

            <!-- Page Title -->
            <header class="text-center space-y-2 pt-2">
                <h2 class="text-3xl md:text-3xl font-bold text-gray-800 dark:text-neutral-100 pb-3">
                    Más allá del código
                </h2>
                <AppWavyDivider />
            </header>

            <!-- Personal Section -->
            <section class="grid md:grid-cols-2 gap-8 items-start">
                <div class="space-y-4">
                    <div class="flex items-center gap-x-2 text-gray-800 dark:text-neutral-200">
                        <IconHome class="size-6" />
                        <h2 class="text-xl font-semibold">
                            Vida y Equilibrio
                        </h2>
                    </div>
                    <p class="text-gray-600 dark:text-neutral-400 leading-relaxed">
                        Soy padre de <strong>Julián</strong>, quien a sus {{ julianAge }} años es el centro absoluto de
                        mi universo.
                        Esta motivación me llevó a adoptar el trabajo remoto desde 2018, organizando mi carrera en torno
                        a mi vida y no al revés.
                    </p>
                    <p class="text-gray-600 dark:text-neutral-400 leading-relaxed">
                        Vivo en la <strong>Sexta Región de Chile</strong>, en un entorno rural tranquilo y con una calma
                        que impresiona.
                        Aquí, rodeado de naturaleza, aire limpio y cielos estrellados sin contaminación lumínica,
                        encuentro el balance perfecto entre tranquilidad, deporte y crianza.
                    </p>
                </div>
                <div class="grid gap-3 grid-cols-2">
                    <!-- Julian (Principal) -->
                    <div
                        class="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2">
                        <NuxtImg src="/images/personal/julian.JPG" alt="Julián"
                            class="w-full h-56 md:h-72 object-cover object-center" />
                    </div>

                    <!-- Secondary Images -->
                    <div
                        class="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <NuxtImg src="/images/personal/nosotros.JPG" alt="Nosotros"
                            class="w-full h-32 md:h-40 object-cover" />
                    </div>
                    <div
                        class="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <NuxtImg src="/images/personal/moto.jpg" alt="Ruta" class="w-full h-32 md:h-40 object-cover" />
                    </div>
                </div>
            </section>

            <!-- Workspace Section -->
            <section class="grid md:grid-cols-2 gap-8 items-start">
                <div class="order-2 md:order-1 relative group">
                    <div class="relative overflow-hidden rounded-xl shadow-xl">
                        <NuxtImg src="/images/personal/escritorio_1.JPG" alt="Mi espacio de trabajo"
                            class="w-full h-auto object-cover aspect-[3/4]" />
                    </div>
                </div>
                <div class="space-y-4 order-1 md:order-2">
                    <div class="flex items-center gap-x-2 text-gray-800 dark:text-neutral-200">
                        <IconDeviceDesktop class="size-6" />
                        <h2 class="text-xl font-semibold">
                            El Ecosistema (Setup)
                        </h2>
                    </div>
                    <p class="text-gray-600 dark:text-neutral-400 leading-relaxed">
                        Creo firmemente que el entorno moldea la mente. Me he esforzado por construir un ecosistema de
                        trabajo
                        de alta calidad, donde la estética y la ergonomía se encuentran.
                    </p>
                    <p class="text-gray-600 dark:text-neutral-400 leading-relaxed">
                        Mi oficina no es solo un lugar físico; es mi "templo" de productividad y enfoque. Equipos de
                        calidad
                        en un espacio cómodo y visualmente agradable son fundamentales para entregar mi mejor trabajo
                        día a día.
                    </p>

                    <div class="pt-2">
                        <NuxtLink to="/setup"
                            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                            Ver mi Setup en detalle
                            <IconArrowRight class="size-4" />
                        </NuxtLink>
                    </div>
                </div>
            </section>

            <!-- Professional Philosophy Section -->
            <section class="space-y-8">
                <div
                    class="flex items-center gap-x-3 text-gray-800 dark:text-neutral-200 border-b border-gray-200 dark:border-neutral-800 pb-4">
                    <IconBriefcase class="size-7" />
                    <h2 class="text-2xl font-bold">
                        Filosofía Profesional
                    </h2>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Card 1 -->
                    <div
                        class="p-6 bg-white dark:bg-neutral-800/50 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div
                            class="mb-4 inline-flex items-center justify-center size-12 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-neutral-200">
                            <IconUsers class="size-6" />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-2">Relaciones y Legado
                        </h3>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
                            Con 10 años de experiencia, mi mayor orgullo no es solo el código, sino las relaciones.
                            Siempre he priorizado terminar mis ciclos laborales de excelente manera, dejando puertas
                            abiertas y código robusto.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div
                        class="p-6 bg-white dark:bg-neutral-800/50 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div
                            class="mb-4 inline-flex items-center justify-center size-12 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-neutral-200">
                            <IconBook class="size-6" />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-2">Aprendizaje
                            Continuo</h3>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
                            Me defino como un eterno aprendiz. Mi motivación es adquirir conocimiento no solo para
                            crecer, sino para ayudar a mis compañeros y aportar soluciones reales a la empresa y sus
                            clientes.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div
                        class="p-6 bg-white dark:bg-neutral-800/50 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div
                            class="mb-4 inline-flex items-center justify-center size-12 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-neutral-200">
                            <IconCpu class="size-6" />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-2">Expertise Técnico
                        </h3>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
                            He navegado por roles de <strong>DevOps, Arquitecto, Backend y Fullstack</strong>. Esta
                            versatilidad me permite tener una visión holística de los sistemas.
                        </p>
                    </div>

                    <!-- Card 4 -->
                    <div
                        class="p-6 bg-white dark:bg-neutral-800/50 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div
                            class="mb-4 inline-flex items-center justify-center size-12 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-neutral-200">
                            <IconDeviceDesktop class="size-6" />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-2">Domain-Driven
                            Design</h3>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
                            Soy un fuerte defensor de las implementaciones DDD cuando la complejidad lo amerita.
                            Arquitectura que facilita el escalamiento y mantiene la simplicidad en el largo plazo.
                        </p>
                    </div>
                </div>
            </section>

        </main>

        <!-- Footer Simple -->
        <!-- Footer Simple -->
        <AppFooter />
    </div>
</template>
