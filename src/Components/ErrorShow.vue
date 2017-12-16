<template>
    <transition name="slide-hori">
        <div id="error-show-contain" v-if="show">
            {{error}}
        </div>
    </transition>
</template>

<script>
import {EventBus} from '../main';

export default {
    name: 'ErrorShow',
    data () {
        return {
           error: '',
           show: false, 
        }
    },
    methods: {
        showError(){
            this.show = true;
            clearTimeout(this.showTimeout);
            this.showTimeout = setTimeout(() => {
                this.show = false;
            }, 3000);
        }
    },
    mounted(){
        EventBus.$on('error-show', error => {
            this.error = error;
            this.showError();
        });
    }
}
</script>

<style scoped>
    #error-show-contain{
        border-radius: 2px;
        z-index: 100;
        padding: 5px 10px;
        background-color: red;
        display: block;
        position: fixed;
        top: 55px;
        right: 15px;
    }

    .slide-hori-enter-active, .slide-hori-leave-active {
        /* transition: all .60s cubic-bezier(0, 1, 0.5, 1); */
        /* transition: opacity 0.25s ease-out; */
        /* animation: bouncein 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) linear; */
        transition: .2s ease-in;
    }

    .slide-hori-enter {
        transform: translate(100%, 0);
        opacity: 0;
    }

    .slide-hori-leave-to {
        transform: translate(100%, 0);
        opacity: 0;
    }

</style>