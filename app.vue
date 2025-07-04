<script setup>
const isDark = useState("isDark");

const updateIsDark = () => {
  isDark.value = document.documentElement.classList.contains("dark");
};

// const { connect } = useRealtime();

let observer;

onMounted(() => {
  updateIsDark();

  observer = new MutationObserver(() => updateIsDark());
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
