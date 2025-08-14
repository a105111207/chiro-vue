<template>
  <VCalendar
    v-for="(page, i) in pages"
    :key="i"
    :initial-page="page"
    :attributes="attributes"
  />
</template>

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

const attr = [];
for (let i = 0; i < Tdates.length; i++) {
  const a = {
    content: "blue",
    highlight: {
      start: { fillMode: "outline" },
      base: { fillMode: "light" },
      end: { fillMode: "outline" },
    },
    dates: Tdates[i],
    popover: {
      label: "台北-大安区",
    },
  };

  attr.push(a);
}

const attributes = ref(attr);

/*
<tr>
                        <td class="text-left">台北-大安区</td>
                        <td> 9/5 ~ 9/7</td>
                        <td>12/5 ~ 12/7</td>
                        <td> 3/6 ~ 3/8</td>
                        <td> 6/5 ~ 6/7</td>
                    </tr>
                    <tr>
                        <td class="text-left">北京-东城区 (天安门东)</td>
                        <td> 9/19 ~ 9/21</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td> 6/26 ~ 6/28</td>
                    </tr>
                    <tr>
                        <td class="text-left">上海-长宁区(中山公园-地铁5站达虹桥)</td>
                        <td> 9/12 ~ 9/14</td>
                        <td> 12/12 ~ 12/14</td>
                        <td> 3/13 ~ 3/15</td>
                        <td> 6/19 ~ 6/21</td>
                    </tr>
                    <tr>
                        <td class="text-left">广州-天河区</td>
                        <td>&nbsp;</td>
                        <td>12/19 ~ 12/21</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="text-left">杭州市-西湖区</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="text-left">成都-青羊区</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td> 3/20 ~ 3/22</td>
                        <td>&nbsp;</td>
*/
</script>