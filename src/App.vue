<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view transition="slide-x-transition"></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    Footer,
    Header,
  }
};
</script>

<style>
  ::selection {
    background-color: #a4c845 !important;
    color: #fff !important;

  }
  ::-moz-selection { background: yellow; }
  ::selection { background: yellow; }
</style>