<template>
  <div class="wrapper">
    <el-container class="container-layout">
      <el-header class="sticky-navbar">
        <el-affix :offset="0">
          <Header />
        </el-affix>
      </el-header>
      <el-container class="layout-content">
        <el-main class="main-section">
          <router-view :key="$route.path"></router-view>
        </el-main>
        <div class="right-sidebar mt-10">
          <StockSidebar />
        </div>
      </el-container>

      <Footer />
    </el-container>
  </div>
</template>

<script setup>
import StockSidebar from "@/features/home/stock-sidebar/layout/StockSidebar.vue";
import Footer from "@/shared/components/footer/Footer.vue";
import Header from "@/shared/components/header/Header.vue";
import { RouterView } from "vue-router";
</script>

<style scoped></style>
