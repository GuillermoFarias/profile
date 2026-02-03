<script setup>
import {
  IconBrandMedium,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandAzure,
  IconBrandPython,
  IconBrandPhp,
  IconBrandJavascript,
  IconBrandNuxt,
  IconBrandVue,
  IconBrandTailwind,
  IconBrandReact,
  IconTerminal2,
  IconPlus,
  IconArrowRight,
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

.albert-sans-<uniquifier> {
  font-family: "Albert Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.dancing-script-<uniquifier> {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
</style>
<template>
  <div class="bg-gray-50 dark:bg-neutral-900">
    <!-- ========== MAIN CONTENT ========== -->
    <main id="content">
      <div class="w-full max-w-4xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
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

        <!-- About -->
        <div class="mt-8">
          <p class="text-sm text-gray-600 dark:text-neutral-400">
            Especialista en backend con más de 10 años de experiencia, amigo del
            frontend y entusiasta del mundo DevOps. Me apasiona crear soluciones
            que realmente aporten valor y trabajar en equipos donde la
            colaboración marca la diferencia.
          </p>

          <p class="mt-3 text-sm text-gray-600 dark:text-neutral-400">
            Trabajo de forma remota en SimpliRoute, empresa de software
            logístico con presencia global. Me especializo en el desarrollo
            de integraciones backend, conectando plataformas heterogéneas
            (ERPs, WMS, e-commerce) para optimizar procesos críticos de
            negocio.
          </p>

          <div class="mt-4">
            <NuxtLink to="/developer"
              class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
              Conoce al humano detrás del código
              <IconArrowRight class="size-4" />
            </NuxtLink>
          </div>

          <ul class="mt-5 flex flex-col gap-y-3">
            <li class="flex items-center gap-x-2.5">
              <IconMail class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" />
              <a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="mailto:gfariaspavez@gmail.com">
                gfariaspavez@gmail.com
              </a>
            </li>

            <li class="flex items-center gap-x-2.5">
              <IconBrandLinkedin class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" />
              <a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://www.linkedin.com/in/guillermofarias/">
                @guillermofarias
              </a>
            </li>

            <li class="flex items-center gap-x-2.5">
              <IconBrandGithub class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" />
              <a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://github.com/guillermofarias">
                @guillermofarias
              </a>
            </li>
          </ul>
        </div>
        <!-- End About -->

        <!-- Skills -->
        <div class="my-11">
          <h2 class="mb-2 font-medium text-gray-800 dark:text-neutral-200">
            Skills
          </h2>

          <!-- List -->
          <div class="space-y-3 border-t border-gray-200 dark:border-neutral-700 pt-5">
            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Backend</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandPython class="shrink-0 size-5 me-1" />
                    Python
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandPhp class="shrink-0 size-5 me-1" />
                    PHP
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandJavascript class="shrink-0 size-5 me-1" />
                    JavaScript
                  </li>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconTerminal2 class="shrink-0 size-5 me-1" />
                    Bash
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Frontend</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandVue class="shrink-0 size-5 me-1" />
                    Vue
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandTailwind class="shrink-0 size-5 me-1" />
                    Tailwind CSS
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandReact class="shrink-0 size-5 me-1" />
                    React
                  </li>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandNuxt class="shrink-0 size-5 me-1" />
                    Nuxt
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Cloud</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon name="bx:bxl-google-cloud" class="shrink-0 text-[20px] me-1 text-gray" />
                    GCP
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconBrandAzure class="shrink-0 size-5 me-1 text-gray-800 dark:text-neutral-200" />
                    Azure
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon name="mdi:aws" class="shrink-0 text-[20px] me-1 text-gray" />
                    AWS
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="flex flex-col sm:flex-row gap-1">
              <dt class="min-w-40">
                <span class="block text-sm text-gray-500 dark:text-neutral-500">Automation</span>
              </dt>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon name="simple-icons:argo" class="shrink-0 text-[20px] me-1 text-gray" />
                    Argo
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon name="mdi:terraform" class="shrink-0 text-[20px] me-1 text-gray" />
                    Terraform
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <Icon name="simple-icons:drone" class="shrink-0 text-[20px] me-1 text-gray" />
                    Drone
                  </li>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    <IconPlus class="shrink-0 size-5 me-1 text-gray-800 dark:text-neutral-200" />
                    More
                  </li>
                </ul>
              </dd>
              <dd>
                <ul>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    Pipeline design
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    Workflow automation
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    continuous integration
                  </li>
                  <li
                    class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    container orchestration
                  </li>
                  <li class="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                    Infrastructure as Code
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <!-- End List -->
        </div>
        <!-- End Skills -->

        <!-- Work Experience -->
        <div class="my-11">
          <h2 class="mb-2 font-medium text-gray-800 dark:text-neutral-200">
            Work Experience
          </h2>

          <!-- Timeline -->
          <div class="space-y-3 border-t border-gray-200 dark:border-neutral-700 pt-5">
            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-9 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  SR
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2024 - Present
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Senior Software Engineer at SimpliRoute
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  SimpliRoute es una empresa de tecnología logística enfocada en
                  la optimización de rutas y la gestión de última milla, con
                  presencia en más de 25 países y más de 900 clientes.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Desempeño un rol técnico de cara al cliente, liderando
                  reuniones para crear y refinar flujos de trabajo complejos.
                  Defino arquitecturas de integración de alta demanda que
                  soportan la operación crítica de grandes corporaciones.
                </p>
                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Experiencia destacada con clientes:
                </p>

                <ul class="list-disc ms-6 mt-2 space-y-1.5">
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Implementación de ecosistemas integrados para British
                    American Tobacco (BAT), Ransa y Walmart Centroamérica.
                  </li>
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Diseño de soluciones escalables para entornos VTEX y de
                    alta transaccionalidad.
                  </li>
                </ul>
                <div class="mt-3">
                  <!-- Card -->
                  <a class="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700"
                    href="https://www.youtube.com/watch?v=VaZc1TE7YAw&t=8s&ab_channel=SimpliRoute">
                    <div class="relative flex items-center overflow-hidden">
                      <img class="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="https://img.youtube.com/vi/VaZc1TE7YAw/maxresdefault.jpg
" alt="Blog Image" />

                      <div class="grow p-4 ms-32 sm:ms-48">
                        <div class="min-h-24 flex flex-col justify-center">
                          <h3 class="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                            Integraciones: VTEX
                          </h3>
                          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                            Nos integramos con tu e-commerce para que la
                            información de tus ventas y de tus envíos, esté toda
                            en un mismo lugar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-9 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  LM
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2022 - 2023
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Senior Software Engineer at Linio MX
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Linio fue una de las principales plataformas de comercio
                  electrónico en México, ofreciendo una amplia gama de productos
                  y servicios a millones de usuarios.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Formé parte del equipo Payments and Checkout, donde se
                  diseñaron soluciones para optimizar el proceso de pago y
                  mejorar la experiencia del usuario.
                </p>
                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Algunos proyectos destacados:
                </p>

                <ul class="list-disc ms-6 mt-2 space-y-1.5">
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Implementación de Servicio de antifraude.
                  </li>
                  <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Diseño e implementación de integración con MasterCard
                    Click2Pay.
                  </li>
                </ul>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-9 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  LT
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2019 - 2022
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Software Engineer at Lemontech
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Lemontech es una empresa de tecnología que se especializa en
                  soluciones de software para la gestión de estudios jurídicos.
                  Primera legaltech chilena con presencia en más de 20 países y
                  más de 1000 clientes.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Miembro del equipo de desarrollo de la plataforma
                  <a class="hover:underline" href="https://www.timebillingapp.com/">
                    TheTimeBilling </a>. Participé en la implementación de mejoras y correcciones de
                  la plataforma.
                </p>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="group relative flex gap-x-5">
              <!-- Icon -->
              <div
                class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <span
                  class="inline-flex items-center justify-center size-8 text-xs font-semibold rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
                  IN
                </span>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pb-8 group-last:pb-0">
                <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2016 - 2018
                </h3>

                <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Software Engineer at Inpact
                </p>

                <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Mi primer trabajo como desarrollador de software después de
                  obtener mi título.
                </p>

                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Trabajé en proyectos de backoffice para clientes bancarios.
                  Automatización de procesos de gestión documental y flujos de
                  trabajo.
                </p>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->
          </div>
          <!-- End Timeline -->
        </div>
        <!-- End Work Experience -->

        <!-- Education -->
        <div class="mt-10 sm:mt-14 pb-5">
          <h2 class="mb-3 font-medium text-gray-800 dark:text-neutral-200">
            Education
          </h2>

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
              <NuxtImg class="shrink-0 size-8" src="images/inacap.png" alt="Inacap" />

              <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                2013 - 2016
              </h3>

              <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                Ingeniería en Informática
              </p>

              <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Universidad Tecnológica de Chile INACAP
              </p>
            </div>
          </div>
          <!-- End Grid -->
        </div>
        <!-- End Education -->
      </div>
    </main>
    <!-- ========== END MAIN CONTENT ========== -->

    <AppFooter />
  </div>
</template>
