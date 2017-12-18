<template>
    <footer id="footer-contain">
        <button class="footer-author div-button" @click="openAuthor" title="Author Portfolio">
            © 2017 Bilal Abdullah
        </button>
        <div class="footer-links">
            <button class="footer-link div-button" @click="openGithub">
                <icon class="foot-icon" name="github" title="Open in github"></icon>
                <span class="foot-info">View on Github</span>
            </button>
            <button class="footer-link div-button" @click="openDonate">
                <icon class="foot-icon" name="paypal" title="Donate"></icon>
                <span class="foot-info">Donate</span>
            </button>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    openAuthor() {
      window.open("https://bilalabdullah.me");
    },
    openGithub() {
      window.open("https://github.com/AhadCove/AutoTube");
    },
    openDonate(){
      window.open("https://paypal.me/ahadcove");
    }
  }
};
</script>

<style scoped>
#footer-contain {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: var(--biDark);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-author {
  margin-left: 10px;
  font-size: 0.8rem;
}

.footer-links {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.footer-link{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}

.foot-icon {
  width: auto;
  height: 1.6rem;
}

.foot-info{

}

</style>