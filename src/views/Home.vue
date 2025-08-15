<script setup>
import InfoColumn from "../components/InfoColumn.vue";
import PageTop from "../components/PageTop.vue";
import InfoImage from "../components/InfoImage.vue";
import ClassTime from "../components/ClassTime.vue";
import ShopInfo from "../components/ShopInfo.vue";
import ClassPicture from "../components/ClassPicture.vue";

const items = [
  {
    href: "#classinfo",
    title: "教学简章",
    icon: "fas fa-graduation-cap",
    text: "由中华脊椎健康研究中心主办，曹修悌教授指导《脊椎矫正专业技术》培训课程―教育英才，针对各医院针灸科、中医科、骨伤科等学员进行培训。（点击查看更多）",
  },
  {
    href: "#classtime",
    title: "课程时间",
    icon: "fas fa-calendar-days",
    text: "共有六个上课地点，台北大安区、北京东城区、上海长宁区、广州天河区、杭州西湖区、成都青羊区。每年3、6、8、9、12月开课，详情请见课程表。（点击查看更多）",
  },
  {
    href: "#bookinfo",
    title: "书籍资讯",
    icon: "fas fa-book",
    text: "书籍为美国整脊大学临床必修的专业教科书，亦为课程所使用之教科书―科学&艺术的脊椎矫正，由曹修悌编译，中国协和医科大学出版。（点击查看更多）",
  },
];
</script>

<template>
  <PageTop :pageId="'index-page'" :title="'曹修悌 - 整脊培训'" />
  <InfoColumn :items="items" :infotitle="'资讯栏'" />
  <InfoImage />
  <ClassTime />
  <ShopInfo />
  <Suspense>
    <template #default>
      <ClassPicture />
    </template>

    <template #fallback>
      <div>Loading Pictures...</div>
    </template>
  </Suspense>
</template>