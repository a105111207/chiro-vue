<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">中华脊椎健康研究中心</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        目录
        <i class="fas fa-bars ms-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Tecinfo">讲师介绍</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Video">影片专区</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Contact">联系方式</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Slide">
              半脱位脊椎骨之图解
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

