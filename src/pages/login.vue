<template>
  <content class="login-form">
    <place-holder
      :text="'hackxlogo'"
      :width="170"
      :height="50"
    >
    </place-holder>
    <form class="hackx">
      <div class="form-group">
        <label for="exampleInputEmail1">邮箱</label>
        <input type="email" class="form-control"
               placeholder="example@gmail.com">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">用户名</label>
        <input type="password" class="form-control"
               placeholder="Password">
      </div>
      <action-button
        title="登录"
        :style="{
          height: '30px',
        }"
      >
      </action-button>
      <p class="to-login">
        尚未注册？由此<a href="">注册</a>
      </p>
    </form>
  </content>
</template>

<script>
import PlaceHolder from "../components/placeholder.vue"
import ActionButton from "../components/action-btn.vue"
export default {
  components : {
    PlaceHolder,
    ActionButton
  }
}
</script>

<style lang="sass">
@import '../styles/defaults.scss'

body.layout-auth
  height: 100vh
  overflow-y: auto
  background: $theme-color
  font-family: "PingFang SC"
  color: white
</style>
<style lang="sass" scoped>
@import '../styles/defaults.scss'

.login-form
  display: block
  width: percentage(170 / 530)
  margin-left: percentage(180 / 530)
  margin-top: 40px
  overflow: hidden

form.hackx
  padding-top: 22.5px

  label
    font-size: zoom(8px)
    font-weight: 500
  input
    padding: zoom(9.5px)
  .form-control,
  .form-control:focus
    box-shadow: none
    border-color: transparent
    font-size: zoom(8px)
    color: $form-placeholder-color
  .form-group
    margin-top: 13px

.to-login
  text-align: center
  padding-top: 13.5px
  font-size: zoom(7px)
  font-weight: 500
  a
    color: $peach
</style>