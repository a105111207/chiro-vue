<script setup>
const imgList = import.meta.glob(
  "../assets/images/course_pic/*.{jpg,png,jpeg,gif}"
);

const picList = await Promise.all(
  Object.values(imgList).map(async (module) => ({
    src: (await module()).default,
  }))
);
</script>

<template>
  <section class="page-section bg-light course-pic">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">课程照片</h2>
      </div>
      <div class="row">
        <div
          v-for="(pic, i) in picList"
          :key="i"
          class="col-lg-3 col-sm-6 mb-4"
        >
          <!-- Picture -->
          <div class="course-pic-item">
            <a
              class="course-pic-link"
              data-bs-toggle="modal"
              :href="`#course-pic-${i}`"
            >
              <div class="course-pic-hover">
                <div class="course-pic-hover-content">
                  <i class="fas fa-magnifying-glass fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" :src="pic.src" alt="Class Picture" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Picture Modals -->
  <div
    v-for="(pic, i) in picList"
    :key="`modal-${i}`"
    class="course-pic-modal modal fade"
    :id="`course-pic-${i}`"
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
                <img
                  class="img-fluid d-block mx-auto"
                  :src="pic.src"
                  alt="Class Picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>