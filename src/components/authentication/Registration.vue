<template>
  <div>
    <h1>Registration</h1>
    <hr />User Name:
    <input type="text" placeholder="enter user name" v-model="user.username" />
    <br />
    <br />Password:
    <input type="password" placeholder="enter password" v-model="user.password" />
    <br />
    <br />
    <button @click="onSubmit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        username: "",
        passsword: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(
        "Use: " + this.user.username + " pass: " + this.user.passsword
      );
      axios
        .post("http://192.168.99.100:8080/api/v1/register", this.user)
        .then((response) => {
          if (response.status == 200) {
            //alert("Registration successful");
            this.$router.push("/login");
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
