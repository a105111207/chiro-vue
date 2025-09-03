<script setup>
const imgList = import.meta.glob("../assets/images/slide/*.png", {
  eager: true, // Add eager loading for images
});
const slideImages = {};

// Initialize the image path
for (let i = 1; i <= 12; i++) {
  const num = i < 10 ? `000${i}` : `00${i}`;
  const path = `../assets/images/slide/slide${num}.png`;
  if (imgList[path]) {
    slideImages[i] = imgList[path];
  }
}

// Convert modules directly to URLs
const images = Object.fromEntries(
  Object.entries(slideImages).map(([key, module]) => [key, module.default])
);

const content = [
  {
    content1: "侧面颈椎",
    content2: "正常的",
  },
  {
    content1: "第六颈椎",
    content2: "向后向下偏位",
  },
  {
    content1: "第六胸椎",
    content2: "向后向左向下偏位",
  },
  {
    content1: "第七胸椎",
    content2: "向后向左向上偏位",
  },
  {
    content1: "右侧髂骨",
    content2: "偏位",
  },
  {
    content1: "枕骨",
    content2: "正常的",
  },
  {
    content1: "寰椎",
    content2: "前面向下向右 向前偏位",
  },
  {
    content1: "寰椎",
    content2: "前面向上向左 向后偏位",
  },
  {
    content1: "第六颈椎",
    content2: "向后向左向上偏位",
  },
  {
    content1: "第五腰椎",
    content2: "向后向右向下偏位",
  },
  {
    content1: "第五腰椎",
    content2: "向后向右向上偏位",
  },
  {
    content1: "滑脱症",
    content2: "L5",
  },
];
</script>

<template>
  <section class="page-section bg-light course-pic">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">十二图解</h2>
      </div>
      <div class="row">
        <div
          v-for="(list, i) in content"
          :key="i"
          class="col-lg-3 col-sm-6 mb-4"
        >
          <!-- Slide 1-->
          <div class="course-pic-item">
            <a
              class="course-pic-link"
              data-bs-toggle="modal"
              :href="`#slide${i}`"
            >
              <div class="course-pic-hover">
                <div class="course-pic-hover-content">
                  <i class="fas fa-magnifying-glass fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" :src="images[i + 1]" :alt="`#slide${i}`" />
            </a>
            <div class="course-pic-caption">
              <div class="course-pic-caption-heading">{{ list.content1 }}</div>
              <div class="course-pic-caption-subheading text-muted">
                {{ list.content2 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Slide Modals-->
  <!-- Slide 1 modal popup-->
  <div
    v-for="(list, i) in content"
    :key="i"
    class="course-pic-modal modal fade"
    :id="`slide${i}`"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <i class="fa fa-xmark fa-3x"></i>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">{{ list.content1 }}</h2>
                <p class="item-intro text-muted">{{ list.content2 }}</p>
                <img
                  class="img-fluid d-block mx-auto"
                  :src="images[i + 1]"
                  :alt="`#slide${i}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>