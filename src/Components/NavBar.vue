<template>
    <header>
        <div class="desktop">
            <div class="nav-bar-page">
                <div class="logo-contain">
                    <!-- <span class="first-logo">Auto</span><span class="second-logo">Tube</span> -->
                    <img class="logo" src="../assets/AutoTube-Logo.png"></img>
                </div>
                <Search></Search>
                <nav class="nav-links">
                    <router-link :to="{ name: 'Auth'}">Login</router-link>
                    <router-link :to="{ name: 'PlayVideo'}" exact>Play</router-link>
                </nav>
            </div>

            <transition name="slide">
                <FilterMenu v-if="filterOpen" class="filter-menu"></FilterMenu>
            </transition>
        </div>
        
        <div class="mobile">
            <div class="nav-bar-page">
                <div class="logo-contain">
                    <!-- <span class="first-logo">Auto</span><span class="second-logo">Tube</span> -->
                    <img class="logo" src="../assets/AutoTube-Logo.png"></img>
                </div>
                <div class="center">
                    <button class="div-button nav-button" @click="openSearch">
                        <icon class="nav-icon" name="search" title="Search" ></icon>
                    </button>
                    <button class="div-button nav-button" @click="openHamb">
                        <icon class="nav-icon" name="bars" title="Menu" ></icon>
                    </button>
                </div>
            </div>

            <MobileMenu></MobileMenu>
        </div>
    </header>
</template>

<script>
import { EventBus } from "../main";

export default {
  name: "NavBar",
  data() {
    return {
      filterOpen: false
    };
  },
  mounted() {
    EventBus.$on("toggle-filter", value => {
      if (value !== undefined) {
        this.filterOpen = value;
      } else this.filterOpen = !this.filterOpen;
    });
  },

  methods: {
    openHamb() {
      console.log("Opening Hamb");
      this.filterOpen = false;
      EventBus.$emit("toggle-menu");
    },
    openSearch() {
      console.log("Opening Search");
      this.filterOpen = false;
      EventBus.$emit("toggle-search");
    }
  }
};
</script>

<style scoped>
.nav-bar-page {
  z-index: 5;
  background-color: var(--navDark);
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-contain {
  margin-left: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo{
    height: 26px;
    width: auto;
}

.first-logo{
    color: hsl(0, 0%, 87.4%);
    padding: 2px 7px;
    /* background-color: hsl(0, 0%, 53%); */
    background-color: #878787;
    border-radius: 10px;
    margin-right: 2px;

    /* text-shadow: hsla(0, 0%, 40%, .5) 0 -1px 0,
    hsla(0, 0%, 100%, .6) 0 2px 1px; */
    
    /* background: -webkit-radial-gradient(center, circle, rgba(255, 255, 255, .35), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, rgb(169, 169, 169), hsl(0, 0%, 53%));


    background: -moz-radial-gradient(center, circle, rgba(255, 255, 255, .35), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, hsl(0, 0%, 87.4%), hsl(0, 0%, 53%));


    background: -ms-radial-gradient(center, circle, rgba(255, 255, 255, .35), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, hsl(0, 0%, 87.4%), hsl(0, 0%, 53%));


    background: -o-radial-gradient(center, circle, rgba(255, 255, 255, .35), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, hsl(0, 0%, 87.4%), hsl(0, 0%, 53%));


    background: radial-gradient(center, circle, rgba(255, 255, 255, .35), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, hsl(0, 0%, 87.4%), hsl(0, 0%, 53%));


    background-size: 10px 10px,
    10px 10px,
    100% 100%;
    background-position: 1px 1px,
    0px 0px,
    center center;
    top: 0; */
}

.second-logo{
    color: hsl(0, 0%, 53%);
}

/* .first-logo {
  color: var(--white);
}

.second-logo {
  color: var(--triDark);
} */

.nav-links {
  margin-right: 10px;
}

.mobile-nav {
  display: none;
  margin-right: 10px;
}

.nav-icon {
  cursor: pointer;
}

.search-icon {
}

.router-link-active {
  color: var(--white);
}

@media (max-width: 475px) {
  .nav-links {
    display: none;
  }

  .mobile-nav {
    display: flex;
  }
}
</style>