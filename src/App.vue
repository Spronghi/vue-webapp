<template>
  <v-app>
    <v-sheet>
      <NavigationDrawer id="navigation-drawer" :drawer="drawer" @update-drawer="onUpdateDrawer"/>
      <Header :drawer="drawer" @update-drawer="onUpdateDrawer"/>
      <v-content>
        <router-view transition="slide-x-transition"></router-view>
      </v-content>
      <Footer/>
      <AcceptCookie/>
    </v-sheet>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from "./components/Footer";
import NavigationDrawer from "./components/NavigationDrawer";
import AcceptCookie from "./components/AcceptCookie";

export default {
  name: 'App',
  components: {
    AcceptCookie,
    NavigationDrawer,
    Footer,
    Header,
  },
  data:() => ({
      drawer: false,
  }),
  methods: {
      onUpdateDrawer(newVal){
          this.drawer = newVal;
      }
  },
  computed: {
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