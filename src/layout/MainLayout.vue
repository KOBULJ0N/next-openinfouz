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
      </el-container>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Footer from "@/components/shared/Footer.vue";
<<<<<<< HEAD
import Header from "@/components/shared/header/Header.vue";
=======
import Header from "@/components/shared/Header.vue";
>>>>>>> ee39394cecf6765990f95ccc007dabd8f4583705
import { RouterView } from "vue-router";
</script>

<style scoped></style>
