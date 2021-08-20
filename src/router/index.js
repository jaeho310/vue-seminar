import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'
import Page from '@/components/Page'
import Test from '@/components/Test'

Vue.use(Router); // vue 라우터 사용

export default new Router({ // 라우팅
  mode: 'history',
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
		,{
			path:'/test'
			,name:Test
			,component:Test
		}
	]
})