<template>
  <div class="action-button hackx">
    <span v-text="title"></span>
  </div>
</template>
<script>
  export default {
    props : ["title"]
  }
</script>
<style lang="sass" scoped>
  @import "../styles/defaults.scss"
  .action-button.hackx
    display: table
    width: 100%
    & > span
      display: table-cell
      vertical-align: middle

    height: zoom(30px)
    text-align: center
    vertical-align: middle

    background-color: $action-color
    color: white
    border-radius: zoom(3.5px)

    font-size: zoom(10px)
    font-weight: 400
    letter-spacing: zoom(4.2px)
    text-indent: zoom(4.2px)

    user-select: none
    cursor: pointer
</style>