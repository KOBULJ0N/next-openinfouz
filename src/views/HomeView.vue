<template>
  <div>
    <TitleCollapse :items="collapseItems" />
  </div>
</template>

<script lang="ts" setup>
import InfoDiscTabs from "@/features/home/info-disclosure/info-disc-container/InfoDiscTabs.vue";
import TitleCollapse from "@/shared/components/collapse/TitleCollapse.vue";

const collapseItems = [
  { title: "Раскрытие информации", component: InfoDiscTabs },
];
</script>
