<template>
  <div class="container">
    <login>
    </login>
  </div>
</template>

<script>

import PlaceHolder from "./components/placeholder.vue"
import NavBar from "./components/bar.vue"
import Login from "./pages/login.vue"


export default {
  components: {
    PlaceHolder,
    NavBar,
    Login
  }
}
</script>

<style lang="sass">
@import './styles/defaults.scss'

#login-container
  height: 100vh
  overflow-y: auto
  background: $theme-color
  font-family: "PingFang SC"
  color: white


</style>
