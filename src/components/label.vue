<template>
  <span class="label hackx"><i v-if="icon" class="glyphicon glyphicon-{{icon}}"></i>{{title}}</span>
</template>

<script>

export default {
  props : ["icon", "title"]
}
</script>

<style lang="sass" scoped>
@import "../styles/defaults.scss"

.label.hackx
  font-size: zoom(7px)
  line-height: zoom(14px)
  font-weight: 200

  background-color: $label-background-color
  color: $label-text-color

  margin-right: .6em
  padding: .2em .8em
  border-radius: 50px

.label.hackx > i
  margin-left: - .3em
  margin-right: .3em
</style>
