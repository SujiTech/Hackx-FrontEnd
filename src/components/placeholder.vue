<template>
  <div>
    <img src="https://placeholdit.imgix.net/~text?txtsize=20&txt={{text}}&w={{width}}&h={{height}}&bg={{bg()}}&txtclr=ffffff">
  </div>
</template>

<script>

export default {
  props: ['width', 'height', 'text'],
  methods: {
    bg : () => {
      const options = ['8ffd78', '27ecfd', 'fb9505', '000000', 'f85bc2', '2153ea', 'fb2b69', '1d77ef', '55efcb', 'ffdc38', 'ff8c00', '12a7eb', '5ad427', 'c86edf', 'ff5e3a', 'ff9500', 'ffdb4c', '87fc70', '52edc7', '1ad6fd', 'c644fc', 'ef4db6', '4a4a4a']
      return options[Math.floor(Math.random() * options.length)]
    }
  }
}

</script>

<style lang="sass" scoped>
div
  width: 100%
  height: 100%
</style>