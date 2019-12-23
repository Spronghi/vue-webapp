<template>
  <footer>
    <cookie-law theme="base" @accept="acceptCookie"></cookie-law>
  </footer>
</template>

<script>
    import CookieLaw from 'vue-cookie-law'

    export default {
        name: "AcceptCookie",
        components: { CookieLaw },
        methods:{
            acceptCookie(){
                this.$cookies.set('vue-webapp-cookie-allowed', true);
            }
        }
    }
</script>