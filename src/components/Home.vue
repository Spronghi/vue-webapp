<template>
  <v-container id="home" fluid class="background">
    <v-layout text-center wrap>
      <v-col cols="12">
        <h1 class="text-white pa-6 title-text display-4">{{ $t("home.title") }}</h1>
        <h3 class="text-white headline">{{ $t("home.subtitle") }}</h3>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .background {
    background-image: url('../imgs/background.jpeg');
    background-size: cover;
    height: 967px;
    margin-top: -67px;
  }

  .title-text{
    margin-top: 180px;
    padding-bottom: 15px !important;
  }

  @media (min-width: 1520px) {
    .background {
      background-image: url('../imgs/background.jpeg');
      background-size: cover;
    }
  }

  @media (min-width: 520px) {
    .background {
      background-image: url('../imgs/background.jpeg');
      background-size: cover;
    }
  }

  .text-white {
    color: white;
  }
</style>
