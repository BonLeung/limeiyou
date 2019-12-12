<template>
  <div class="login">

   <div class="login-btn">
     <div class="login-left"> 登录</div>
     <div class="login-right"><router-link class="btn" to="/regist">注册</router-link></div>
   </div>

   <div class="form">
     <div class="form-item">
       <img src="../../common/image/login/icom-phone.png" alt="">
       <input type="text" placeholder="请输入登录手机号码">
     </div>

     <div class="form-item">
       <img src="../../common/image/login/icom-Password.png" alt="">
       <input type="password" placeholder="请输入登录密码">
       <img class="icon-eye" src="../../common/image/login/icom-Show.png" alt="">
     </div>

     <div class="form-buttom" @click="login()">
       <span>登录</span>
     </div>
   </div>

   <div class="forgetpassword"><router-link class="btn" to="/resetpassword">忘记密码？</router-link></div>

   <div class="login-or">
     <div class="or-line">Or</div>
   </div>

   <div>
     <div class="icon-weixin">
       <img src="../../common/image/login/weixin.png" alt="">
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login() {
      this.$root.eventBus.$emit('login')
      this.$router.push('/me')
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  position: fixed;
  background-image: url('../../common/image/login/bg.png');
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: PingFangSC-Regular;
  .login-btn{
    font-size: 15px;
    text-align: center;
    line-height: 30px;
    padding: 4px;
    width: 216.5px;
    height: 36.5px;
    background: rgba(0, 0, 0, .15);
    border-radius: 19px;
    display: flex;
    align-items: center;
    color: rgba(255,255,255,1);
    div{
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    .login-left{
      width: 108.5px;
      height: 30px;
      background: rgba(255,255,255,1);
      box-shadow: 0px 24px 103px 0px rgba(160,24,102,0.57);
      border-radius: 15px;
      color:rgba(51,51,51,1);
      font-size: 15px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color:rgba(51,51,51,1);
    }
    .btn{
      font-size: 15px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color:rgba(255,255,255,1);
    }
  }
  .form{
    margin-top: 20px;
    padding: 0 20px;
    width: 282px;
    height: 180px;
    background:rgba(255,255,255,1);
    border-radius: 7.5px;
    position: relative;
    margin-bottom: 40px;
   .form-item{
     display: flex;
     align-items: center;
     height: 70px;
     line-height: 70px;
     &:first-child{
        border-bottom: 1px solid rgba(0,0,0,.2);
     }
      img{
        flex: 0 0 16px;
        width: 20px;
        height: 20px;
        &.icon-eye {
          width: 10px;
          height: 8px;
        }
      }
      input{
        padding-left: 15px;
        flex: 1;
        height: 20px;
        font-size: 13px;
        font-weight: 400;
        color: #333;
        outline: none;
        &::placeholder {
          color: rgba(43,41,41,.5);
        }
      }
    }
  }
  .form-buttom{
    width: 234px;
    height: 50px;
    line-height: 50px;
    background: linear-gradient(110deg,rgba(246,73,82,1) 0%,rgba(251,141,102,1) 100%);
    box-shadow: 1px 6px 38px 0px rgba(0, 0, 0, 0.18);
    border-radius: 7.5px;
    text-align: center;
    position: absolute;
    left: 40px;
    bottom: -24px;
    span{
      width: 36px;
      height: 16px;
      font-size: 16.5px;
      font-weight: 500;
      color:rgba(255,255,255,1);
    }
  }
  .forgetpassword{
    height: 14px;
    font-size: 12.5px;
    font-weight: 400;
    text-decoration: underline;
    margin-bottom: 60px;
    .btn{
      color:rgba(255,255,255,1);
    }
  }
  .login-or{
    margin-bottom: 20px;
    .or-line{
      font-size: 12.5px;
      font-weight: 500;
      color:rgba(255,255,255,1);
      position: relative;
      &::before{
      content: '';
      width: 98px;
      height: 2px;
      display: block;
      background: linear-gradient(90deg,rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);
      border-radius: 2px;
      position: absolute;
      top: 50%;
      // transform: translateY(-50%);
      left: 25px;
      }
      &::after{
        content: '';
        width: 98px;
        height: 2px;
        display: block;
        background: linear-gradient(90deg,rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);
        border-radius: 2px;
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        transform: rotate(180deg);
      }
    }
  }
  .icon-weixin{
    width: 45px;
    height: 45px;
    background:rgba(255,255,255,1);
    border-radius: 50%;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      display: block;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
