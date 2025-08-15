<script setup>
import { ref, computed } from "vue";

const pages = [
  { month: 9, year: 2025 },
  { month: 12, year: 2025 },
  { month: 3, year: 2026 },
  { month: 6, year: 2026 },
];

// Taipei class dates
const Tdates = [
  { start: new Date(2025, 8, 5), end: new Date(2025, 8, 7) },
  { start: new Date(2025, 11, 5), end: new Date(2025, 11, 7) },
  { start: new Date(2026, 2, 6), end: new Date(2026, 2, 8) },
  { start: new Date(2026, 5, 5), end: new Date(2026, 5, 7) },
];

// Beijing class dates
const Bdates = [
  { start: new Date(2025, 8, 19), end: new Date(2025, 8, 21) },
  { start: new Date(), end: new Date() },
  { start: new Date(), end: new Date() },
  { start: new Date(2026, 5, 26), end: new Date(2026, 5, 28) },
];

// Shanghai class dates
const Sdates = [
  { start: new Date(2025, 8, 12), end: new Date(2025, 8, 14) },
  { start: new Date(2025, 11, 12), end: new Date(2025, 11, 14) },
  { start: new Date(2026, 2, 13), end: new Date(2026, 2, 15) },
  { start: new Date(2026, 5, 19), end: new Date(2026, 5, 21) },
];

// Guangzhou class dates
const Gdates = [{ start: new Date(2025, 11, 19), end: new Date(2025, 11, 21) }];

// Hangzhou class dates
const Hdates = [];

// Chengdu class dates
const Cdates = [{ start: new Date(2026, 2, 20), end: new Date(2026, 2, 22) }];

function createCalendar(i, dates, color, location) {
  const a = {
    highlight: {
      color,
    },
    dates: dates[i],
    popover: {
      label: location,
    },
  };

  return attr.push(a);
}

const attr = [];
for (let i = 0; i < Tdates.length; i++) {
  createCalendar(i, Tdates, "blue", "台北-大安区");
}

for (let i = 0; i < Bdates.length; i++) {
  createCalendar(i, Bdates, "red", "北京-东城区 (天安门东)");
}

for (let i = 0; i < Sdates.length; i++) {
  createCalendar(i, Sdates, "orange", "上海-长宁区(中山公园-地铁5站达虹桥)");
}

for (let i = 0; i < Gdates.length; i++) {
  createCalendar(i, Gdates, "purple", "广州-天河区");
}

for (let i = 0; i < Hdates.length; i++) {
  createCalendar(i, Hdates, "yellow", "杭州市-西湖区");
}

for (let i = 0; i < Cdates.length; i++) {
  createCalendar(i, Cdates, "teal", "成都-青羊区");
}

const attributes = ref(attr);
</script>

<template>
  <section class="page-section bg-light" id="classtime">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">课程时间</h2>
        <div class="row text-center">
          <div class="col-md-6" v-for="(page, i) in pages" :key="i">
            <br />
            <VCalendar
              :initial-page="page"
              :attributes="attributes"
              :min-date="new Date(page.year, page.month - 1, 1)"
              :max-date="
                new Date(
                  page.year,
                  page.month - 1,
                  new Date(page.year, page.month, 0).getDate()
                )
              "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>