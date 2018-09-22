<template>
  <div>
    <p class="title1" >Discovery</p>
    <form class="ui form" v-on:submit.prevent>
      <div class="ui icon input" :class="{ 'loading' : showLoader}">

      <input class="input" 
              @keyup.13="search(term)"
              v-model="term" 
              type="text" 
              placeholder="Search artist, song, genre, mood">

      <i class="search icon"></i>
    </div>
  </form>
  </div>
</template>

<script>

export default {

  name: "Search",

  props: ["showLoader"],
  
  data: function() {
    return {
      term: ""
    };
  },
  methods: {
    search: function(text) {
      this.$emit("onSearch", text);
    }
  }
};
</script>