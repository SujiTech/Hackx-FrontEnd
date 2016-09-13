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
    
    <panel
      note="2016年复旦黑客马拉松"
      title="基于 Leap Motion 的多人打架"
      subtitle=""
      desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
      :tags="[{title : '游戏', icon: 'thumbs-up'},{title : '上海', icon: 'heart'}]"
    >
    </panel>
    <panel
      note="2016年群岛峰会"
      title="基于多人打架的 Leap Motion"
      subtitle=""
      desc="山川壯麗，物產豐隆，炎黃世胄，東亞稱雄。毋自暴自棄，毋故步自封，光我民族，促進大同。創業維艱，緬懷諸先烈；守成不易，莫徒務近功。同心同德，貫徹始終，青天白日滿地紅。同心同德，貫徹始終，青天白日滿地紅。"
      :tags="[{title : '游戏', icon: 'thumbs-up'},{title : '上海', icon: 'heart'}]"
    >
    </panel>
    <panel
      note="2016年北大黑客马拉松"
      title="基于 Leap Motion 的打球"
      subtitle=""
      desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
      :tags="[{title : '游戏', icon: 'thumbs-up'},{title : '上海', icon: 'heart'}]"
    >
    </panel>
    <panel
      note="2016年群岛峰会"
      title="基于多人打架的 Leap Motion"
      subtitle=""
      desc="山川壯麗，物產豐隆，炎黃世胄，東亞稱雄。毋自暴自棄，毋故步自封，光我民族，促進大同。創業維艱，緬懷諸先烈；守成不易，莫徒務近功。同心同德，貫徹始終，青天白日滿地紅。同心同德，貫徹始終，青天白日滿地紅。"
      :tags="[{title : '游戏', icon: 'thumbs-up'},{title : '上海', icon: 'heart'}]"
    >
    </panel>
    <panel
      note="2016年北大黑客马拉松"
      title="基于 Leap Motion 的打球"
      subtitle=""
      desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
      :tags="[{title : '游戏', icon: 'thumbs-up'},{title : '上海', icon: 'heart'}]"
    >
    </panel>
  </content>
</template>

<script>
import Panel from "../components/project-item.vue"

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
    width: 100%

  .head-image
    display: block
    padding-bottom: 100%
    background-repeat: no-repeat
    background-size: 100% 100%
    border-radius: 50%

  .name
    display: block
    margin-top: 13px

    font-size: zoom(12px)
    color: $profile-name-color
    text-align: center

  .line
    height: 1.5px
    border: solid .5px $profile-divider-color

  .info
    display: flex
    flex-wrap: no-wrap
    margin: zoom(5.5px) auto
    clear: left
    font-size: zoom(7px)

    i
      font-size: zoom(8px)

    div.text
      width: 100px // hack
      flex-grow: 1
      flex-shrink: 0

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