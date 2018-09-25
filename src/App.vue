<template>

  <div style="padding:10px 5px;" id="app">

    <div class="ui grid stackable">

      <div class="three wide column">
          <search :showLoader="showLoader" @onSearch="callSearchApi"></search>
           <button class="ui green button" @click="getPlaylist">Get playlist</button> 
        {{spotify_token}}
      
      </div>

      <div class="eight wide column">
            <p class="title1">Mood</p>  
            <div class="moodContainer" >
               <MusicMap :tracks="tracks" 
                         :genres="genres"
                         ></MusicMap>
                          <!-- :filterStore="filterStore"-->

                <div class="ui negative message" v-show="callApiError">
                    <i class="close icon" @click="callApiError = false"></i>
                    <div class="header"> Error </div>
                     {{ errorMessage }}
                </div>
               
            </div>
      </div>

      <div id="filterPanel" class="five wide column">
          <filters  :decades="decades" 
                    :genres="genres">
                   <!-- :filterStore="filterStore">
                    < @genreChanged="onGenreChanged" 
                    @decadeChanged="onDecadeChanged"
                    @allGenres="allGenresClicked"
                    @noGenres="noGenresClicked"> -->
          </filters>
      </div>
    </div>

    <div class="ui two column stackable grid">

  <div class="column">
    <div class="ui raised segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="medium line"></div>
          <div class="short line"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui raised segment">
      <div class="ui placeholder">
        <div class="image header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="medium line"></div>
          <div class="short line"></div>
        </div>
      </div>
    </div>
  </div>
 
</div>

  </div>
      
</template>

<script>
import Filters from "./components/Filters";
import ToggleButton from "./components/ToggleButton";
import Search from "./components/Search";
import MusicMap from "./components/MusicMap";
import DataService from './services/api.js'
//import Store from './services/store.js'

//let filter_store = new Store();

// const myMixin = {

//   methods: {
//     toggleElement(arr, element) {
//       if (!arr.includes(element)) {
//         arr.push(element);
//       } else {
//         var index = arr.indexOf(element);
//         if (index != -1) arr.splice(index, 1);
//       }
//     }
//   }
// };

export default {
  name: "app",
  //mixins: [myMixin],
  data: function() {

    return {
    
      spotify_token:'',
      showLoader: false,
      callApiError: false,
      errorMessage: "",
      search: "",
      tracks: [],
      filterStore: this.$myStore,//filter_store,
      decades: [
        { title: "60" },
        { title: "70" },
        { title: "80" },
        { title: "90" },
        { title: "00" },
        { title: "10" }
      ],
      genres: [
        { name: "Rock", color: "blue" },
        { name: "Pop", color: "orange" },
        { name: "Folk", color: "yellow" },
        { name: "Electro", color: "teal" },
        { name: "Hip Hop", color: "pink" },
        { name: "R & B", color: "violet" },
        { name: "Jazz", color: "purple" },
        { name: "Blues", color: "blue" },
        { name: "Classical", color: "grey" },
        { name: "Soundtrack", color: "brown" },
        { name: "Latin", color: "olive" },
        { name: "Reggae", color: "black" },
        { name: "Country", color: "red" },
      ]
    };
  },
 
  mounted() {

    this.filterStore.setGenres(this.genres.map( g=> g.name.toLowerCase()));
    this.filterStore.setDecades(this.decades.map(d => d.title))

   // this.spotifyAuth();

    console.log('mounted')
  },
  computed: {

  },
  methods: {

    spotifyGetTrack() {

      DataService.spotifyGetTrack();
    },
    spotifyAuth() {

      DataService.spotifyAuth().
                  then(response => { 

                    if(response.status == 200) {

                        DataService.spotify_token = response.data.access_token;
                        this.spotify_token = response.data.access_token;
                        this.spotifyGetTrack();
                    }
                    console.log(response)
                  });
    },
    async callSearchApi(tag) {

      // this.callApiError = false;
       this.showLoader = true;
       this.tracks = [];
       DataService.search(tag).then(response => console.log(response.data.tracks.track))
                              .then(_=> this.showLoader = false)
      // DataService.search(tag)
      //            .then(this.searchResponseReceived)
      //            .then(_ => {
      //               this.showLoader = false;
      //            });
    },
    getPlaylist() {

          var tracks = DataService.getMoodPlaylist();
          this.tracks = tracks.tracks;
          console.log(tracks)
    },
    // onGenreChanged: function(genre) {

    //  // this.toggleElement(this.filterlist.genres, genre);
    // },
    // onDecadeChanged: function(decade) {

    //   //this.toggleElement(this.filterlist.decades, decade);
    // },
    // allGenresClicked() {
    //     //this.filterlist.genres = this.genres.map( g=> g.name.toLowerCase());
    //     this.filterStore.setGenresFilter(this.genres.map( g=> g.name.toLowerCase()));
    // },
    // noGenresClicked() {
    //     //this.filterlist.genres = [];
    //     this.filterStore.clearGenresFilter();
    // },
    searchResponseReceived: function(response) {

      if (!response.data) {

        this.showLoader = false;
        this.tracks = null;
        this.callApiError = true;
        this.errorMessage = response.bodyText || 'Network error';
        return;
      }

      var root = response.data.root;

      if (root.response.code == "100") {

        if (root.totalResults == 0) {
          this.tracks = null;
          return;
        }

        if (root.totalResults == 1) {
          console.log(root.tracks.track)
          this.tracks = root.tracks.track;
        }
        else {
          this.tracks = root.tracks.track;
        }
      }
    }
  },
  components: {
    Filters,
    ToggleButton,
    Search,
    MusicMap
  }
};
</script>

<style>

body {
  background: #0a3d62;
  color: #3c6382;
  font-family: "Roboto", sans-serif;
}

.moodContainer {
  
  width: 100%;
  height: 340px;
}

.title1 {
  font-weight: 100;
  font-size: 30px;
  color: #82ccdd;
}

.subtitle1 {
  line-height: 1.28571429em;
  margin: calc(2rem - 0.14285714em) 0 1rem;
  font-weight: 100;
  padding: 0;
  font-size: 20px;
  color: #60a3bc;
}
/* .mstyles a {
    padding: 10px 20px;
    color: white;
  }

  .red {   background: #db2828 !important;}
  .orange { background: #F2711C !important;}
  .yellow { background: #FBBD08 !important;} */

#filterPanel button {
  margin-bottom: 4px;
}
.filterButton {
  width: 100px;
}
</style>
