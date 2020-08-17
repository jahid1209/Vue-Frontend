<template>
  <div>
    <button @click="getService">GetService</button>
    <ul>
      <li v-for="key in data" :key="key.id">Name: {{key.name}} url: {{key.url}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },

  methods: {
    getService() {
      let url = "http://192.168.99.100:8080/api/v1/services";
      let token = sessionStorage.getItem("jwtToken");
      axios
        .get(url, { headers: { Authorization: "Bearer " + token } })
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data);
            this.data = response.data;
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
