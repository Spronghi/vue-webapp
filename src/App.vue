<template>
  <v-app>
    <Header/>
    <v-content v-on:scroll.passive="onScroll">
      <Home :offset-top="offsetTop" style="margin-bottom: 30px"/>
      <Who style="margin-bottom: 50px"/>
      <Gallery style="margin-bottom: 50px"/>
      <FindUs style="margin-bottom: 50px"/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Header from './components/Header';
import Gallery from './components/Gallery';
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Who from "./components/Who";

export default {
  name: 'App',

  components: {
    Footer,
    FindUs,
    Home,
    Header,
    Gallery,
    Who
  },

  data: () => ({
    offsetTop: 0
  }),

  computed : {
  },

  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
  },
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