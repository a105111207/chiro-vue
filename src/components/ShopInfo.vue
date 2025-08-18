<script setup>
const imgList = import.meta.glob(
  "../assets/images/kneeling_bed/*.{jpg,png,jpeg,gif}"
);

const picList = await Promise.all(
  Object.values(imgList).map(async (module) => ({
    src: (await module()).default,
  }))
);
</script>

<template>
  <section class="page-section" id="bookinfo">
    <div class="container">
      <div class="text-center">
        <!-- Book information -->
        <h2 class="section-heading text-uppercase">书籍资讯</h2>
        <h3 class="section-subheading text-muted">
          书籍为美国整脊大学临床必修的专业教科书，亦为课程所使用之教科书―科学&amp;艺术的脊椎矫正，由曹修悌编译，中国协和医科大学出版。
        </h3>
        <img class="img-fluid d-block mx-auto" src="../assets/images/p4.jpg" />
        <h3 class="text-muted bookcost-top-margin">序言</h3>
        <p class="text-muted">
          这是一本脊椎矫正的专业教科书，在很多国家，如美国、加拿大、英国、澳大利亚等都是以这本《科学&amp;艺术的脊椎矫正》课本作为最正统的教材，培养出很多专业医师，进而改善更多患者的健康。<br />
          特别感谢曹修悌教授将这么好的脊椎矫正技巧带进大陆，也让很多想学好这门技术的医师多一种选择来减轻患者的病痛。
          “能在最短的时间内，恢复患者的健康”就是最好的方法。
        </p>
        <p class="section-subheading text-muted">
          北京协和医学院原教务长、病理生理学教授<br />
          郑超强<br />
          2017 年 7月
        </p>
        <h5 class="text-muted bookcost-top-margin">
          学生优惠价200元人民币，购买请洽上方"联系方式"。
        </h5>
      </div>
    </div>
  </section>

  <section class="page-section">
    <div class="container">
      <div class="text-center">
        <!-- Kneeling bed information -->
        <h2 class="section-heading text-uppercase">跪姿床资讯</h2>
        <h3 class="section-subheading text-muted">工欲善其事，必先利其器。</h3>
        <div class="row">
          <div
            v-for="(pic, i) in picList"
            :key="i"
            class="col-lg-3 col-sm-6 mb-4"
          >
            <!-- Kneeling bed picture-->
            <div class="course-pic-item">
              <a
                class="course-pic-link"
                data-bs-toggle="modal"
                :href="`#kneelingbed-pic-${i}`"
              >
                <img class="img-fluid" :src="pic.src" alt="Class Picture" />
              </a>
            </div>
          </div>
        </div>
        <h3 class="text-muted bookcost-top-margin">介绍</h3>
        <p class="text-muted">
          由曹修悌老师制作最专业矫正寰、枢 椎的跪姿床42斤纯铝打造。
        </p>
        <p class="section-subheading text-muted">
          有了曹修悌老师的跪姿床加持，会很顺手，患者怎么矫正都会很有效。
        </p>
        <h5 class="text-muted bookcost-top-margin">
          每张3000包邮到府人民币，购买请洽上方"联系方式"。
        </h5>
      </div>
    </div>
  </section>

  <!-- Picture Modals-->
  <div
    v-for="(pic, i) in picList"
    :key="`modal-${i}`"
    class="course-pic-modal modal fade"
    :id="`kneelingbed-pic-${i}`"
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