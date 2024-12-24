<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Header-Container">
    <TopHeader />
    <div
      class="flex items-center justify-center bg-blue-500 text-white text-3xl font-bold"
    >
      Tailwind CSS is Working!
    </div>
  </div>
</template>

<script setup>
import TopHeader from "./TopHeader.vue";
</script>

<style scoped>
.Header-Container {
  background: #0567d1;
}
</style>
