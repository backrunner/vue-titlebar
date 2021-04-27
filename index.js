import TitlebarComponent from './components/titlebar.vue';

export default {
  install(Vue) {
    Vue.component(TitlebarComponent.name, TitlebarComponent);
  },
};
