<template>
    <div id="VideoContain" v-if="videos.length > 0">
        <h1 class="video-title">{{video.snippet.title}}</h1>
        <section class="VideoBox">
            <button class="video-button" @click="previous">«</button>
            <section>
                <youtube :video-id="video.id.videoId" :player-width="playerWidth" :player-height="playerHeight" :mute="true" @ready="ready" @playing="playing" @ended="ended" @paused="paused" @error="error" :player-vars="{autoplay: 1}"></youtube>
            </section>
            <button class="video-button" @click="next">»</button>
        </section>
    </div>
    <div id="video-placeholder-contain" v-else>
        <div id="video-placeholder"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import {EventBus} from '../main';

export default {
    name: 'VideoPlayer',
    // props: { video: Object },
    data () { return {
        screenWidth: this.getPlayerSize(true),
        screenHeight: this.getPlayerSize(false),
     } },
    methods: {
        ready (player) {
            this.player = player
            console.log("Ready");
        },
        
        // Goto next video either by click or by end of video
        next(){
            console.log("Next video");
            this.$store.commit("NEXT_VIDEO");
        },
        // Goto previous video by click
        previous(){
            console.log("Previous video");
            this.$store.commit("PREVIOUS_VIDEO");
        },
        playing () {
            console.log("Playing");
        },
        paused () {
            console.log("Paused");
        },
        ended(){
            console.log("Ended");
            this.next()
        },
        error () {
            console.log("Ran into an error");
            EventBus.$emit('error-show', 'Video ran into an error');
            this.next()
        },
        stop () {
            console.log("Stopped");
            this.player.stopVideo()
        },
        pause () {
            console.log("Paused");
            this.player.pauseVideo()
        },
        getPlayerSize(type = undefined){
            console.log('type', type, 'width', window.screen.width, "height", window.screen.height);

            let width = window.screen.width;
            let height = window.screen.height;
            
            // Width
            if(width > 1480){
                width = 1280
            } 
            else if(width > 800){
                width -= 200
            }
            else if(width > 480){
                width -= 60
            } else if(width > 280){
                width -= 40;
            }
            else if(width < 280){
                width = 220
            }
            else {
                width -= 40;
            } 


            // Height

            if(height > 1050){
                height = 750
            } 
            else if(height > 500){
                height -= 300
            }
            else if(height < 350){
                height = 250;
            }
            else {
                // height -= 40;
                height -= 100;
            } 
            // if(height < 350){
            //     height += 200;
            // }
            // else if(height < 800){
            //     height += 200;
            // }

            // 
            if(type === undefined){
                this.playerWidth = width;
                this.playerHeight = height;
                return;
            }

            if(type){ // Width
                return width;
            } else // height
                return height;
        },
    },
    computed: {
        ...mapState({ videos: "videos", vidNum: "vidNum" }),
        video(){
            return this.videos[this.vidNum];
        },
        playerWidth: {
            get(){
                return this.screenWidth;
            },
            set(value){
                this.screenWidth = value;
            }
        },
        playerHeight: {
            get(){
                return this.screenHeight;
            },
            set(value){
                this.screenHeight = value;
            }
        },
    },
    mounted(){
        window.addEventListener('resize', ()=>this.getPlayerSize(undefined))
    },
    beforeDestroy(){
        window.removeEventListener('resize', ()=>this.getPlayerSize(undefined))
    }
}
</script>

<style scoped>
    #VideoContain{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .video-title{
        margin-bottom: 15px;
        max-width: 45vw;
        max-height: 120px; 
    }

    .video-button{
        background-color: transparent;
        font-size: 50px;
        /* width: 20px;
        height: 20px; */
        /* height: 20px; */
        /* color: blue; */

    }

    .VideoBox{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* padding: 0 40px; */
    }

    #VideoContain section {
        margin: 0 20px;
    }

    #video-placeholder-contain{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #video-placeholder{
        width: 40vw;
        height: 80vh;
        /* padding: 0 40px; */
        background-color: black;
    }

    @media (max-width: 800px) { 
        .video-button{
            display: none;
        }  

         #VideoContain section {
            margin: 0 0px;
        }
    }
</style>