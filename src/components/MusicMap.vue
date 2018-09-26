<template>
    <div style="height:100%;background-color: #e8e8e8;'">
        
        <svg width="100%" height="100%">
           
            <text x="40%" y="10%" fill="black" font-size="25">Energetic</text>
            <text x="44%" y="95%" fill="black"  font-size="25">Calm</text>
            <text x="5" y="50%" fill="black" font-size="25">Dark</text>
            <text x="80%" y="50%" fill="black" font-size="25">Positive</text>
           
            <circle v-for="track in filteredTracks"  
                    :cx="getX(track)" 
                    :cy="getY(track)" 
                    :r="getRadius(track)" 
                    :fill="getColor(track)" 
                    @click="launchPlaylist(track)">
                    <title>{{track.artist.name + ' ' + track.title}}</title>
            </circle>

        </svg> 
    </div>
</template>

<script>
import DataService from "@/services/api.js";

export default {
  name: "MusicMap",
  // data: {

  // },
  props: ['tracks', 'genres'],
  computed: {
    filteredTracks() {
        
        var filtered =  this.tracks.filter(t => this.$myStore.state.genres.includes(t.genre));
        return filtered;
    }
  },
  methods: {
    getX(track) {
        
      return (Number(track.valence) / 1000000) * 100 + '%';
    },
    getY(track) {

      return (100 -(Number(track.arousal) / 1000000) * 100) + '%';
    },
    getRadius(track) {

        return 8 * (Number(track.popularity)/100);
    },
    getColor(track) {

        const genre = this.genres.find(s => s.name.toLowerCase() == track.genre);
        if(genre)
            return genre.color;
        return 'black';
    },
    launchPlaylist(track) {

        this.$emit('trackClicked', track)
        console.log('MusicMap sending launch playlist for : ' + track.artist.name + ': ' + track.title)
    }
  }
};
</script>

<style scoped>
</style>