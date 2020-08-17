<template>
  <div>
    <h1>Login</h1>
    <p>{{jwt}}</p>
    <hr />User Name:
    <input type="text" v-model="user.username" placeholder="enter user name" />
    <br />
    <br />Password:
    <input type="password" v-model="user.password" placeholder="enter password" />
    <br />
    <br />
    <button @click="checkCredentials" class="btn btn-primary">Login</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      jwt: "",
      user: {
        username: "",
        passsword: "",
      },
    };
  },
  methods: {
    checkCredentials() {
      let url = "http://192.168.99.100:8080/api/v1/login";
      axios
        .post(url, this.user)
        .then((response) => {
          if (response.status == 200) {
            sessionStorage.setItem("jwtToken", response.data);
            console.log(response);
            this.$router.push("/crudServices");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Wrong username or password");
        });
    },
  },
};
</script>
