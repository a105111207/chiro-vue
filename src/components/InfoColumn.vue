<script setup>
const props = defineProps({
  items: {
    type: Array,
    requried: true,
  },
  infotitle: String,
});
</script>

<template>
  <section class="page-section bg-light" id="bulletinboard">
    <div class="container">
      <!-- Title -->
      <div class="text-center">
        <h2 class="section-heading text-uppercase">{{ infotitle }}</h2>
        <br />
      </div>

      <!-- Three infomation area -->
      <div class="row text-center">
        <div v-for="(item, i) in items" :key="i" class="col-md-4">
          <a class="nav-link" :href="item.href">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i :class="item.icon" class="fa-stack-1x fa-inverse"></i>
            </span>

            <h4 class="my-3">{{ item.title }}</h4>
            <p class="text-muted">{{ item.text }}</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>