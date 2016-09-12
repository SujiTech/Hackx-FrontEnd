<template>
  <div class="panel hackx">
    <div class="panel-image hackx">
      <place-holder
        width="130"
        height="130"
        text="hackathon"
      >
      </place-holder>
    </div>
    <div class="panel-content hackx">
      <div class="panel-title hackx">
        <slot name="title"></slot>
      </div>
      <div class="panel-subtitle hackx">
        <slot name="subtitle"></slot>
      </div>
      <div class="panel-content-body hackx">
        <label-item icon="heart">上海</label-item><label-item>aajoisjif</label-item>
      </div>
    </div>
    <div class="panel-action hackx">
    asdasd
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "../styles/defaults.scss"

.panel.hackx
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between

  overflow: hidden
  background: $panel-background-color
  border: solid .5px $panel-border-color
  border-radius: 0px

  padding: 9.5px 9.5px

.panel-image.hackx
  height: zoom(70px)
  width: zoom(70px)
  user-select: none

.panel-content
  display: flex
  flex-direction: column
  font-size: 0

  margin-left: zoom(10px)
  flex-grow: 1

.panel-title
  font-size: zoom(12px)
  font-weight: 600
  color: $title-color

.panel-subtitle
  font-size: zoom(10px)
  font-weight: bold
  color: $subtitle-color

.panel-content-body
  margin-top: 2px

.panel-action
  align-self: center
  flex-shrink: 0

  width: 115px

</style>

<script>
import PlaceHolder from "./placeholder.vue"
import LabelItem from "./label.vue"

export default {
  components : {
    PlaceHolder, LabelItem
  }
}
</script>