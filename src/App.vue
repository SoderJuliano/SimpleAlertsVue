<template>
  <AlertComponentVue
  :show="show"
  title="Title"
  message="Test text"
  :custom="true"
  :customProperties="alert"
  />
</template>

<script>
import AlertComponentVue from './components/AlertComponent.vue'
export default {
  name: 'App',
  components: {
    AlertComponentVue
  },
  data() {
    return {
      show: true,
      alert: {
        autoClose: true,
        timer: 1000,
        backgroundColor: 'red',
        textColor: 'white',
        closeButton: false,
        closeButtonText: 'Close',
        // You can write your own css class and pas it as prop
        customCssClass: 'alert-custom-css-class'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.alert-custom-css-class {
  background-color: blue;
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  font-size: 24px;
  border: solid 5px red;
}
</style>
