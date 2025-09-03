<script setup>
import PageTop from "@/components/PageTop.vue";

const timeline = [
  {
    icon: "fa-solid fa-school rounded-circle",
    icon_name: "school",
    year: "1994-2000",
    mechanism: "美国南卡整脊大学",
    content: "脊椎专业研究\n寰枢椎专业研究",
  },
  {
    icon: "fa-solid fa-microscope rounded-circle",
    icon_name: "microscope",
    year: "1996-2001",
    mechanism: "南卡Michael U Kale寰枢椎研究中心",
    content: "专业研究寰枢椎矫正",
  },
  {
    icon: "fa-solid fa-award rounded-circle",
    icon_name: "award",
    year: "1998",
    mechanism: "冈斯德脊椎矫正基金会",
    content: "专业研究全脊椎矫正",
  },
  {
    icon: "fa-regular fa-handshake rounded-circle",
    icon_name: "handshake",
    year: "2003",
    mechanism: "基金会授权翻译出版",
    content: "Gonstead Chiropractic Science & Art 的中文版教科书",
  },
  {
    icon: "fa-solid fa-book rounded-circle",
    icon_name: "book",
    year: "2004",
    mechanism: "台湾出版",
    content:
      "Gonstead Chiropractic Science & Art\n科学 & 艺术的脊椎矫正―繁体中文版",
  },
  {
    icon: "fa-solid fa-bookmark rounded-circle",
    icon_name: "bookmark",
    year: "2018",
    mechanism: "北京协和医科大学",
    content:
      "出版 Gonstead Chiropractic Science & Art\n科学 & 艺术的脊椎矫正―简体中文版",
  },
  {
    icon: "fa-solid fa-star rounded-circle",
    icon_name: "star",
    year: "现任",
    mechanism: "",
    content: "中华脊椎健康研究中心―理事长\n中华脊椎健康研究协会―会长",
  },
];
</script>

<template>
  <PageTop :pageId="'tecinfo-page'" :title="'曹修悌 - 讲师介绍'" />

  <section class="page-section bg-light">
    <div class="container">
      <div class="text-center tecinfo-gotop">
        <img id="tecimg" src="@/assets/images/tecpic.jpg" alt="" />
      </div>
      <ul class="timeline">
        <li
          v-for="(timeline, i) in timeline"
          :key="i"
          :class="{ 'timeline-inverted': i % 2 === 1 }"
        >
          <div class="timeline-image">
            <i :class="timeline.icon" :id="timeline.icon_name"></i>
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>{{ timeline.year }}</h4>
              <h4 class="subheading">{{ timeline.mechanism }}</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted" style="white-space: pre-wrap">
                {{ timeline.content }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>