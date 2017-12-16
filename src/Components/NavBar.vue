<template>
    <header>
        <div class="desktop">
            <div class="nav-bar-page">
                <div class="nav-title">
                    <span class="first-logo">Auto</span><span class="second-logo">Tube</span>
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
                <div class="nav-title">
                    <span class="first-logo">Auto</span><span class="second-logo">Tube</span>
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

.nav-title {
  margin-left: 10px;
  font-weight: 600;
  font-size: 1.1rem;
}

.first-logo {
  color: var(--white);
}

.second-logo {
  color: var(--triDark);
}

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