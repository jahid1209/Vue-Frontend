<template>
  <div>
    <br />
    <br />
    <button @click="deleteService">DeleteService</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },

  methods: {
    deleteService() {
      let url = "http://192.168.99.100:8080/api/v1/services";
      let token = sessionStorage.getItem("jwtToken");
      axios
        .delete(url, { headers: { Authorization: "Bearer " + token } })
        .then((response) => {
          if (response.status == 204) {
            console.log(response.data);
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>