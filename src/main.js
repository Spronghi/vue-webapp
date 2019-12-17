import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import lang from './lang/lang';

Vue.use(VueI18n);

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

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');
