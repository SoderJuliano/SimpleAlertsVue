<template>
  <button @click="show = true">test alert component</button>
  <button @click="callAlertMethod" >test js alert</button>
  <button @click="this.show3 = true" >test js alert3</button>
  <AlertComponentVue
      title="Title"
      message="Test text"
      confirm="true"
      @close="closeAlert"
      @confirm="confirm"
      :show="false"
      :custom="true"
      :customProperties="alert"
  />
  <AlertComponentVue
      title="AlertComponentVue"
      message="Test AlertComponentVue"
      @close="closeAlert"
      :show="show"
      :custom="true"
      :customProperties="alert"
  />
  <AlertComponentVue
      title="'Simple close'"
      message="Test closing"
      @close="closeAlert"
      :show="show3"
      :custom="true"
      :customProperties="alert3"
  />
</template>

<script>
import { showAlert } from './components/showAlert';
import AlertComponentVue from './components/AlertComponent.vue'
export default {
  name: 'App',
  components: {
    AlertComponentVue
  },
  data() {
    return {
      show: false,
      alert: {
        autoClose: false,
        timer: 1000,
        backgroundColor: 'red',
        textColor: 'black',
        closeButton: true,
        closeButtonText: 'Close',
        closeButtomPosition: 'bottom',
        // You can write your own css class and pas it as prop
        customCssClass: 'alert-custom-css-class'
      },
      show3: false,
      alert3: {
          autoClose: false,
          timer: 5000,
          backgroundColor: 'black',
          textColor: 'white',
          closeButtonText: 'Close',
        },
    }
  },
  methods: {
    callAlertMethod() {
      showAlert("test");
    },
    closeAlert() {
      this.show = false
      this.show3 = false
    },
    confirm(value) {
      console.log(value)
      this.closeAlert()
    },
    showAlert
  },
  mounted() {
    // showAlert("Welcome back")
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
