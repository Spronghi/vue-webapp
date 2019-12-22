<template>
  <span>
    <v-container fill-height fluid class="background" :style="backgroundStyle">
      <v-layout text-center wrap>
        <v-col cols="12">
          <h1 v-if="title" :class="{'text-white' : !titleBlack, 'text-gray': titleBlack }" class="pa-6 title-text display-4">{{ $t(title) }}</h1>
          <h3 v-if="subtitle" class="text-white headline">{{ $t(subtitle) }}</h3>
        </v-col>
      </v-layout>
    </v-container>
    <v-container v-if="description" fluid>
      <v-layout text-center wrap>
        <v-col class="col-lg-10 col-md-12" offset-lg="1">
          <v-row>
            <v-card class="d-md-flex no-border" color="transparent" outlined>
              <v-card color="transparent" class="d-md-flex no-border" outlined>
                <v-card-text class="headline" :class="{'text-center' : isMobile, 'text-left':!isMobile }">
                  {{$t(description)}}
                </v-card-text>
              </v-card>
            </v-card>
          </v-row>
        </v-col>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import isMobile from "./utils/Mobile";

export default {
  name: 'Presentation',
  props : {
    description: String,
    backgroundUrl: String,
    title: String,
    subtitle: String,
    titleBlack: Boolean,
  },
  data: () => ({
    //
  }),
  computed: {
    isMobile,
    backgroundStyle(){
      return {
          'background-image' : "url('" + this.backgroundUrl + "')"
      };
    }
  }
};
</script>
<style scoped>
  .background {
    background-size: cover;
    height: 967px;
    margin-top: -67px;
  }

  .title-text{
    margin-top: 180px;
    padding-bottom: 15px !important;
  }

  .text-white {
    color: white;
  }

  .text-gray {
    color: rgba(0, 0, 0, 0.6)
  }
</style>
