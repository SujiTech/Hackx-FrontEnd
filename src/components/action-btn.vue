<template>
  <a class="action-button hackx" href="">
    <span v-text="title"></span>
  </a>
</template>
<script>
  export default {
    props : ["title"]
  }
</script>
<style lang="sass" scoped>
  @import "../styles/defaults.scss"
  .action-button.hackx
    z-index: $panel-btn-z-index
    display: table
    width: 100%
    & > span
      padding-top: 8px
      padding-bottom: 8px
      display: table-cell
      vertical-align: middle
      cursor: pointer

    height: zoom(30px)
    text-align: center
    vertical-align: middle

    background-color: $action-color
    color: white
    border-radius: 3.5px
    box-shadow: $action-btn-shadow

    font-size: zoom(10px)
    font-weight: 400
    letter-spacing: zoom(4.2px)
    text-indent: zoom(4.2px)

    user-select: none
    &:hover, &:active, &:visited, &:link
      text-decoration: none
</style>