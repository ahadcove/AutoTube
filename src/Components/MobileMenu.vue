<template>
    <div id="mobile-contain">
        <transition name="slide-hori">
            <div id="mobile-search-contain" v-if="searchOpen">
                <button class="div-button nav-button" @click="closeSearch">
                    <icon class="nav-icon" name="arrow-left" title="Close Search" ></icon>
                </button>
                <Search></Search>
                <div>  
                </div>
            </div>
        </transition>

        <FilterMenu v-if="filterOpen && searchOpen" class="filter-menu"></FilterMenu>

        <transition name="slide-hori">
            <div id="mobile-menu-contain" v-if="menuOpen">
                <button class="div-button nav-button" @click="closeMenu">
                    <icon class="nav-icon" name="arrow-left" title="Close Menu" ></icon>
                </button>
                <nav class="nav-links">
                    <router-link :to="{ name: 'Auth'}">Login</router-link>
                    <router-link :to="{ name: 'PlayVideo'}" exact>Play</router-link>
                </nav>
            </div>
        </transition>
    </div>
</template>

<script>
import { EventBus } from "../main";

export default {
  name: "MobileMenu",
  data() {
    return {
      searchOpen: false,
      menuOpen: false,
      filterOpen: false
    };
  },
  mounted() {
    EventBus.$on("toggle-search", value => {
      this.menuOpen = false;
      this.filterOpen = false;
      if (value !== undefined) {
        this.searchOpen = value;
      } else this.searchOpen = !this.searchOpen;
    });
    EventBus.$on("toggle-menu", value => {
      this.searchOpen = false;
      if (value !== undefined) {
        this.menuOpen = value;
      } else this.menuOpen = !this.menuOpen;
    });
    EventBus.$on("toggle-filter", value => {
      if (value !== undefined) {
        this.filterOpen = value;
      } else this.filterOpen = !this.filterOpen;
    });
  },
  methods: {
    closeSearch() {
      EventBus.$emit("toggle-filter", false);
      this.searchOpen = false;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
#mobile-contain {
}

#mobile-search-contain {
  z-index: 50;
  background-color: var(--biDark);
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#mobile-menu-contain {
  z-index: 50;
  background-color: var(--biDark);
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  margin-right: 10px;
}

.router-link-active {
  color: var(--white);
}
</style>
