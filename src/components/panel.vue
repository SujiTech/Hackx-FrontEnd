<template>
  <div class="panel">
    <div class="panel-heading bg-aqua-blue">
      {{ title }}
    </div>
    <div class="panel-body">
      <slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .panel
    border-radius: 3.5px
    border: solid 0.5px #eaeaea
    width: 100%
    overflow: hidden
</style>

<script>
export default {
  props : ['title']
}
</script>