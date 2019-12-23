<template>
  <footer>
    <cookie-law theme="base" @accept="acceptCookie">
      <v-row slot-scope="props">
        <div class="col-md-12 col-lg-10" :class="{'pt-9 pl-10' : !isMobile}" slot="message">
          {{$t('cookie.askIt1') + '🍪' + $t('cookie.askIt2')}}
        </div>
        <div :class="{'col-4 offset-2 align-center': isMobile, 'col-1' : !isMobile}">
          <v-btn @click="props.accept" :height="!isMobile ? 70 : 44" large dark color="light-green">{{$t('cookie.accept')}}</v-btn>
        </div>
        <div :class="{'col-4 align-center': isMobile, 'col-1' : !isMobile}">
          <v-btn @click="props.close" :height="!isMobile ? 70 : 44" large color="error">{{$t('cookie.ignore')}}</v-btn>
        </div>
      </v-row>
    </cookie-law>
  </footer>
</template>

<script>
    import CookieLaw from 'vue-cookie-law'
    import isMobile from "./utils/Mobile";

    export default {
        name: "AcceptCookie",
        components: { CookieLaw },
        computed:{
            isMobile
        },
        methods:{
            acceptCookie(){
                this.$cookies.set('vue-webapp-cookie-allowed', true);
            }
        }
    }
</script>