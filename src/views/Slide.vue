<script setup>
import PageTop from "../components/PageTop.vue";
import SlidePicture from "../components/SlidePicture.vue";
</script>

<template>
  <PageTop :pageId="'slide-page'" :title="'半脱位脊椎骨之图解'" />

  <Suspense>
    <template #default>
      <SlidePicture />
    </template>

    <template #fallback>
      <div>
        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </div>
    </template>
  </Suspense>
</template>