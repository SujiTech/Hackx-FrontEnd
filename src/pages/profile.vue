<template>
  <content class="personal-info">
    <div class="head-image"
         :style="{
          backgroundImage : `url(${profilePictureUrl})`
          }"
    ></div>
    <p class="name" v-text="name"></p>
    <div class="line"></div>
    <div class="info">
      <i class="glyphicon glyphicon-lock"></i>
      <div class="text">
        <p v-text="school"></p>
      </div>
    </div>
    <div class="info">
      <i class="glyphicon glyphicon-envelope"></i>
      <div class="text">
        <p v-text="email"></p>
      </div>
    </div>
    <div class="info">
      <i class="glyphicon glyphicon-pushpin"></i>
      <div class="text">
        <p v-text="location"></p>
      </div>
    </div>
  </content>
  <content class="past-projects">
    
  </content>
</template>

<script>
import Panel from "../components/hackathon-item.vue"

export default {
  components : {
    Panel
  },
  data : () => {
    return {
      profilePictureUrl : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=HEAD&w=100&h=100',
      name : '林大仙',
      school : '特别帅大学特别帅分校名字超长校区',
      email : 'superlongemailaddress@gmail.com',
      location : 'Palm Island, Aruba',
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../styles/defaults.scss'

.personal-info
  width: percentage(80 / 530)
  float: left

  color: $profile-text-color
  & > *
    width: zoom(80px)

  .head-image
    display: block
    height: zoom(80px)
    background-repeat: no-repeat
    background-size: 100% 100%
    border-radius: 50%

  .name
    display: block
    width: zoom(80px)
    margin-top: 13px

    font-size: zoom(12px)
    color: $profile-name-color
    text-align: center

  .line
    height: 1.5px
    border: solid .5px $profile-divider-color

  .info
    display: flex
    flex-wrap: wrap
    margin: zoom(5.5px) auto
    clear: left
    font-size: zoom(7px)

    i
      font-size: zoom(8px)

    div.text
      width: 100px // hack
      flex-grow: 1

      margin-left: zoom(4.5px)
      margin-right: 0
      margin-bottom: 0
      p
        word-wrap: break-word
        margin: 0

.past-projects
  width: percentage(430 / 530)
  float: right



</style>