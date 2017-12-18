<template>
    <div id="play-page" class="page">

        <!-- Channels -->
        <div class="sub-pick-contiain" v-if="type=='channel' && !picked">
            <h3 class="sub-pick-title">Channels</h3>
                <ul class="sub-pick-list">
                    <li class="ChannelBox" v-for="(channel) in channels" :key="channel.etag" @click="pickChannel(channel.id.channelId)">
                        <div>{{channel.snippet.title}}</div>
                        <img :src="channel.snippet.thumbnails.default.url" />
                    </li>
                </ul>
        </div>

        <!-- Playlists -->
        <div class="sub-pick-contiain" v-if="type=='playlist' && !picked">
            <h3 class="sub-pick-title">Playlists</h3>
                <ul class="sub-pick-list">
                    <li class="ChannelBox" v-for="(playlist) in playlists" :key="playlist.etag" @click="pickPlaylist(playlist.id.playlistId)">
                        <div>{{playlist.snippet.title}}</div>
                        <img :src="playlist.snippet.thumbnails.default.url" />
                    </li>
                </ul>
        </div>
        
        <VideoPlayer></VideoPlayer>

        <Playlist></Playlist>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { EventBus } from "../main";
import "../globals";

export default {
  name: "PlayPage",
  data() {
    return {
      picked: true
    };
  },
  components: {},
  mounted() {
    EventBus.$on("pick-ready", _ => {
      this.picked = false;
    });
  },
  methods: {
    // Set's up new videos and reset vid num
    setVideos(videos) {
      this.$store.commit("LOADING_OFF");
      this.$store.commit("UPDATE_VIDEO_LIST", videos);
    },
    // Under channel-id you will need to pick which channel you want videos from
    pickChannel(channel) {
      this.picked = true;

      this.axios
        .get(
          `${global.YOUTUBE_ROOT}/search?part=snippet&channelId=${channel}&maxResults=${this
            .maxResults}&type=video&order=${this.filterSort}&safeSearch=${this
            .filterSafe}&key=${global.API_KEY}`
        )
        .then(res => {
          this.setVideos(res.data.items);
        })
        .catch(err => {
          console.log("Error", err);
          this.$store.commit("LOADING_OFF");
          EventBus.$emit("error-show", "Error picking channel");
        });
    },
    // Under channel-id you will need to pick which channel you want videos from
    pickPlaylist(playlist) {
      this.picked = true;

      this.axios
        .get(
          `${global.YOUTUBE_ROOT}/playlistItems?part=snippet&playlistId=${playlist}&maxResults=${this
            .maxResults}&key=${global.API_KEY}`
        )
        .then(res => {
          let modifiedVideos = res.data.items.map((video, index) => {
            video.id = { id: video.id };
            video.id.videoId = video.snippet.resourceId.videoId;
            return video;
          });

          this.setVideos(modifiedVideos);
        })
        .catch(err => {
          console.log("Error", err);
          this.$store.commit("LOADING_OFF");
          EventBus.$emit("error-show", "Error picking playlist");
        });
    }
  },
  computed: {
    ...mapState({
      loading: "loading",
      token: "token",
      type: "type",
      maxResults: "maxResults",
      playlists: "playlists",
      channels: "channels",
      filterSort: "filterSort",
      filterSafe: "filterSafe",
      filterDate: "filterDate",
      filterDuration: "filterDuration"
    })
  }
};
</script>

<style scoped>
#play-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.sub-pick-contiain {
  margin-bottom: 20px;
}

.sub-pick-title {
  margin-bottom: 10px;
}

.sub-pick-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90vw;
  overflow-x: scroll;
  align-self: center;
  padding: 0;
}

.ChannelBox {
  cursor: pointer;
  min-width: 200px;
  max-width: 200px;
  height: 200px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  background-color: var(--biDark);
}

.ChannelBox:hover {
  background-color: var(--highlightDark);
}

.ChannelBox:last-child {
  margin-right: 0;
}

.ChannelBox div {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
