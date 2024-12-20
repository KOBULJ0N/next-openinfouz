<template>
  <div class="wrapper">
    <el-container class="container-layout">
      <el-header class="sticky-navbar">
        <el-affix :offset="0">
          <Header />
          <MainNavigation />
        </el-affix>
      </el-header>
      <el-container class="layout-content">
        <el-main class="main-section">
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
  <DialogNotification />
</template>

<script setup>
import Footer from "@/components/shared/Footer.vue";
import Header from "@/components/shared/header/Header.vue";
import { RouterView } from "vue-router";
</script>

<style scoped></style>
