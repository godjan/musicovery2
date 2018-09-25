<template>
    
    <button :class="activeColor"  @click='toggle()' class="ui button">{{content}}</button>
     
</template>

<script>
export default {
  name: "ToggleButton",
  props: ["content", "color", "size","selected"],
  data() {
    return {
     
    };
  },
  computed: {
    activeColor() {
      //console.log('size ' + this.size + ' ' + this.color + ' selected ' + this.selected)
      let cls = this.selected ? this.color : "basic " + this.color;

      cls += this.size == "small" ? " mini" : " filterButton";

      return cls;
    }
  },
  methods: {
    toggle() {

      this.$emit("click");
    }
  }
};
</script>