<template>
    <div id="playlist-page">
        <div class="playlist-head">
            <button class="video-button" @click="previous">«</button>
            <h3 class="playlist-title">Next Videos</h3>
            <button class="video-button" @click="next">»</button>
        </div>
        <ul class="next-video-contain">
            <li class="" v-for="(video, index) in videos" :key="video.etag" :current="index === vidNum">
                <button class="next-video div-button" :current="index === vidNum">
                    <span class="index" @click="changeVideo(index)">{{index === vidNum ? "▶" : index+1}}</span>
                    <div class="thumbnail-container" @click="changeVideo(index)">
                        <img class="thumbnail" :src="video.snippet.thumbnails.default.url" />
                    </div>
                    <div class="meta-contain" @click="changeVideo(index)">
                        <span class="meta-title">{{video.snippet.title}}</span>
                        <span class="meta-author">{{video.snippet.channelTitle}}</span>
                    </div>
                    <div class="remove-contain">
                        <button class="remove-button" @click="removeVideo(index)">x</button>
                    </div>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Playlist",
  data() {
    return {};
  },
  methods: {
    changeVideo(index) {
      console.log("Clicked Video", index, this.videos[index]);
      this.$store.commit("UPDATE_VID_NUM", index);
    },
    removeVideo(index) {
      console.log("Remove Video", index, this.videos[index]);
      this.$store.commit("REMOVE_VIDEO", index);
    },
    clickedAuthor(channelId) {
      console.log("Clicked Author", channelId);
    },
    next() {
      console.log("Next video");
      this.$store.commit("NEXT_VIDEO");
    },
    // Goto previous video by click
    previous() {
      console.log("Previous video");
      this.$store.commit("PREVIOUS_VIDEO");
    }
  },
  computed: {
    ...mapState({ videos: "videos", vidNum: "vidNum" })
  }
};
</script>

<style scoped>
#playlist-page {
  width: 76vw;
  min-width: 310px;
  margin: auto;
}

.playlist-head {
  background-color: var(--triDark);
  width: 100%;
  min-width: 100%;
  color: var(--white);
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.playlist-title {
  font-size: 1rem;
}

.video-button {
  display: none;
  background-color: transparent;
  color: var(--white);
  font-size: 1.5rem;
  padding: 0;
  margin: auto;
}

.next-video-contain {
  list-style: none;
  width: 100%;
  max-width: 100%;
  max-height: 470px;
  padding: 2px 0px;
  overflow-y: scroll;
}

.next-video {
  background: var(--biDark);
  cursor: pointer;
  width: 100%;
  padding: 4px 0 4px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.next-video:hover {
  background-color: var(--highlightDark);
}

.next-video[current="true"] {
  background-color: var(--activeDark);
}

.index {
  color: var(--triDark);
  text-align: left;
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: none;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
}

/* Mobile */
@media (max-width: 475px) {
  .playlist-title {
    font-size: 0.9rem;
  }
}

@media (max-width: 800px) {
  .video-button {
        display: flex;
  }
}

@media (min-width: 900px) {
  #playlist-page {
    width: 86vw;
  }
}
@media (max-width: 800px) {
  #playlist-page {
    width: 92vw;
  }
}
</style>