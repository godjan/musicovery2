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
   

    <p class="subtitle1">Decades</p>
    <ToggleButton   v-for="d in decades"
                    :content="d.title" 
                    :color="'blue'"
                    :size="'small'"
                    @click="decadeToggled(d.title)"
                    :selected="$myStore.state.decades.includes(d.title)"></ToggleButton>

    <!-- <p class="subtitle1"> -->
       
    <div class="ui grid" style="margin-top:5px">
        <div class="four wide column">
            <span class="subtitle1">Genre</span>
        </div>
        <div class="eight wide column">
            <button class="ui teal basic mini button" @click="selectAll()">All</button>
            <button class="ui teal basic mini button" @click="unselectAll()">None</button>
        </div>
    </div>
    <!-- </p> -->
    <ToggleButton   v-for="genre in genres"
                    :content="genre.name" 
                    :color="genre.color" 
                    @click="genreToggled(genre.name)"
                    :selected="$myStore.state.genres.includes(genre.name.toLowerCase())"></ToggleButton>
       

</div>
</template>

<script>
import ToggleButton from './ToggleButton.vue'

export default {
  name: 'Filters',
  props: ['decades','genres'/*, 'filterStore'*/],
  data: function () {
      return {
        //filterStore: this.$myStore
      }
  },
  methods: {
      genreToggled: function(genre) {

        this.$myStore.toggleGenre(genre.toLowerCase());
        
      },
      decadeToggled: function(decade) {

        this.$myStore.toggleDecade(decade);
        
      },
      selectAll() {

          this.$myStore.setGenres(this.genres.map( g=> g.name.toLowerCase()));
      },
      unselectAll() {
       
           this.$myStore.clearGenres();
      }
  },
  components: {
    ToggleButton
  }
}

</script>