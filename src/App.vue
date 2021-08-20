<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer author="ㅁㄴㅇㄹ" />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, Footer
  },
};
</script>