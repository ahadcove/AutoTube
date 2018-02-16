import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { EventBus } from './main';

Vue.use(Vuex)

const blacklist = ["LOADING_ON", "LOADING_OFF", "UPDATE_MAX_RESULTS", "UPDATE_FILTER_SAFE",
"UPDATE_TYPE", "UPDATE_FILTER_SORT"];

export default new Vuex.Store({
    plugins: [createPersistedState({
        blacklist
    })],
    state: {
        loading: false,
        token: "",
        type: 'video',
        maxResults: 20,
        vidNum: 0,
        videos: [
            { snippet: { title: "Lumia Twitch V1.0 - the clear bridge between your Phillips Hue, Twitch, and your viewers", channelTitle: "Lumia Cove", channelId: "UCJbwDiIYMayp69dJsisX6AA", thumbnails: { default: { url: "https://i.ytimg.com/vi/Gog3GsJEu4w/default.jpg" } } }, id: { videoId: "Gog3GsJEu4w" }, etag: "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/8CGWc-1BxRCjUYLngs6a7SdD6SU\"" },
            { snippet: { title: "Real life Coonstagram from South Park: Fractured but whole", channelTitle: "Ahad Cove", channelId: "UCoOP-JaaAIL-Dk_YmWFYNig", thumbnails: { default: { url: "https://i.ytimg.com/vi/nB_e76kl9no/default.jpg" } } }, id: { videoId: "nB_e76kl9no" }, etag: "7991kDR - QPaa9r0pePmDjBEa2h8 / F - CtGCe2Le4W3CMOfzHYwDxt9a8" },
            { snippet: { title: "QUIZZUMMAH TRAILER", channelTitle: "Ahad Cove", channelId: "UCoOP-JaaAIL-Dk_YmWFYNig", thumbnails: { default: { url: "https://i.ytimg.com/vi/8MlYcMbAQiE/default.jpg" } } }, id: { videoId: "8MlYcMbAQiE" }, etag: "7991kDR - QPaa9r0pePmDjBEa2h8 / tfmE2DTSyv5oytdwGekVVybjhQg" },
        ],
        mySubscribers: [],
        playlists: [],
        channels: [],
        latestDate: '',
        count: 0,
        filterSort: "relevance",
        filterSafe: "moderate", // Moderate or strict
        filterDate: null,
        filterDuration: null,
    },
    getters: {
        token: state => state.token
    },
    mutations: {
        ADD_TOKEN(state, payload) {
            state.token = payload.token;
        },
        NEXT_VIDEO(state) {
            if (state.vidNum < state.videos.length - 1) {
                state.vidNum++;
            }
            else EventBus.$emit('error-show', 'Reached end of list');
        },
        PREVIOUS_VIDEO(state) {
            if (state.vidNum > 0 && state.videos.length > 0)
                state.vidNum--;
            else EventBus.$emit('error-show', 'At the beginning of list');
        },
        LOADING_OFF(state) {
            state.loading = false;
        },
        LOADING_ON(state) {
            state.loading = true;
        },
        UPDATE_VID_NUM(state, value) {
            state.vidNum = value;
        },
        UPDATE_VIDEO_LIST(state, value) {
            state.videos = value;
            state.vidNum = 0;
            state.playlists = [];
            state.channels = [];
            state.loading = false;
        },
        UPDATE_CHANNELS(state, value) {
            state.channels = value;
            state.loading = false;
        },
        UPDATE_PLAYLISTS(state, value) {
            state.playlists = value;
            state.loading = false;
        },
        UPDATE_FILTER_SAFE(state, value) {
            state.filterSafe = value
        },
        UPDATE_TYPE(state, value) {
            state.type = value
        },
        UPDATE_FILTER_SORT(state, value) {
            state.filterSort = value
        },
        UPDATE_MAX_RESULTS(state, value) {
            state.maxResults = value
        },
        REMOVE_VIDEO(state, value) {
            state.videos.splice(value, 1);
        }
    }
})
