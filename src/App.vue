<template>
  <nav-bar>
  </nav-bar>
  <div id="app">
    <div class="container">
      <index>
      </index>
    </div>
  </div>
</template>

<script>

import PlaceHolder from "./components/placeholder.vue"
import NavBar from "./components/bar.vue"
import Index from "./pages/index.vue"

export default {
  components: {
    PlaceHolder, Index, NavBar
  }
}
</script>

<style lang="sass">
@import './styles/defaults.scss'

body, html
  background: $bg-color
  font-family: "PingFang SC"

</style>
