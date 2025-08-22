<script setup>
const youkuVideo1 = [
  {
    videoname: "脊椎矫正教学 - 介绍",
    link: "http://v.youku.com/v_show/id_XNjE1MjYzMjI0.html",
  },
  {
    videoname: "上肢矫正 - 锁骨后偏(胸骨端)",
    link: "http://v.youku.com/v_show/id_XNjE1Mzg0MjY0.html%20",
  },
  {
    videoname: "上肢矫正 - 锁骨前偏(胸骨端)",
    link: "https://v.youku.com/v_show/id_XNjE1Mzg3NzA4.html",
  },
  {
    videoname: "肩关节 - 肱骨头下前偏",
    link: "http://v.youku.com/v_show/id_XNjE1MzkwOTA0.html%20",
  },
  {
    videoname: "肩关节 - 肱骨头下后偏",
    link: "http://v.youku.com/v_show/id_XNjE1MzkzNTk2.html%20",
  },
  {
    videoname: "肘关节 - 桡骨后外偏",
    link: "http://v.youku.com/v_show/id_XNjE1Mzk2NDk2.html%20",
  },
  {
    videoname: "肘关节 - 尺骨后内偏",
    link: "http://v.youku.com/v_show/id_XNjE1NDAwMzk2.html%20",
  },
  {
    videoname: "腕关节-舟状骨,月状骨背侧偏",
    link: "http://v.youku.com/v_show/id_XNjE1NDA4ODIw.html%20",
  },
  {
    videoname: "掌骨头 - 背侧偏",
    link: "http://v.youku.com/v_show/id_XNjE1NDA4ODIw.html",
  },
  {
    videoname: "近端指骨底 - 掌侧偏",
    link: "http://v.youku.com/v_show/id_XNjE1NDEzOTIw.html%20",
  },
  {
    videoname: "指间关节",
    link: "http://v.youku.com/v_show/id_XNjE1NDI1MDM2.html%20",
  },
  {
    videoname: "下肢矫正 - 膝关节 股骨内前偏",
    link: "http://v.youku.com/v_show/id_XNjE1NDIyOTc2.html",
  },
  {
    videoname: "下肢矫正 - 膝关节 胫骨外后偏",
    link: "http://v.youku.com/v_show/id_XNjE1NDMzNDA0.html",
  },
  {
    videoname: "下肢矫正 - 上胫骨后偏",
    link: "http://v.youku.com/v_show/id_XNjE1NDM2MTA4.html",
  },
  {
    videoname: "下肢矫正 - 上腓骨后外偏",
    link: "http://v.youku.com/v_show/id_XNjE5NzU5ODY4.html",
  },
  {
    videoname: "下肢矫正 - 上腓骨后内偏",
    link: "http://v.youku.com/v_show/id_XNjE5NzYyMzAw.html",
  },
  {
    videoname: "下肢矫正 - 下腓骨后偏",
    link: "http://v.youku.com/v_show/id_XNjE5NzYzOTYw.html%20",
  },
  {
    videoname: "足部 - 跟骨后偏",
    link: "http://v.youku.com/v_show/id_XNjE5NzY1OTIw.html%20",
  },
  {
    videoname: "足部-1,2,3楔状骨,舟状骨下内偏",
    link: "http://v.youku.com/v_show/id_XNjE5Nzg5OTQw.html",
  },
  {
    videoname: "足部 - 骰骨上外偏",
    link: "http://v.youku.com/v_show/id_XNjE5NzcxNDA0.html",
  },
  {
    videoname: "足部 - 跖骨头下偏",
    link: "http://v.youku.com/v_show/id_XNjE5NzcyOTUy.html",
  },
  {
    videoname: "足部 - 大拇趾外偏",
    link: "http://v.youku.com/v_show/id_XNjE5NzczNzgw.html",
  },
  {
    videoname: "足部 - 趾间关节",
    link: "http://v.youku.com/v_show/id_XNjE5NzgyMDA4.html",
  },
  {
    videoname: "荐骨简介",
    link: "http://v.youku.com/v_show/id_XNjI2NzA4NDM2.html%20",
  },
  {
    videoname: "荐骨偏位与俯卧矫正 BP, AP(L5→P), PL, PR",
    link: "http://v.youku.com/v_show/id_XNjMxNDE2NDg4.html%20",
  },
  {
    videoname: "课本精华讲解",
    link: "http://v.youku.com/v_show/id_XNjMyMjYwMTQ4.html%20",
  },
  {
    videoname: "髂骨简介",
    link: "http://v.youku.com/v_show/id_XNjM1MjY3MjMy.html%20",
  },
  {
    videoname: "髂骨偏位与侧卧矫正 AS、PI、IN、EX",
    link: "http://v.youku.com/v_show/id_XNjM1NDY3ODA0.html%20",
  },
  {
    videoname: "课本精华讲解-髂骨偏位 AS、PI、IN、EX",
    link: "http://v.youku.com/v_show/id_XNjM1NTUyNzg4.html%20",
  },
  {
    videoname: "如何选择(髂骨或荐骨)矫正",
    link: "http://v.youku.com/v_show/id_XNjM4MzA0Njg4.html%20",
  },
  {
    videoname: "曹式手法(ㄧ)专门矫正手 → 酸、痛、麻",
    link: "http://v.youku.com/v_show/id_XNjUwMDY5MjQw.html",
  },
];

