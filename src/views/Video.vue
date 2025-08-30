<script setup>
import PageTop from "../components/PageTop.vue";
import InfoColumn from "../components/InfoColumn.vue";
import ClassPreview from "../components/ClassPreview.vue";
import CAVideo from "../components/CAVideo.vue";

const items = [
  {
    href: "#video1",
    title: "课程试看",
    icon: "fas fa-film fa-stack-1x fa-inverse",
    text: "",
  },
  {
    href: "#video-section",
    title: "临床调整",
    icon: "fas fa-film fa-stack-1x fa-inverse",
    text: "",
  },
  {
    href: "#video-section",
    title: "学习心得",
    icon: "fas fa-film fa-stack-1x fa-inverse",
    text: "",
  },
];
</script>

<template>
  <PageTop :pageId="'video-page'" :title="'影片专区'" />
  <InfoColumn :items="items" :infotitle="'影片列表'" />
  <ClassPreview />

  <Suspense>
    <template #default>
      <CAVideo />
    </template>

    <template #fallback>
      <div class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading video content...</p>
      </div>
    </template>
  </Suspense>
</template>