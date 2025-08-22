<script setup>
import PageTop from "../components/PageTop.vue";
import InfoColumn from "../components/InfoColumn.vue";
import ClassPreview from "@/components/ClassPreview.vue";

const items = [
  {
    href: "#video1",
    title: "课程试看",
    icon: "fas fa-film fa-stack-1x fa-inverse",
    text: "",
  },
  {
    href: "#video2",
    title: "临床调整",
    icon: "fas fa-film fa-stack-1x fa-inverse",
    text: "",
  },
  {
    href: "#video3",
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
</template>