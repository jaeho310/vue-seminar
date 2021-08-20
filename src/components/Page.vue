<template>
  <v-container fluid style="width: 55%; margin-top: 5%" tag="section">
    <h1>
      AXIOS 연습용 페이지
    </h1>
    <v-textarea
      filled
      label="dom에 mount 되는순간 ajax 통신한 결과"
      v-model="axiosResult"
      rows="17"
    ></v-textarea>
  </v-container>
</template>
<script>
import api from '../utils/api.js'
export default {
  data() {
    return {
      axiosResult: ""
    }
  },
  mounted() {
    // 가장 기본적인 axios 사용법입니다.
    // this.getSonarqubeProject()

    // Promise로 직접 axios를 해줍니다.
    // this.getSonarqubeProject2()

    // UI solution팀에서 사용중인 axios interceptor입니다.
    // 요청에 대한 baseUrl, Header 등을 전역으로 관리합니다.
    this.getSonarqubeProject3()
  },
  methods: {
    parsingJson(res) {
      return new Promise((resolve, reject) => {
        try {
          resolve(JSON.stringify(res.data.components, null, 2))
        } catch(error) {
          reject(error)
        }
      })
    },
    fillTextArea(res) {
      return new Promise((resolve, reject) => {
        try {
          this.axiosResult = res
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    },
    getSonarqubeProject() {
      this.$http.get(`/api/projects/search`, {
        headers: {
          Authorization: `Basic UGxhdDpQbGF0OTkl`
        }
      })
      .then(res => {
        this.axiosResult = JSON.stringify(res.data.components, null, 2)
      })
      .catch(err => {
        console.log(err)
      })
    },
    // promise를 사용시 디버깅시 유리합니다.
    getSonarqubeProject2() {
      this.getSonarqubeProjectPromise('/api/projects/search','UGxhdDpQbGF0OTkl')
      .then(this.parsingJson)
      .then(this.fillTextArea)
      .catch(err => {console.log(err)})
    },

    getSonarqubeProjectPromise(url, token) {
      return new Promise((resolve, reject) => {
        // 전역으로 설정해놓은 axios 사용
        this.$http.get(`${url}`, {
          headers: {
            Authorization: `Basic ${token}`
          }
        })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
      })
    },

    // UI solution팀에서 사용중인 방식으로 해당방법으로 사용할 예정입니다.
    getSonarqubeProject3() {
      api({
        url: '/api/projects/search',
        method: 'get',
      })
      .then(this.parsingJson)
      .then(this.fillTextArea)
      .catch(err => {console.log(err)})
    },
  },
}
</script>
<style>

</style>