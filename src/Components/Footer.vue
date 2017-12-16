<template>
    <footer id="footer-contain">
        <button class="footer-author div-button" @click="openAuthor" title="Author Portfolio">
            © 2017 Bilal Abdullah
        </button>
        <div class="footer-links">
            <button class="footer-link div-button" @click="openGithub">
                <icon class="github" name="github" title="Open in github"></icon>
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

.github {
  width: auto;
  height: 1.6rem;
}
</style>