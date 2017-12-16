<template>
  <div id="app">
    <ErrorShow></ErrorShow>
    <NavBar></NavBar>
    <div id="main">
        <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
:root {
  --mediaPhone: 475px;

  --dark: rgb(17, 17, 17);
  /* --compDark:rgb(35,35,35); */
  /* --compDark:hsla(0, 0%, 53.3%, .2); */
  /* --compDark:#131313; */
  --compDark: rgb(63, 63, 63);
  --biDark: rgb(41, 41, 41);
  --navDark: rgba(41, 41, 41, 0.9);
  /* --triDark:rgb(136,136,136); */
  --triDark: hsl(0, 0%, 53%);
  --whiteDark: rgb(228, 228, 228);
  --youtubeRed: rgb(252, 13, 28);
  --white: white;
  --highlightDark: hsl(0, 0%, 27%);
  /* --activeDark: hsla(0, 100%, 100%, .88);; */
  --activeDark: hsl(0, 0%, 27%);
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
}

body {
  background-color: var(--dark);
  height: 100%;
  max-width: 100vw;
  overflow-x: none;
}

#app {
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--white);
  padding-top: 20px;
  position: relative;
}

#main {
  padding-bottom: 140px;
}

button {
  font-size: 0.6rem;
  cursor: pointer;
  color: var(--triDark);
  background-color: var(--compDark);
  padding: 10px 15px;
}

.div-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

input {
  color: var(--triDark);
  padding: 10px 15px;
  background-color: var(--dark);
  border: solid var(--compDark) 0.6px;
}

input[type="range"] {
  cursor: pointer;
}

button:hover {
  color: var(--white);
  background-color: var(--highlightDark);
}

.div-button:hover {
  color: var(--whiteDark);
  background-color: inherit;
}

a:focus,
button:focus,
input:focus,
.div-button:focus {
  outline: thin dotted;
}

.page {
  width: 100%;
  min-height: calc(100vh - 50px);
  padding: 40px 0 20px 0;
  overflow-x: hidden;
}

.center {
  align-items: center;
  display: flex;
  justify-content: center;
}

input[type="radio"],
label,
button {
  cursor: pointer;
}

a {
  color: var(--triDark);
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color: var(--triDark);
}

a:hover {
  text-decoration: none;
  color: var(--whiteDark);
}

a:active {
  text-decoration: none;
}

.thumbnail-container {
  width: 100px;
  height: 56px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  display: block;
  flex: none;
}

.thumbnail {
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: block;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.meta-contain {
  text-align: left;
  min-width: 0;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 0.000000001px;
}

.meta-title {
  color: var(--white);
  display: block;
  margin: 0 0 4px 0;
  max-height: 2.9rem;
  overflow: hidden;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5rem;
}

.meta-author {
  z-index: 10;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  color: var(--white);
  display: block;
  max-height: 1.8rem;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.8rem;
}

.meta-author:hover {
}

.remove-contain {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 11px;
}

.remove-button {
  background-color: transparent;
  padding: 0;
  color: var(--triDark);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: none;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
}

.remove-button:hover {
  color: var(--youtubeRed);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}

.slide-enter {
  transform: translate(0, -110%);
}

.slide-leave-to {
  transform: translate(0, -110%);
}

.slide-hori-enter-active,
.slide-hori-leave-active {
  transition: 0.2s ease-in;
}

.slide-hori-enter {
  transform: translate(100%, 0);
  opacity: 0;
}

.slide-hori-leave-to {
  transform: translate(100%, 0);
  opacity: 0;
}

@keyframes rollout {
  0% {
    transform: translate3d(0, 300px, 0);
  }
  100% {
    transform: translate3d(1000px, 300px, 0);
  }
}

@keyframes bouncein {
  0% {
    transform: translate3d(0, -400px, 0);
  }
  100% {
    transform: translate3d(0, 0px, 0);
  }
  /* 20%, 40%, 60%, 80%, 95%, 99%, 100% { @include ballb() }
    30% { @include ballb(-80px); }
    50% { @include ballb(-40px); }
    70% { @include ballb(-30px); }
    90% { @include ballb(-15px); }
    97% { @include ballb(-10px); } */
}

/* Desktop */
@media (min-width: 476px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}

/* Mobile */
@media (max-width: 475px) {
  html {
    font-size: 14px;
  }
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  a:focus,
  button:focus,
  input:focus,
  .div-button:focus {
    outline: none;
  }
}

@media (max-width: 319px) {
  .page {
    overflow: scroll;
  }
}
</style>
