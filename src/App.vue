<template>
  <div id="app">
    <nav class="navbar navbar-default hackx">
      <div class="container">
        <div class="navbar-header">
          <a class="logo" href="#">
            <place-holder
              width="80"
              height="50"
              text="hackx"
            >
            </place-holder>
          </a>
        </div>
        <ul class="nav navbar-nav pull-right">
          <li>
            <a href="../getting-started/">
              创客马拉松
            </a>
          </li>
          <li>
            <a href="../getting-started/">
              开放职位
            </a>
          </li>
          <li>
            <a href="">
              <i class="glyphicon glyphicon-user">
              </i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
    </div>
  </div>
</template>

<script>

import PlaceHolder from "./components/placeholder.vue"
export default {
  components: {
    PlaceHolder
  }
}
</script>

<style lang="sass">
@import './styles/defaults.scss'

body
  background: $bg-color

nav.navbar.hackx
  background: $theme-color

nav.navbar.hackx > *
  overflow: hidden

nav.navbar.hackx ul.navbar-nav a
  color: white
  padding: 15px 25px
  font-size: .9em
  &:hover
    color: white
    background: darken($theme-color, 5%)

</style>
