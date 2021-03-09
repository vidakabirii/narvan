<template>
  <div class="home">
    <div class="searchBox">
      <div><img src="@/assets/logo.png" /></div>
      <input v-model="requestUrl" />
      <button @click="requestToGoogle()">Find</button>
    </div>
    <div class="links" v-if="results.length != 0">
      <div v-for="(item, index) in results" :key="index">
        <router-link to="" @click.native="openLink(item.link)">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as googleService from "@/service/api/google/google.js";

export default {
  name: "Home",
  data() {
    return {
      requestUrl: "",
      results: [],
    };
  },
  watch: {
    requestUrl: function() {
      this.results = [];
      this.requestToGoogle();
    },
  },
  components: {},
  mounted() {},
  methods: {
    requestToGoogle() {
      googleService.get(this.requestUrl).then((res) => {
        console.log(res.data.items);
        res.data.items.forEach((element) => {
          this.results.push({
            link: element.link,
            name: element.title,
          });
        });
      });
    },
    openLink(link) {
      location.href = link;
    },
  },
};
</script>

<style lang="scss" scoped>
.searchBox {
  margin-top: 20vh;
  div {
    margin-right: 8vh;
    margin-bottom: 2vh;
  }
  input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    width: 40vw;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 10px;
    border-radius: 10px;
    width: 8vw;
    color: white;
    background-color: rgb(28, 144, 247);
    font-weight: bold;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
}
.links {
  width: 70%;
  overflow: hidden;
  margin: 5% 10%;
  padding: 5%;
  border: 2px solid gray;
  border-radius: 10px;
  div {
    border-bottom: 1px solid lightgray;
    padding: 10px;
    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
