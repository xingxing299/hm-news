<template>
 <div class="login">
   <div class="close">
     <i class="iconfont iconicon-test"></i>
   </div>
   <div class="logo">
     <i class="iconfont iconnew"></i>
   </div>
   <div class="uesername">
     <hm-input type="text" placeholder="请输入用户名" v-model="username" :rules='/^1\d{4,10}$/' err-msg="输入的用户名格式错误"></hm-input>
   </div>
   <div class="password">
     <hm-input type="password" placeholder="请输入密码" v-model="password" :rules='/^\d{3,12}$/' err-msg='输入的密码格式错误'></hm-input>
   </div>
   <div class="btn">
     <hm-button @click="login">登录</hm-button>
   </div>
 </div>

</template>

<script>
import HmInput from '../components/HmInput'
import HmButton from '../components/HmButton'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  // 局部注册HmInput
  components: {
    HmInput,
    HmButton
  },
  methods: {
    async login () {
      // console.log('登录了吗')
      if (!this.username || !this.password) return
      // 发送ajax请求
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
 .login {
   padding: 20px;
   .close {
    i{
      font-size: 24px;
    }
   }
   .logo{
     text-align: center;
    i{
      font-size: 126px;
      color: #d81e06;
    }
 }
 .btn {
   margin-top: 20px;
 }
}

</style>
