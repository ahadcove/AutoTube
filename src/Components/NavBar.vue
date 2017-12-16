<template>
    <header>
        <div id="nav-bar-page">
            <div class="nav-title">
                <span class="first-logo">Auto</span><span class="second-logo">Tube</span>
            </div>
            <Search></Search>
            <nav class="nav-links">
                <router-link :to="{ name: 'Auth'}">Login</router-link>
                <router-link :to="{ name: 'PlayVideo'}" exact>Play</router-link>
                <!-- <router-link :to="{ name: 'StoreTest'}">Store</router-link> -->
            </nav>
            <nav class="hamburger-contain" @click="openHamb">
                <div class="hamburger-top"></div>
                <div class="hamburger-mid"></div>
                <div class="hamburger-bottom"></div>
            </nav>
        </div>
        <transition name="slide">
            <FilterMenu v-if="filterOpen" class="filter-menu"></FilterMenu>
        </transition>
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
        }
    }
}
</script>

<style scoped>
    #nav-bar-page{
        z-index: 5;
        background-color: var(--navDark);
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        /* align-items: flex-start; */
        align-items: center;
        justify-content: space-between;
        padding: 5px 0px;
    }

    .nav-title{
        margin-left: 10px;
        font-weight: 600;
        font-size: 1.2rem
    }

    .first-logo{
        color: var(--white);
    }

    .second-logo{
        color: var(--triDark);
    }

    .nav-links{
        margin-right: 10px;
    }

    .hamburger-contain{
        display: none;
        cursor: pointer;
        background-color: transparent;
        align-self: center;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        margin-right: 10px;
        /* background-color: white; */
        width: 20px;
        height: 14px;
    }

    /* Hamburger bars */
    .hamburger-contain *{
        height: 2px;
        width: 100%;
        background-color: white;
    }

    .hamburger-contain:hover *{
        background-color: var(--highlightDark);
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

    .slide-enter-active, .slide-leave-active {
        /* transition: all .60s cubic-bezier(0, 1, 0.5, 1); */
        /* transition: opacity 0.25s ease-out; */
        /* animation: bouncein 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) linear; */
        transition: .5s;
    }
    .slide-enter {
        transform: translate(0, -110%);
    }
    .slide-leave-to {
        transform: translate(0, -110%);
    }

    .filter-enter, .filter-leave-to {
        /* animation: bouncein 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) linear reverse; */
          /* animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;  */
        /* max-height: 0px; */
        /* transform: translateY(-10px); */
        /* opacity: 0; */
    }
    
    @keyframes rollout { 
        0% { transform: translate3d(0, 300px, 0); }
        100% { transform: translate3d(1000px, 300px, 0); }
    }
    
    @keyframes bouncein { 
        0% { transform: translate3d(0, -400px, 0); }
        100% { transform: translate3d(0, 0px, 0); }
        /* 20%, 40%, 60%, 80%, 95%, 99%, 100% { @include ballb() }
        30% { @include ballb(-80px); }
        50% { @include ballb(-40px); }
        70% { @include ballb(-30px); }
        90% { @include ballb(-15px); }
        97% { @include ballb(-10px); } */
    }

    @media (max-width: 475px) { 
        .nav-links{
            display: none;
        }

        .hamburger-contain{
            display: flex;
        }
    }
</style>