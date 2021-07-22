<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          :class="{
            'bg-light': !nightMode,
            'bg-dark': nightMode,
            'text-light': nightMode,
          }"
        >
          <div class="title1 px-4 pt-3">
            <span :class="{ 'text-light': nightMode }">{{
              portfolio.name
            }}</span>
            <a
              class="pull-right"
              style="font-size: 18px"
              @click="$emit('close')"
              ><i class="fas fa-times"></i
            ></a>
            <hr
              class="my-1"
              :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
            />
          </div>
          <div class="modal-body my-0 pb-0 px-4 pt-0">
            <div
              class="mb-2 date"
              :class="{ 'text-light': nightMode, pbgray: nightMode }"
            ></div>

            <div style="text-align: justify">
              <span v-html="portfolio.description"></span>
            </div>
            <br />
            <div class="mb-2">
              <div class="title2">TIMELINE</div>
              <div>{{ portfolio.date }}</div>
            </div>
            <div class="mb-2">
              <div class="title2">CLIENT</div>
              <div>{{ portfolio.client }}</div>
            </div>
            <div class="mb-2">
              <div class="title2">ROLE</div>
              <div>{{ portfolio.role }}</div>
            </div>
            <div class="mb-2">
              <div class="title2">TEAM</div>
              <div>{{ portfolio.team }}</div>
            </div>
            <div class="pb-1 bheight">
              <span
                class="badge mr-2 mb-2"
                v-for="tech in portfolio.technologies"
                :key="tech"
                :class="{ 'bg-dark4': nightMode }"
                >{{ tech }}</span
              >
            </div>
            <hr />
            <Gallery :images="portfolio.pictures" :design="true" />

            <div class="mt-3 pb-3 bheight">
              <div class="title1 pb-2">問題陳述</div>
              <div class="pb-2">{{ portfolio.problem }}</div>
              <div>
                <Gallery :images="portfolio.problemPic" :design="true" />
              </div>
            </div>
            <div class="pb-3 bheight" v-if="portfolio.goal">
              <div class="title1 pb-2">設計目標</div>
              <div class="pb-2">{{ portfolio.goal }}</div>
              <div>
                <Gallery :images="portfolio.goalPic" :design="true" />
              </div>
            </div>
            <br />
            <div class="pb-3 bheight">
              <div class="title1 pb-2">設計過程</div>
              <div class="pb-2">{{ portfolio.process }}</div>
              <div>
                <Gallery :images="portfolio.processPic" :design="true" />
              </div>
            </div>
            <div class="pb-3 bheight">
              <div class="title1 pb-2">解決方案</div>
              <div class="pb-2">{{ portfolio.solution }}</div>
              <div>
                <Gallery :images="portfolio.solutionPic" :design="true" />
              </div>
            </div>
          </div>

          <div class="text-center pb-3">
            <hr
              class="mt-1 mb-3"
              :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
            />
            <button class="btn w-25 mr-3" @click="open(portfolio.visit)">
              video
            </button>
            <button
              class="btn w-25 mr-3"
              @click="open(portfolio.book)"
              v-if="portfolio.book"
            >
              guidebook
            </button>
            <button class="btn w-25" @click="$emit('close')">close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Gallery from "./Gallery";

export default {
  name: "Modal",
  components: {
    Carousel,
    Gallery,
  },
  props: {
    showModal: {
      type: Boolean,
    },
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
body.modal-open {
  overflow: hidden;
}

a {
  text-decoration: none;
  color: black;
  transition: all 0.2s;
  cursor: pointer;
}

a:hover {
  transition: all 0.2s;
  color: gray;
}

.date {
  font-size: 14px;
  font-weight: 400;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 80%;
  max-height: 80%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}

@media screen and (max-width: 1600px) {
  .modal-container {
    width: 60%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 80%;
  }
}

@media screen and (max-width: 580px) {
  .modal-container {
    width: 90%;
  }
}

.modal-body {
  margin: 20px 0;
  overflow-y: scroll;
  max-height: inherit;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 500;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
}

.badge:hover {
  transition: all 0.5s;
  box-shadow: 2px 2px 5px rgb(179, 179, 179);
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.bg-dark4 {
  background-color: #494e55 !important;
}
</style>
