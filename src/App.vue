<template>
  <div class="container" id="app-page">
    <router-view></router-view>
  </div>
</template>

<script>

import PlaceHolder from "./components/placeholder.vue"
import NavBar from "./components/bar.vue"

import Index from "./pages/index.vue"
import Profile from "./pages/profile.vue"
import Project from "./pages/project.vue"


const App = {
  components: {
    PlaceHolder,
    NavBar,
    Index,
    Profile,
    Project,
  }
}

export default App

</script>

<style lang="sass">
@import './styles/defaults.scss'

body, html
  background: $bg-color
  font-family: "PingFang SC"

</style>
