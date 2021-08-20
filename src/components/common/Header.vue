<template>
  <div>
    <v-app-bar
      dense
      dark
    >
    <ul class="menu">
      <li>
        <v-btn
        @click="toHome"
        >
        홈
        </v-btn>
      </li>
      <li>
        <v-btn
        @click="toAxiosPage"
        >
        axios 테스트
        </v-btn>
      </li>
      <li>
        <v-btn
        @click="toTest"
        >
        Test
        </v-btn>
      </li>
    </ul>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    methods: {
      toHome() {
        this.$router.push("/")
      },
      toAxiosPage() {
        this.$router.push("/page")
      },
      toTest() {
        this.$router.push("/test")
      }
    },
  }
</script>

<style>
  ul.menu li{float:left; padding:0px 20px; list-style:none; display: inline;}
</style>