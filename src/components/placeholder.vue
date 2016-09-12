<template>
  <div>
    <img src="https://placeholdit.imgix.net/~text?txtsize=20&txt={{text}}&w={{width}}&h={{height}}">
  </div>
</template>

<script>

export default {
  props: ['width', 'height', 'text']
}
</script>

<style lang="sass" scoped>
div
  width: 100%
  height: 100%
</style>
