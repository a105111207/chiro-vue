<script setup>
import { RouterLink, RouterView } from "vue-router";
const prop = defineProps({ pageId: String, title: String });
const links = [
  {
    href: "/Tecinfo",
    webname: "讲师介绍",
  },
  {
    href: "/Video",
    webname: "影片专区",
  },
  {
    href: "/Contact",
    webname: "联系方式",
  },
  {
    href: "/Slide",
    webname: "半脱位脊椎骨之图解",
  },
];
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">中华脊椎健康研究中心</RouterLink>

      <!-- The menu botton when the web pages isn't wide enough is displayed -->
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

      <!-- Other pages link -->
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li v-for="(link, i) in links" :key="i" class="nav-item">
            <RouterLink class="nav-link" :to="link.href">
              {{ link.webname }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Web header -->
  <header class="masthead" :id="prop.pageId">
    <div class="container">
      <div class="masthead-subheading">中华脊椎健康研究中心</div>
      <div class="masthead-heading text-uppercase">{{ prop.title }}</div>
    </div>
  </header>
</template>

