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
import {EventBus} from '../main';

export default {
    name: 'NavBar',
    data () {
        return {
            filterOpen: false,
        }
    },
    mounted(){
        EventBus.$on('toggle-filter', (value) => {
            if (value !== undefined) {
                this.filterOpen = value;
            } else this.filterOpen = !this.filterOpen;
        });
    },
    
    methods: {
        openHamb(){
            console.log("Opening Hamb");
            this.filterOpen = false;
            EventBus.$emit('toggle-menu');
        },
        openSearch(){
            console.log("Opening Search");
            this.filterOpen = false;
            EventBus.$emit('toggle-search');
        }
    }
}
</script>

<style scoped>
    .nav-bar-page{
        z-index: 5;
        background-color: var(--navDark);
        position: fixed;
        top: 0;
        width: 100%;
        height: 40px;
        display: flex;
        /* align-items: flex-start; */
        align-items: center;
        justify-content: space-between;
        /* padding: 5px 0px; */
    }

    .nav-title{
        margin-left: 10px;
        font-weight: 600;
        font-size: 1.1rem
    }

    .first-logo{
        color: var(--white);
    }

    .second-logo{
        color: var(--triDark);
    }

    .nav-button{
        /* width: 20px;
        height: 14px; */
        /* background-color: transparent;
        color: white; */
    }

    .nav-links{
        margin-right: 10px;
    }

    .mobile-nav{
        display: none;
        margin-right: 10px;
    }

    .nav-icon{
        cursor: pointer;
        /* background-color: transparent;
        color: var(--triDark) */
    }

    .search-icon{

    }

    .hamburger-contain{
        margin-left: 10px;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        /* background-color: white; */
        width: 20px;
        height: 14px;
        /* height: 100%; */
    }

    /* Hamburger bars */
    .hamburger-contain *{
        height: 2px;
        width: 100%;
        background-color: var(--triDark);
    }

    .hamburger-contain:hover *{
        background-color: var(--whiteDark);
    }

    .router-link-active{
        color: var(--white);
    }

    .filter{
        /* transform: translate3d(0, -400px, 0); */
    }

    .filter-menu{
        /* transform: translate3d(0, -400px, 0); */
    }

    @media (max-width: 475px) { 
        .nav-links{
            display: none;
        }

        .mobile-nav{
            display: flex;
        }
    }
</style>