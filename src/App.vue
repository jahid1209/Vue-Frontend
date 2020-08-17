<template>
  <div align="center">
    <app-header></app-header>
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  methods: {},
  data() {
    return {};
  },

  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.toLowerCase().match(this.filterText);
      });
    },
  },
  components: {
    "app-header": Header,
  },
};
</script>


<style>
ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
ul li img {
  width: 200px;
}
</style>