<template>
    <div id="auth-page" class="page">
        <h3>Authenticate with google</h3>
        <button @click="authenticate('google')">authenticate</button>
    </div>
</template>

<script>
import { EventBus } from "../main";
import "../globals.js";

export default {
  name: "Auth",
  data() {
    return {
      token: ""
    };
  },
  methods: {
    authenticate(provider) {
      this.$auth.authenticate(provider).then(res => {
        this.token = res.access_token;
        this.$store.commit("ADD_TOKEN", { token: res.access_token });
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
#auth-page {
  margin-top: 40px;
  min-height: calc(100vh - 260px);
}

button {
  margin-top: 60px;
}
</style>