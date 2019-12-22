import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import lang from './lang/lang';
import routes from "./routes";

Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages : lang, // set locale messages
  theme: {
    themes: {
      light: {
        primary: '#8bc34a',
        secondary: '#cddc39',
        accent: '#00bcd4',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#607d8b',
        success: '#4caf50',
      },
      options: {
        customProperties: true,
      },
    }
  },
});

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
