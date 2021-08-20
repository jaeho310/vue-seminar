# vue-tutorial

## vue란
가상 DOM을 만들어 DOM을 조작하는 방식의 프레임워크입니다.

SPA(single page application) 프레임워크로 컴포넌트를 쪼개 재사용성을 높이고 코드중복을 줄일수 있도록 도와줍니다.

MVVM 패턴이 내부적으로 적용되어있어 양방향 데이터바인딩을 쉽게 할수 있습니다.


## 라이프사이클
Vue는 생성(create)되고 Dom에 부착(mount)되고 갱신(update)되고 소멸(destroy)되는 4가지 과정을 거칩니다.

일반적으로 가장 많이 사용하는 옵션은 mount입니다.

vue가 생성해준 가상 dom이 실제 dom에 부착된후 실행되므로 DOM 관련 요소를 제어하기 좋은 단계입니다.

(서버의 데이터를 가져오는 작업을 mount에서 실행하는 경우가 많습니다.)

자식컴포넌트를 갖고있다면 부모생성 자식생성 자식마운트 부모마운트 순서로 진행되는 점에 유의합니다.

## vue 인스턴스
인스턴스|설명
---|---
name|vue 인스턴스의 이름을 지정합니다.
el|html element나 css selector를 이용하여 대상을 지정합니다.
**`data`**|인스턴스의 data입니다.
**`computed`**|계산된 속성으로 vue 인스턴스에 바인딩해줍니다.(vuex 연동시 자주 사용됩니다.)
watch|감시된 속성으로 vue 인스턴스에 데이터가 변경되는 시점에 호출됩니다.
**`methods`**|함수를 정의합니다.
**`components`**|컴포넌트를 등록합니다.
beforeCreate|인스턴스 생성직전 호출됩니다.
created|인스턴스 생성 후 호출됩니다.
beforeMount|인스턴스 마운트 전 호출됩니다.
**`mounted`**|인스턴스 마운트 후 호출됩니다.
beforeDestory|인스턴스 파괴되기 전 호출됩니다.
Destory|인스턴스가 파괴된 후 호출됩니다.
beforeUpdate|인스턴스의 데이터가 변경되어 다시 렌더링하기 전 호출됩니다.
updated|인스턴스의 데이터가 변경되어 다시 렌더링한 후 호출됩니다

진하게 표시된 인스턴스들이 자주 사용됩니다.

## 프로젝트 생성방법
- $ vue create [project-name]

위 명령어를 통해 프로젝트 생성을 합니다.<br>
vuetify가 vue3에서 호환이 안되는 부분이 있다고하니 vue2를 선택해줍니다.
해당 프로젝트의 루트위치에서 아래 명령어를 입력해 정상적으로 실행되는지 확인합니다.
```
$ yarn serve
# or
$ npm run serve
```
## 추가한 의존성
```
vuetify
vue-router
axios
```
npm이나 yarn을 이용해 해당 의존성을 다운로드 받습니다.

## 프로젝트 구조(/src)
```
.
|-- App.vue
|-- assets
|   |-- logo.png
|   `-- logo.svg
|-- components
|   |-- Home.vue
|   |-- Page.vue
|   `-- common
|       |-- Footer.vue
|       `-- Header.vue
|-- main.js
|-- plugins
|   `-- vuetify.js
`-- router
    `-- index.js
```

## main.js
```js
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import api from './utils/api'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$api = api

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// vue인스턴스를 생성, App.vue를 랜더링하고 #app에 동적으로 마운트

// vue인스턴스를 생성, App.vue를 랜더링하고 #app에 마운트
// 라우팅을 하기 위한 router를 추가
// ajax를 사용하기위한 axios 추가
// UI솔루션 그룹에서 사용하는 api 추가(axios 전역설정 추가)
// 컴포넌트 퍼블리싱을 해주는 vuetify 추가
```
별다른 설정을 하지 않으면 애플리케이션의 시작점이 되는곳입니다.<br>

## App.vue
```js
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer author="jaeho" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, Footer
  },
};
</script>
```
main.js에서 App을 선택했으므로 최상위 부모 컴포넌트가 되는 Vue입니다.

Header, router-view, Footer 를 자식컴포넌트로 사용 하므로 components에 등록해주고 template 태그 안쪽에서 사용해줍니다.

Footer에는 author라는 속성이 있습니다.(Footer에 추가설명합니다.)

## router/index.js
```js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'
import Page from '@/components/Page'

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:Home
			,component:Home
		}
		,{
			path:'/page'
			,name:Page
			,component:Page
		}

	]
})
```
라우터의 path에 맞는 컴포넌트를 설정해줍니다.

별도의 설정이 없으면 \<router-view \/> 태그에 해당 컴포넌트가 들어가게 됩니다.

## Header.vue
```js
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
      }
    },
  }
</script>

<style>
  ul.menu li{float:left; padding:0px 20px; list-style:none; display: inline;}
</style>
```
v- 로 시작되는 태그들은 vuetify의 컴포넌트들입니다.

vuetify가 제공하는 앱바와 버튼을 사용한 Header예제입니다.

@click에는 method를 넣어주면 클릭이벤트가 동작합니다.

버튼 클릭시 vue에 전역으로 등록한 $router를 가져와 push 명령어를 이용하여 router-view 화면 이동을 합니다.

# Footer.vue
```js
<template>
  <v-footer
    absolute
  >
    <v-spacer />
    <div class="text-body-1 font-weight-light pt-6 pt-md-0 text-center">
        &copy; {{ (new Date()).getFullYear() }}, Made by <v-icon>mdi-vuetify</v-icon>
        <a
        href="https://b-iris.mobigen.com"
        class="text-decoration-none"
        >{{author}}</a>
    </div>
  </v-footer>
</template>

<script>
export default {
  props: {
    author: String
  }
}
</script>
<style>

</style>
```
props에 author가 선언되어있고

a태그 사이에 {{author}} 가 들어가있습니다.

위의 방식은 부모컴포넌트와 데이터를 교환 할때 사용됩니다.
```xml
<Footer author="jaeho" />
```
자식컴포넌트에서 부모컴포넌트의 메서드를 사용하고싶다면 $emit을 이용합니다.

## Home.vue
```js
<template>
  <v-app>
    <v-container fluid class="text-center mt-15 py-12">
      <v-avatar
        size="250"
      >
        <v-img sizes="250" src=https://t1.daumcdn.net/cfile/tistory/2459514E550A64DD27 />
      </v-avatar>
        <p id="explain">
          vue tutorial
        </p>
      <div />
    </v-container>
  </v-app>
</template>

<script>
  export default {
  }
</script>

<style>
  #explain{
    font-size: 25px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:#439FCC
}
</style>
```
//에 라우팅 시킨 Home.vue 입니다.

## Page.vue
//page에 라우팅 시킨 Page.vue 입니다.
```js
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
```
mounted에 ajax처리를 합니다.(가상돔이 실제돔에 끼워진순간 ajax를 사용합니다.)

백엔드 api서버에서 데이터를 받아오는 axios 사용법만 정확히 숙지하면 수정하는데는 큰 무리가 없습니다.