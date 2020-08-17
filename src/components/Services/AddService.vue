<template>
  <div>
    <div>
      <br />Name:
      <input type="text" placeholder="name" v-model="addService.name" />
      <br />
      <br />Url
      <input type="text" placeholder="url" v-model="addService.url" />
      <br />
      <br />
      <button @click="onSubmit">AddService</button>
      <hr />
      <br />
    </div>
    <ul>
      <li v-for="item in newServices" :key="item.id">{{item.name}}</li>
    </ul>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      addService: {
        name: "",
        url: "",
      },
    };
  },
  props: ["afterSubmit", "newServices"],
  methods: {
    onSubmit() {
      console.log("edited services ", this.newServices);
      //this.addService = this.newServices;
      let url = "http://192.168.99.100:8080/api/v1/services";
      let token = sessionStorage.getItem("jwtToken");
      axios
        .post(url, this.addService, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
          if (response.status == 201) {
            console.log("data added successfully", response.data);
            this.addService.name = "";
            this.addService.url = "";
            console.log("Add service : ", response.data);
            this.afterSubmit(response.data);
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
