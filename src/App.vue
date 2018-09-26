<template>

  <div style="padding:15px 15px;" id="app">

    <div class="ui grid stackable">

      <!-- <div class="three wide column">
          <search :showLoader="showLoader" @onSearch="callSearchApi"></search>
           <button class="ui green button" @click="launchPlaylist">Get playlist</button>
        {{spotify_token}}

      </div> -->

      <div class="eleven wide column">
            <p class="title1">Mood</p>
            <div class="moodContainer" >
               <MusicMap :tracks="tracks"
                         :genres="genres"
                         @trackClicked="launchPlaylist"></MusicMap>

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
          </filters>
      </div>
    </div>

    <section class="mt2">
      <div class="ui grid stackable">

         
          <div class="sizteen wide column">
              <Playlist :tracks="playlist" :autoplay="autoplay"></Playlist>
          </div> 
          
      </div>
    </section>

  </div>

</template>

<script>
import Filters from "./components/Filters";
import ToggleButton from "./components/ToggleButton";
import Search from "./components/Search";
import MusicMap from "./components/MusicMap";
import Playlist from "./components/Playlist"
import Player from "./components/Player"
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
      playlist: [],
      autoplay: false,
      filterStore: this.$myStore,
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
    
    this.getDefaultMap();
   // this.spotifyAuth();
  },
  computed: {

  },
  methods: {

    getDefaultMap() {

      var tracks = DataService.getAllTracks()
      console.log(tracks)
        this.tracks = tracks.tracks;     
    
    },
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
    launchPlaylist(track) {
         
          var tracks = DataService.getMoodPlaylist();
          this.tracks = tracks.tracks;

          if(track) {

            console.log('from App launch received playlist for : ' + track.artist.name + ': ' + track.title)
            this.playlist = tracks.tracks.slice(); // simulate new playlist otherwise no change detected
            this.autoplay = true;
          }
    },
    // onGenreChanged: function(genre) {
    //    this.filterStore.toggleGenre(genre);
    //  // this.toggleElement(this.filterlist.genres, genre);
    // },
    // onDecadeChanged: function(decade) {
    //    this.filterStore.toggleDecade(decade);
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
    MusicMap,
    Playlist,
    Player
  }
};
</script>

<style>

body {
  /* background: #0a3d62;
  color: #3c6382; */
      background: #576574;
    color: #48dbfb;
  font-family: "Roboto", sans-serif;
  font-weight:100;
}

.moodContainer {

  width: 100%;
  height: 340px;
}

.title1 {
  font-weight: 100;
  font-size: 30px;
  /*color: #82ccdd;*/
}

.subtitle1 {
  line-height: 1.28571429em;
  margin: calc(2rem - 0.14285714em) 0 1rem;
  font-weight: 100;
  padding: 0;
  font-size: 20px;
  /* color: #60a3bc; */
}

.mt1 { margin-top:10px; }
.mt2 { margin-top:20px; }
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
