<template>
    <div id="playlist-page">
        <div class="playlist-head">
            <h3>Next Videos</h3>
        </div>
        <!-- <div class="center"> -->
            <ul class="NextVideoContain">
                <li class="" v-for="(video, index) in videos" :key="video.etag" :current="index === vidNum">
                    <button class="NextVideo div-button">
                        <span class="index" @click="changeVideo(index)">{{index === vidNum ? "▶" : index+1}}</span>
                        <div class="thumbnail-container" @click="changeVideo(index)">
                            <img class="thumbnail" :src="video.snippet.thumbnails.default.url" />
                        </div>
                        <div class="meta-contain" @click="changeVideo(index)">
                            <span class="meta-title">{{video.snippet.title}}</span>
                            <!-- <span @click="clickedAuthor(video.snippet.channelId)" class="meta-author">{{video.snippet.channelTitle}}</span> -->
                            <span class="meta-author">{{video.snippet.channelTitle}}</span>
                        </div>
                        <div class="remove-contain">
                            <button class="remove-button" @click="removeVideo(index)">x</button>
                        </div>
                    </button>
                </li>
            </ul>
        <!-- </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Playlist',
    data () {
        return {
            
        }
    },
    methods: {
        changeVideo(index){
            console.log("Clicked Video", index, this.videos[index]);
            this.$store.commit("UPDATE_VID_NUM", index);
        },
        removeVideo(index){
            console.log("Remove Video", index, this.videos[index]);
            this.$store.commit("REMOVE_VIDEO", index);
        },
        clickedAuthor(channelId){
            console.log("Clicked Author", channelId)
        }
    },
    computed: {
        ...mapState({ videos: "videos", vidNum: "vidNum" }),
    }
}
</script>

<style scoped>
    #playlist-page{
        width: 76vw;
        min-width: 310px; 
        /* width: 600px; */
        margin: auto;
        /* margin-bottom: 40px; */
    }

    .playlist-head{
        background-color: var(--triDark);
        width: 100%;
        min-width: 100%;
        color: var(--white);
        padding: 20px 0;
    }

    .NextVideoContain {
        list-style: none;
        width: 100%;
        max-width: 100%;
        /* max-height: 40vh; */
        max-height: 470px;
        /* padding: 0; */
        padding: 2px 0px;
        overflow-y: scroll;
    }
    .NextVideo {
        background: var(--biDark);
        /* transform: translate3d(0px, 0px, 0px); */
        cursor: pointer;
        width: 100%;
        /* height: 200px; */
        padding: 4px 0 4px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        /* border: solid 2px blue; */
    }

    .NextVideo:hover {
        background-color: var(--highlightDark);
    }

    .NextVideo[current=true] {
        background-color: var(--activeDark);
    }


    .index {
        color: var(--triDark);
        text-align: left;
        /* width: 24px; */
        padding: 0 11px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: none;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5rem;
    }

    /* .NextVideo:hover{

    } */

    @media (min-width: 900px) { 
        #playlist-page{
           width: 80vw;
        }
    }
    @media (max-width: 800px) { 
        #playlist-page{
           width: 92vw;
        }
    }

</style>