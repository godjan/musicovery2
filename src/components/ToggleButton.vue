<template>
    
        <button :class="activeColor"  @click='toggle()' class="ui button">{{content}}</button>
    
</template>

<script>
export default {
  name: "ToggleButton",
  props: ["content", "color", "size"],
  data() {
    return {
      selected: true
    };
  },
  computed: {
    activeColor() {
      let cls = this.selected ? this.color : "basic " + this.color;

      cls += this.size == "small" ? " mini" : " filterButton";

      return cls;
    }
  },
  methods: {
    toggle() {
      this.selected = !this.selected;
      this.$emit("click");
    }
  }
};
</script>