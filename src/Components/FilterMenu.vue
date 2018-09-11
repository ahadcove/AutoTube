<template>
    <div id="filter-contain">
         <div class="RadioContain">
            <div class="filter-header">Search Type</div>

            <input type="radio" name="typeVideo" id="typeVideo" value="video" v-model="type" title="Search by keyword">
            <label for="typeVideo" title="Search by keyword">Video</label>

            <input type="radio" name="typeMy" id="typeMy" value="my" v-model="type" @change="clickedMy" title="Search new videos from subscriptions">
            <label for="typeMy" title="Search new videos from subscriptions">My Subscriptions</label>

            <input type="radio" name="typeChannel" id="typeChannel" value="channel" v-model="type" title="Search by channel username">
            <label for="typeChannel" title="Search by channel username">Channel</label>

            <!-- <input type="radio" name="typeChannelId" id="typeChannelId" value="channel-id" v-model="type" title="Search by channel Id">
            <label for="typeChannelId" title="Search by channel Id">Channel Id</label> -->

            <input type="radio" name="typePlaylist" id="typePlaylist" value="playlist" v-model="type" title="Search by playlist">
            <label for="typePlaylist" title="Search by playlist">Playlist</label>
        </div>

        <div class="FilterColumns">
            <!-- Upload date -->
            <!-- <div class="FilterSub">
                <div class="filter-header">UPLOAD DATE</div>

                <div class="FilterRadioContain">
                    <input type="radio" id="noDate" value="null" v-model="filterDate" :disabled="filterDateDisabled" title="No filter">
                    <label for="noDate" title="No filter">No filter</label>

                    <input type="radio" id="hour" value="hour" v-model="filterDate" :disabled="filterDateDisabled" title="Last hour">
                    <label for="hour" title="Last hour">Last hour</label>

                    <input type="radio" id="today" value="today" v-model="filterDate" :disabled="filterDateDisabled" title="Today">
                    <label for="today" title="Today">Today</label>

                    <input type="radio" id="week" value="week" v-model="filterDate" :disabled="filterDateDisabled" title="This week">
                    <label for="week" title="This week">This week</label>

                    <input type="radio" id="month" value="month" v-model="filterDate" :disabled="filterDateDisabled" title="This month">
                    <label for="month" title="This month">This month</label>

                    <input type="radio" id="year" value="year" v-model="filterDate" :disabled="filterDateDisabled" title="This year">
                    <label for="year" title="This year">This year</label>
                </div>
            </div> -->

            <!-- Duration -->
            <!-- <div class="FilterSub">
                <div class="filter-header">Duration</div>

                <div class="FilterRadioContain">
                    <input type="radio" id="noDuration" value="null" v-model="filterDuration" :disabled="filterDurationDisabled" title="No filter">
                    <label for="noDuration" title="No filter">No filter</label>

                    <input type="radio" id="shortDuration" value="null" v-model="filterDuration" :disabled="filterDurationDisabled" title="Short duration">
                    <label for="shortDuration" title="Short duration">Short (< 4 minutes)</label>

                    <input type="radio" id="longDuration" value="hour" v-model="filterDuration" :disabled="filterDurationDisabled" title="Long duration">
                    <label for="longDuration" title="Long duration">Long (> 20 minutes)</label>
                </div>
            </div> -->

            <!-- Sort By -->
            <div class="FilterSub">
                <div class="filter-header">Sort By</div>

                <div class="FilterRadioContain">
                    <input type="radio" name="relevanceSort" id="relevanceSort" value="relevance" v-model="filterSort" :disabled="filterSortDisabled" title="Resources are sorted based on their relevance to the search query.">
                    <label for="relevanceSort" title="Resources are sorted based on their relevance to the search query.">Relevance</label>

                    <input type="radio" name="ratingSort" id="ratingSort" value="rating" v-model="filterSort" :disabled="filterSortDisabled" title="Resources are sorted from highest to lowest rating.">
                    <label for="ratingSort" title="Resources are sorted from highest to lowest rating.">Rating</label>

                    <input type="radio" name="dateSort" id="dateSort" value="date" v-model="filterSort" :disabled="filterSortDisabled" title="Resources are sorted in reverse chronological order based on the date they were created">
                    <label for="dateSort" title="Resources are sorted in reverse chronological order based on the date they were created">Upload date</label>

                    <input type="radio" name="titleSort" id="titleSort" value="title" v-model="filterSort" :disabled="filterSortDisabled" title="Resources are sorted alphabetically by title">
                    <label for="titleSort" title="Resources are sorted alphabetically by title.">Title</label>

                    <input type="radio" name="viewSort" id="viewSort" value="viewCount" v-model="filterSort" :disabled="filterSortDisabled" title="Resources are sorted from highest to lowest number of views.">
                    <label for="viewSort" title="Resources are sorted from highest to lowest number of views.">View count</label>

                    <input type="radio" name="videoSort" id="videoSort" value="videoCount" v-model="filterSort" :disabled="type !== 'channel'" title="Channels are sorted in descending order of their number of uploaded videos">
                    <label for="videoSort" title="Channels are sorted in descending order of their number of uploaded videos">Channel video count</label>
                </div>
            </div>

            <!-- Safe Search -->
            <!-- <div class="FilterSub">
                <div class="filter-header">Safe Search</div>
                <div class="FilterRadioContain">
                    <input type="radio" id="moderateSafe" value="moderate" v-model="filterSafe" :disabled="filterSafeDisabled" title="Will filter some content from search results and, at the least, will filter content that is restricted in your locale. Based on their content, search results could be removed from search results or demoted in search results. This is the default parameter value.">
                    <label for="moderateSafe" title="Will filter some content from search results and, at the least, will filter content that is restricted in your locale. Based on their content, search results could be removed from search results or demoted in search results. This is the default parameter value.">Moderate</label>

                    <input type="radio" id="noneSafe" value="none" v-model="filterSafe" :disabled="filterSafeDisabled" title="Will not filter the search result set.">
                    <label for="noneSafe" title="Will not filter the search result set.">None</label>

                    <input type="radio" id="strictSafe" value="strict" v-model="filterSafe" :disabled="filterSafeDisabled" title="YouTube will try to exclude all restricted content from the search result set. Based on their content, search results could be removed from search results or demoted in search results.">
                    <label for="strictSafe" title="YouTube will try to exclude all restricted content from the search result set. Based on their content, search results could be removed from search results or demoted in search results.">Strict</label>
                </div>
            </div> -->
        </div>

        <div class="FilterExtra">
            <div class="filter-header">Max Results</div>
            <div class="filter-row">
                <input type="range" min="1" :max="maxLimit" step="1" v-model="maxResults" :disabled="maxResultsDisabled">
                <span>{{maxResults}}</span>
            </div>
            <div class="filter-row">
                <button class="filter-safe-button" :disabled="filterSafeDisabled" @click="toggleSafeFilter" :on="filterSafe === 'strict' ? true : false" >Child Filter {{filterSafe === 'strict' ? "On" : "Off"}}</button>
            </div>
            <div class="filter-row">
                <div class="filter-keyword-dropdown" :disabled="filterKeywordDisabled" @click="toggleKeywordFilter">
									Advanced Keyword Filter
									<icon class="keyword-dropdown-icon" :name="keywordFilterOpen ? 'arrow-up' : 'arrow-down'" title="Open Advanced Filter"></icon>
								</div>
            </div>
						<div v-if="keywordFilterOpen" class="keyword-box-contain">
							<div>Separate keywords you would like to ignore with a comma</div>
						  <textarea class="keyword-text-box" v-model="filterKeywords" rows="5" cols="50" placeholder="fortnite,pubg"></textarea>
						</div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Filter",
  data() {
    return {
			keywordFilterOpen: false,
		};
  },
  methods: {
    toggleSafeFilter() {
      let tempFilterSafe = this.filterSafe === "strict" ? "moderate" : "strict";
      this.$store.commit("UPDATE_FILTER_SAFE", tempFilterSafe);
		},
		toggleKeywordFilter() {
			this.keywordFilterOpen = !this.keywordFilterOpen;
		},
    clickedMy(){
      this.$store.commit("UPDATE_MAX_RESULTS", 3);
    }
  },
  computed: {
    ...mapState({
      filterSort: "filterSort",
      filterSafe: "filterSafe",
      filterDate: "filterDate",
      filterDuration: "filterDuration",
      filterKeywords: "filterKeywords",
    }),
    maxLimit() {
      if(this.type == 'my'){
        return "10";
      }

      return "50";
    },
    type: {
      get() {
        return this.$store.state.type;
      },
      set(value) {
        this.$store.commit("UPDATE_TYPE", value);
      }
    },
    filterSort: {
      get() {
        return this.$store.state.filterSort;
      },
      set(value) {
        this.$store.commit("UPDATE_FILTER_SORT", value);
      }
    },
    maxResults: {
      get() {
        return this.$store.state.maxResults;
      },
      set(value) {
        this.$store.commit("UPDATE_MAX_RESULTS", value);
      }
    },
    filterKeywords: {
      get() {
        return this.$store.state.filterKeywords;
      },
      set(value) {
        this.$store.commit("UPDATE_FILTER_KEYWORDS", value.toLowerCase());
      }
    },
    filterDateDisabled() {
      if (this.type !== "video") {
        return true;
      }
      return false;
    },
    filterSortDisabled() {
      if (this.type === "playlist") {
        return true;
      }

      return false;
    },
    filterSafeDisabled() {
      if (this.type === "playlist") {
        return true;
      }

      return false;
    },
    filterKeywordDisabled() {
      return false;
    },
    maxResultsDisabled() {
      if (this.type === "my") {
        // return true;
      }
      return false;
		},
  }
};
</script>

<style scoped>
#filter-contain {
  z-index: 4;
  padding: 40px 2px 20px 2px;
  background-color: var(--navDark);
  position: fixed;
  width: 100%;
  margin: auto;
  left: 0;
  top: 0;
	overflow-y: scroll;
	max-height: 80%;
}

.filter-header {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
}

.filter-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.RadioContain {
  margin-top: 15px;
}

.filter-safe-button {
  margin-top: 10px;
}

.filter-safe-button[on="true"] {
  background-color: var(--white);
}

.filter-safe-button[on="true"]:hover {
  background-color: var(--triDark);
}

input[type="radio"] {
  margin-left: 10px;
}

input[type="range"] {
  margin-right: 5px;
}

.filter-keyword-dropdown {
	cursor: pointer;
	user-select: none;
	margin-top: 20px;
	font-size: .8rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.keyword-dropdown-icon {
	margin-left: 10px;
}

.keyword-box-contain {
	margin-top: 10px;
	font-size: .8rem;
}

.keyword-text-box {
	font-size: 1rem;
	margin-top: 10px;
	background-color: rgba(255,255,255, .2);
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	max-width: 85%;
}
</style>