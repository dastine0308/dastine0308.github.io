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
            <a
              class="pull-right"
              style="font-size: 18px"
              @click="$emit('close')"
              ><i class="fas fa-times"></i
            ></a>
          </div>
          <div
            class="modal-body my-0 pb-0 px-4 pt-0"
            :class="{ 'text-light': nightMode, pbgray: nightMode }"
          >
            <div class="bg-div"><i class="fas fa-lock"></i></div>
            <div>
              <div class="btn">
                <input
                  placeholder="Password"
                  type="password"
                  v-model="passWord"
                  class="input"
                  v-on:keyup.enter="validate"
                />
                <span
                  ><i class="fas fa-arrow-right" @click="validate"></i
                ></span>
              </div>
              <div class="errorMsg mt-2" v-if="error">請輸入正確的密碼</div>
            </div>
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
  name: "LockModal",
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
  data() {
    return {
      passWord: null,
      showPass: false,
      error: false,
    };
  },
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
    validate() {
      var vm = this;
      if (vm.passWord === "88888888") {
        this.$emit("show", this.portfolio);
      } else {
        vm.error = true;
      }
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
  width: 40%;
  height: 30%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}

@media screen and (max-width: 1600px) {
  .modal-container {
    width: 40%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 40%;
  }
}

@media screen and (max-width: 580px) {
  .modal-container {
    width: 60%;
  }
}

.modal-body {
  margin: 20px 0;
  /* overflow-y: scroll; */
  max-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

.errorMsg {
  color: red;
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
  display: flex;
  align-items: center;
  padding: 0;
}

.btn:focus {
  background-color: rgba(102, 157, 179, 0.13);
  border-color: #669db3ff;
  color: #494e55;
}

.input {
  background-color: transparent;
  border-color: transparent;
  color: #494e55;
  padding: 0.375rem 0.75rem;
}

.input:focus {
  outline: none;
  border-color: transparent !important;
  color: #494e55;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.bg-div i {
  color: #669db3ff;
  font-size: 30px;
  transition: all 0.5s;
}

.btn i {
  color: #669db3ff;
  font-size: 20px;
  transition: all 0.5s;
  padding: 0.375rem 0.75rem;
}

.btn i:hover {
  background-color: #669db3ff;
  color: white;
  padding: 0.6rem 0.75rem;
}
</style>
