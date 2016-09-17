<template>
  <content class="personal-info">
    <div class="team-image"
         :style="{
          backgroundImage : `url(${projectPictureUrl})`
          }"
    ></div>

    <p class="leftbar-title"
       v-text="teamName"
    ></p>
    <div class="line"></div>
    <div
      class="info"
      v-for="p in team"
    >
      <div class="person-image pull-left"
           :style="{
            backgroundImage :`url(${p.profilePictureUrl})`
            }"
      ></div>
      <div class="pull-left">
        <p
          class="title"
          v-text="p.title"
        ></p>
        <p
          class="name"
          v-text="p.name"
        ></p>
      </div>
    </div>

    <p class="leftbar-title">
      奖项
    </p>
    <div class="line"></div>
    <div
      class="award-item"
      v-for="p in awards"
    >
      <label-item
        :title="p.title"
        icon="glass"
        theme="peach">
      </label-item>
      <img src="{{p.sponsorImageUrl}}">
    </div>
  </content>
  <content class="project-info">
    <div class="info">
      <p class="title" v-text="projectName">
      </p>
      <p class="subtitle" v-text="hackathonName">
      </p>
      <div class="project-tags">
          <label-item
            v-for="t in tags"
            :icon="t.icon"
            :title="t.title"
            theme="aqua-blue">
          </label-item>
      </div>
    </div>
    <div class="action">
      <action-button title="DEMO"></action-button>
    </div>
  </content>
  <content class="project-body">
    <panel
      title="详情">
      <p>放屁</p>
    </panel>
    <panel
      title="预览图">
      <img src="https://placeholdit.imgix.net/~text?txtsize=100&txt=420&w=800&h=300">
    </panel>
  </content>
</template>

<script>
import Panel from "../components/panel.vue"
import LabelItem from "../components/label.vue"
import ActionButton from "../components/action-btn.vue"

export default {
  components : {
    Panel,
    LabelItem,
    ActionButton
  },
  data : () => {
    return {
      projectName: '基于 Leap Motion 的多人打架游戏',
      hackathonName: '2016 年群岛峰会',
      projectPictureUrl : 'https://placeholdit.imgix.net/~text?txtsize=100&txt=420&w=300&h=300',
      teamName : 'super awesome team',
      team : [{
        name : '林鸿',
        title : '队长',
        username : 'pvb',
        email : 'plantvsbird@gmail.com',
        profilePictureUrl : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=H&w=100&h=100'
      }, {
        name : '大仙林',
        title : '队长',
        username : 'pvb',
        email : 'plantvsbird@gmail.com',
        profilePictureUrl : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=H&w=100&h=100'
      }, {
        name : '林鸿',
        title : '队长',
        username : 'pvb',
        email : 'plantvsbird@gmail.com',
        profilePictureUrl : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=H&w=100&h=100'
      }],
      tags: [{
        title: '游戏'
      },{
        title: 'Leap Motion'
      }],
      awards: [{
        title: '一等奖',
        sponsorImageUrl : 'http://www.huawei.com/Assets/CBG/img/logo_new.png'
      }, {
        title: '最佳视觉奖',
        sponsorImageUrl : 'http://www.huawei.com/Assets/CBG/img/logo_new.png'
      }, ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../styles/defaults.scss'

.personal-info
  width: percentage(80 / 530)
  float: left

  color: $project-info-text-color
  & > *
    width: 100%

  .team-image
    display: block
    padding-bottom: 100%
    background-repeat: no-repeat
    background-size: 100% 100%

  .line
    height: 1.5px
    border: solid .5px $project-divider-color

  .leftbar-title
    display: block
    margin-top: 13px

    font-size: zoom(12px)
    color: $project-name-color
    text-align: left

  .info
    float: left
    clear: left
    margin: zoom(5.5px) auto
    font-size: zoom(7px)
    color: $project-info-text-color 

    .person-image
      width: percentage(35 / 80)
      display: block
      padding-bottom: percentage(35 / 80)
      background-repeat: no-repeat
      background-size: 100% 100%
      border-radius: 50%

    .title
      display: block
      float: left
      clear: left
      margin-top: 4.5px
      margin-left: 10px
      margin-bottom: 1.5px

      font-size: zoom(6px)
      color: $project-info-title-color

    .name
      display: block
      float: left
      clear: left
      margin-left: 10px

      font-size: zoom(8px)
      text-align: left
      color: $project-info-name-color

  .award-item
    margin-top: zoom(10.5px);
    overflow: hidden;

    & > *
      float: left
      clear: left
    img
      margin-top: 5.5px
      width: 100%

.project-body, 
.project-info
  display: flex
  width: percentage(430 / 530)
  float: right

.project-info
  .info
    flex-shrink: 0
    width: percentage(304 / 429)
  .action
    flex-shrink: 0
    width: percentage(125 / 429)

    padding-top: zoom(25px)

  .title
    @include title(15px)
    margin: 0px

  .subtitle
    @include subtitle(10px)
    margin-top: 2.5px

.project-body
  display: column
  flex-flow: flex-start
  flex-wrap: wrap
  padding-top: 15px

  & > *
    flex-shrink: 0
</style>