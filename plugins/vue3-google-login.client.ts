import vue3GoogleLogin from 'vue3-google-login';

/**
 * @see https://devbaji.github.io/vue3-google-login/#nuxt-3
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3GoogleLogin, {
    buttonConfig: {
      theme: 'filled_blue',
      shape: 'circle',
      size: 'large',
    },
  })
});
