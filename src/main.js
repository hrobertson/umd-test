import Vue from 'vue'
import HelloWorld from './components/HelloWorld';


Vue.component('hello-world', HelloWorld);

new Vue({
  el: '#vue-app-mounting-point',
})
