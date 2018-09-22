<template>
<div >
    <p class="title1">Filters</p>
<div class="ui grid">
    <div class="two wide column"><span class="subtitle1">Hits</span></div>
    <div class="eight wide column">
        <input type="range" id="start" name="volume" min="0" max="100" value=50 style="width:100%"/> 
    </div>
    <div class="two wide column"><span class="subtitle1">Discovery</span></div>
</div>
    <!-- <div class="columns is-mobile">
        <div class="column"><h3 class="is-size-5">Hits</h3></div>
        <div class="column is-half"> </div>
        <div class="column"><h3 class="is-size-5">Discovery</h3> </div>
    </div>   -->

    <!-- <div class="columns is-variable is-mobile">
        <diMv class="column" v-for="d in decades"> -->
          <p class="subtitle1">Decades</p>
          <ToggleButton v-for="d in decades"
                        v-bind:content="d.title" 
                        v-bind:color="'blue'"
                        v-bind:size="'small'"
                        v-on:click="setDecades(d.title)"></ToggleButton>
     
    <!-- </div>  -->
    <!-- <div class="columns is-multiline"> -->
        
    <p class="subtitle1">Style</p>
          <ToggleButton v-for="genre in genres" v-bind:content="genre.name" 
                        v-bind:color="genre.color" 
                        v-on:click="setGenre(genre.name)"></ToggleButton>
       
     
    <!-- </div> -->
</div>
</template>

<script>
import ToggleButton from './ToggleButton.vue'

export default {
  name: 'Filters',
  props: ['decades','genres'],
  data: function () {
      return {
        
      }
  },
  methods: {
      setGenre: function(genre) {
      
         this.$emit('genreChanged', genre.toLowerCase())
         
      },
      setDecades: function(d) {
         this.$emit('decadeChanged', d)
       
      }
  },
  components: {
    ToggleButton
  }
}

</script>