const youkuVideo2 = [
  {
    videoname: "寰椎,枢椎 - 简介",
    link: "http://v.youku.com/v_show/id_XNjU1MTA0Nzc2.html",
  },
  {
    videoname:
      "寰椎-12偏位介绍 ASLA, ASL, ASLP, ASRA, ASR, ASRP,AILA, AIL, AILP, AIRA, AIR, AIRP",
    link: "http://v.youku.com/v_show/id_XNjU1MTE2ODU2",
  },
];

const youtubeVideo1 = [
  {
    videoname: "脊椎矫正教学 - 介绍",
    link: "http://youtu.be/pf3NRV58IMo",
  },
  {
    videoname: "上肢矫正 - 锁骨后偏(胸骨端)",
    link: "http://youtu.be/WCFJCyOk1dE",
  },
  {
    videoname: "上肢矫正 - 锁骨前偏(胸骨端)",
    link: "http://youtu.be/3a_3zDjKyEI",
  },
  {
    videoname: "肩关节 - 肱骨头下前偏",
    link: "http://youtu.be/MF4n8krYx7U",
  },
  {
    videoname: "肩关节 - 肱骨头下后偏",
    link: "http://youtu.be/wAjjrLPMeak",
  },
  {
    videoname: "肘关节 - 桡骨后外偏",
    link: "http://youtu.be/9JYickc28Fw",
  },
  {
    videoname: "肘关节 - 尺骨后内偏",
    link: "http://youtu.be/3N7ZmqKu1DA",
  },
  {
    videoname: "腕关节-舟状骨,月状骨背侧偏",
    link: "http://youtu.be/GTq8w-RRhLQ",
  },
  {
    videoname: "掌骨头 - 背侧偏",
    link: "http://youtu.be/nENuocT_EkA",
  },
  {
    videoname: "近端指骨底 - 掌侧偏",
    link: "http://youtu.be/uOc0SFOEXQA",
  },
  {
    videoname: "指间关节",
    link: "http://youtu.be/0_0RqVjZqwU",
  },
  {
    videoname: "下肢矫正 - 膝关节 股骨内前偏",
    link: "http://youtu.be/NpofaE6-sQQ",
  },
  {
    videoname: "下肢矫正 - 膝关节 胫骨外后偏",
    link: "http://youtu.be/uYjchMWtDGM",
  },
  {
    videoname: "下肢矫正 - 上胫骨后偏",
    link: "http://youtu.be/AyXrVt8dyeQ",
  },
  {
    videoname: "下肢矫正 - 上腓骨后外偏",
    link: "http://youtu.be/gfjB2OQth9I",
  },
  {
    videoname: "下肢矫正 - 上腓骨后内偏",
    link: "http://youtu.be/YRgcy4FhIHk",
  },
  {
    videoname: "下肢矫正 - 下腓骨后偏",
    link: "http://youtu.be/n519xomYFQ8",
  },
  {
    videoname: "足部 - 跟骨后偏",
    link: "http://youtu.be/-T_aBAYe-hQ",
  },
  {
    videoname: "足部-1,2,3楔状骨,舟状骨下内偏",
    link: "http://youtu.be/8U7ce2kD034",
  },
  {
    videoname: "足部 - 骰骨上外偏",
    link: "http://youtu.be/8cbpmXuU6yU",
  },
  {
    videoname: "足部 - 跖骨头下偏",
    link: "http://youtu.be/LQxmjSjA-hQ",
  },
  {
    videoname: "足部 - 大拇趾外偏",
    link: "http://youtu.be/rNZsyxW2Gis",
  },
  {
    videoname: "足部 - 趾间关节",
    link: "http://youtu.be/-QZ1CYlGg-Y",
  },
  {
    videoname: "荐骨简介",
    link: "http://youtu.be/2mlZ7Z2kHjw",
  },
  {
    videoname: "荐骨偏位与俯卧矫正 BP, AP(L5→P), PL, PR",
    link: "http://youtu.be/uJPJj1f6aBw",
  },
  {
    videoname: "课本精华讲解-荐骨",
    link: "http://youtu.be/lT7Fp01NE80",
  },
  {
    videoname: "髂骨简介",
    link: "http://youtu.be/Sao3hF5aaXk",
  },
  {
    videoname: "髂骨偏位与侧卧矫正 AS、PI、IN、EX",
    link: "http://youtu.be/nONgm7zv-sA",
  },
  {
    videoname: "课本精华讲解-髂骨偏位 AS、PI、IN、EX",
    link: "http://youtu.be/DqlciVqful4",
  },
  {
    videoname: "如何选择(髂骨或荐骨)矫正",
    link: "http://youtu.be/QUrkqv1Hlb8",
  },
  {
    videoname: "曹氏手法(ㄧ)专门矫正 - 手 → 酸、痛、麻",
    link: "http://youtu.be/0dLAP4Hw0t0",
  },
];

