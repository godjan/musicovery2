<template>
    <div style="height:100%;background-color: #e8e8e8;'">
        
        <svg width="100%" height="100%">
           
            <text x="40%" y="10%" fill="black" font-size="25">Energetic</text>
            <text x="44%" y="95%" fill="black"  font-size="25">Calm</text>
            <text x="5" y="50%" fill="black" font-size="25">Dark</text>
            <text x="85%" y="50%" fill="black" font-size="25">Positive</text>
           
            <!-- <circle  cx="10" cy="10" r="15" fill="#2185D0" /> -->
            <circle v-for="track in filteredTracks"  
                    :cx="getX(track)" 
                    :cy="getY(track)" 
                    :r="getRadius(track)" 
                    :fill="getColor(track)" />

        </svg> 
        {{filters}}
       
        <!-- <section>
            <div v-for="t in tracks" class="card">
                  <h3>{{ t.artist.name}}</h3>
            </div> 
        </section> -->
    </div>
</template>

<script>
import DataService from "@/services/api.js";

export default {
  name: "MusicMap",
  // data: {

  // },
  props: ['tracks', 'genres','filters'],
  computed: {
    filteredTracks() {
        
        var f =  this.tracks.filter(t => this.filters.genres.includes(t.genre));
        return f;
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
        return 4;
    },
    getColor(track) {
        let style = this.genres.find(s => s.name.toLowerCase() == track.genre);
        if(style)
            return style.color;
        return 'black';
    }
  }
};
</script>

<style scoped>
</style>