<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Honors</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row align-items-center justify-content-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <div class="py-3 px-5" v-for="d in data" :key="d.date">
            <div
              class="title2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <span>{{ d.title }} </span>
              <div class="title3">{{ d.description }}</div>
              <div class="title3">{{ d.organizer }}, {{ d.location }}</div>
              <div class="title3">{{ d.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Honor",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.award_picture,
      data: info.honor,
    };
  },
};
</script>

<style scoped>
img {
  max-width: 300px;
  /* margin-top: 60px; */
  /* transform: rotateY(180deg); */
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 18px;
  font-weight: 400;
  /* font-style: italic; */
  text-align: justify;
}

.title3 {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 400;
}
</style>