const youtubeVideo2 = [
  {
    videoname: "寰椎,枢椎 - 简介",
    link: "http://youtu.be/UUdwtgAYCBk",
  },
  {
    videoname:
      "寰椎-12偏位介绍 ASLA, ASL, ASLP, ASRA, ASR, ASRP, AILA, AIL, AILP, AIRA, AIR, AIRP",
    link: "http://youtu.be/a-NUsvnptdg",
  },
];

/*
const linkLists = [
  {
    id: "youku1-tab",
    data: "youku1-tab-pane",
    web: "Youku",
    class: "全脊椎矫正-菁英速成班",
  },
  {
    id: "youku2-tab",
    data: "youku2-tab-pane",
    web: "Youku",
    class: "寰枢椎-神迹矫正班",
  },
  {
    id: "youtube1-tab",
    data: "youtube1-tab-pane",
    web: "Youtube",
    class: "全脊椎矫正-菁英速成班",
  },
  {
    id: "youtube2-tab",
    data: "youtube2-tab-pane",
    web: "Youtube",
    class: "寰枢椎-神迹矫正班",
  },
];
*/
</script>

<template>
  <!-- Video list-->
  <section class="page-section course-pic" id="video1">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">课程试看</h2>
        <br />
      </div>
      <!--Youtube and Youku Onlion-->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="youku1-tab"
            data-bs-toggle="tab"
            data-bs-target="#youku1-tab-pane"
            type="button"
            role="tab"
            aria-controls="youku1-tab-pane"
            aria-selected="true"
          >
            <h4 class="my-3">Youku<br />全脊椎矫正-菁英速成班</h4>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="youku2-tab"
            data-bs-toggle="tab"
            data-bs-target="#youku2-tab-pane"
            type="button"
            role="tab"
            aria-controls="youku2-tab-pane"
            aria-selected="false"
          >
            <h4 class="my-3">Youku<br />寰枢椎-神迹矫正班</h4>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="youtube1-tab"
            data-bs-toggle="tab"
            data-bs-target="#youtube1-tab-pane"
            type="button"
            role="tab"
            aria-controls="youtube1-tab-pane"
            aria-selected="true"
          >
            <h4 class="my-3">Youtube<br />全脊椎矫正-菁英速成班</h4>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="youtube2-tab"
            data-bs-toggle="tab"
            data-bs-target="#youtube2-tab-pane"
            type="button"
            role="tab"
            aria-controls="youtube2-tab-pane"
            aria-selected="false"
          >
            <h4 class="my-3">Youtube<br />寰枢椎-神迹矫正班</h4>
          </button>
        </li>
      </ul>
      <div class="tab-content text-center" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="youku1-tab-pane"
          role="tabpanel"
          aria-labelledby="youku1-tab"
          tabindex="0"
        >
          <table class=".nav-link ct-table">
            <tr>
              <th class="th-boder-right">片名</th>
              <th>连结</th>
            </tr>
            <tr v-for="t in youkuVideo1">
              <td class="text-left">{{ t.videoname }}</td>
              <td>
                <a :href="t.link">{{ t.link }}</a>
              </td>
            </tr>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="youku2-tab-pane"
          role="tabpanel"
          aria-labelledby="youku2-tab"
          tabindex="0"
        >
          <table class=".nav-link ct-table">
            <tr>
              <th class="th-boder-right">片名</th>
              <th>连结</th>
            </tr>
            <tr v-for="t in youkuVideo2">
              <td class="text-left">{{ t.videoname }}</td>
              <td>
                <a :href="t.link">{{ t.link }}</a>
              </td>
            </tr>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="youtube1-tab-pane"
          role="tabpanel"
          aria-labelledby="youtube1-tab"
          tabindex="0"
        >
          <table class=".nav-link ct-table">
            <tr>
              <th class="th-boder-right">片名</th>
              <th>连结</th>
            </tr>
            <tr v-for="t in youtubeVideo1">
              <td class="text-left">{{ t.videoname }}</td>
              <td>
                <a :href="t.link">{{ t.link }}</a>
              </td>
            </tr>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="youtube2-tab-pane"
          role="tabpanel"
          aria-labelledby="youtube2-tab"
          tabindex="0"
        >
          <table class=".nav-link ct-table">
            <tr>
              <th class="th-boder-right">片名</th>
              <th>连结</th>
            </tr>
            <tr v-for="t in youtubeVideo2">
              <td class="text-left">{{ t.videoname }}</td>
              <td>
                <a :href="t.link">{{ t.link }}</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>