import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextAreaAutoSize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextAreaAutoSize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBNGrxRUIsO56aWO1T6WEOpVbUwAF1DTlY",
  authDomain: "vue-calendar-a8bc4.firebaseapp.com",
  databaseURL: "https://vue-calendar-a8bc4.firebaseio.com",
  projectId: "vue-calendar-a8bc4",
  storageBucket: "vue-calendar-a8bc4.appspot.com",
  messagingSenderId: "171348278201",
  appId: "1:171348278201:web:ab4f3a39241c8a55385468"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
