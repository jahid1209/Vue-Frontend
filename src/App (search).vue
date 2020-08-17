<template>
  <div align="center">
    <!-- <ul v-if="posts">
      <li v-for="post in posts.records" :key="post.idsid">
        {{post.baseimageurl}}
        <img :src="post.baseimageurl" />
      </li>
    </ul>-->
    <h2>Filter Texts</h2>
    <p>{{posts | toUpper }}</p>
    <hr />
    <input type="text" v-model="filterText" />
    <hr />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
//import AmIhttp from "axios";

export default {
  methods: {},
  data() {
    return {
      posts: "Heu knkdfnskfhskhdf:L",
      fruits: ["Banana", "Apple", "Cedar", "MAngo", "Melon"],
      filterText: "",
    };
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.toLowerCase().match(this.filterText);
      });
    },
  },

  // mounted() {
  //   AmIhttp.get(
  //     "https://api.harvardartmuseums.org/Image?apikey=4a3b78e5-b216-4bbd-a575-99bb31864602"
  //   )
  //     .then((response) => {
  //       this.posts = response.data;
  //       //console.log(response.data);
  //     })
  //     .catch((error) => (this.posts = [{ title: error }]));
  // },
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