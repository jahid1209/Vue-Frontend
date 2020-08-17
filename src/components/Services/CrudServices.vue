<template>
  <div>
    <h1>Services</h1>
    <hr />
    <h2>Congratulation!!</h2>
    <my-addservice :afterSubmit="addService" :newServices="services"></my-addservice>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>URL</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service.id">
          <td v-if="!isEditable">{{service.name}}</td>
          <input v-if="isEditable" @keyup.enter="editService(name)" v-model="service.name" />
          <td>{{service.url}}</td>

          <td>
            <button @click="isEditable=!isEditable">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>

    <my-deleteservice></my-deleteservice>
  </div>
</template>
<script>
import AddService from "./AddService.vue";
import DeleteService from "./DeleteService.vue";
import axios from "axios";
export default {
  data() {
    return {
      services: [],
      isEditable: false,
    };
  },
  components: {
    "my-addservice": AddService,
    "my-deleteservice": DeleteService,
  },
  mounted() {
    console.log("Mounted Log: ");
    this.getService();
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
            this.services = response.data;
          } else {
            console.log(" djfdkjfskl : ", response.status);
          }
        })
        .catch((error) => console.log(error));
    },
    addService(service) {
      this.services.push(service);
    },
    editService() {
      this.isEditable = false;
    },
    // provide() {
    //   return {
    //     newServices: this.services,
    //   };
    // },
  },
};
</script>
