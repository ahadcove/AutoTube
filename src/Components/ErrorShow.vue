<template>
    <transition name="slide-hori">
        <div id="error-show-contain" v-if="show">
            {{error}}
        </div>
    </transition>
</template>

<script>
import { EventBus } from "../main";

export default {
  name: "ErrorShow",
  data() {
    return {
      error: "",
      show: false
    };
  },
  methods: {
    showError() {
      this.show = true;
      clearTimeout(this.showTimeout);
      this.showTimeout = setTimeout(() => {
        this.show = false;
      }, 3000);
    }
  },
  mounted() {
    EventBus.$on("error-show", error => {
      this.error = error;
      this.showError();
    });
  }
};
</script>

<style scoped>
#error-show-contain {
  border-radius: 2px;
  z-index: 100;
  padding: 5px 10px;
  background-color: red;
  display: block;
  position: fixed;
  top: 55px;
  right: 15px;
}
</style>