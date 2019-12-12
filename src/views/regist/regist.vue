<template>
  <div class="login">

   <div class="login-btn">
     <div class="login-left"> 登录</div>
     <div class="login-right">注册</div>
   </div>

   <div class="form">
     <div class="form-item">
       <img src="../../common/image/login/icom-phone.png" alt="">
       <input type="text" placeholder="请输入手机号码">
     </div>

      <div class="code-item">
        <div class="code-warpper">
          <img src="../../common/image/login/icom-Password.png" alt="">
          <input type="text" placeholder="请输入验证码">
        </div>
        <span class="form-massge">获取验证码</span>
      </div>

     <div class="form-item">
       <img src="../../common/image/login/icom-Password.png" alt="">
       <input type="password" placeholder="请输入密码">
       <img class="icon-eye" src="../../common/image/login/icom-Show.png" alt="">
     </div>

     <div class="form-item">
       <img src="../../common/image/login/icom-Password.png" alt="">
       <input type="password" placeholder="请再次输入密码">
       <img class="icon-eye" src="../../common/image/login/icom-Show.png" alt="">
     </div>

     <div class="form-item">
       <img src="../../common/image/login/icom-phone.png" alt="">
       <input type="text" placeholder="引荐人手机号码（无引荐人填123）">
     </div>

      <div class="form-item item">
       <img src="../../common/image/regist/icon-addr.png" alt="">
       <input type="text" placeholder="选择详细地址">
     </div>

     <div class="form-buttom">
       <span class="regist">注册</span>
     </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'login'
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
    .login-right{
      width: 108px;
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
    .login-left{
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
    height: 470px;
    background:rgba(255,255,255,1);
    border-radius: 7.5px;
    position: relative;
    margin-bottom: 40px;
   .form-item{
      display: flex;
      align-items: center;
      height: 70px;
      line-height: 70px;
      font-size: 13px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(43,41,41,.5);
      position: relative;
      &::after{
        content: '';
        width: 280px;
        border-bottom: 1px solid rgba(0,0,0,.2);
        position: absolute;
        bottom: 0;
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
    .item{
      &::after{
        border-bottom: none;
      }
    }
    .code-item{
     display: flex;
     align-items: center;
     height: 70px;
      .code-warpper{
        flex: 1;
        display: flex;
        align-items: center;
        position: relative;
      &::after{
          content: '';
          width: 280px;
          border-bottom: 1px solid rgba(0,0,0,.2);
          position: absolute;
          bottom: -20px;
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
          font-size: 14px;
          font-weight: 400;
          color: #333;
          outline: none;
          &::placeholder {
            color: rgba(43,41,41,.5);
          }
        }
      }
      .form-massge{
        margin-right: 4px;
        min-width: 60px;
        padding: 0 6px;
        height: 22.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(246,73,82,1);
        border-radius: 2.5px;
        font-size: 10px;
        font-weight: 400;
        color: rgba(246,73,82,1);
      }
    }
  }
  .form-buttom{
    display: flex;
    justify-content: center;
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
    .regist{
     width: 36px;
      height: 16px;
      font-size: 16.5px;
      font-weight: 500;
      color:rgba(255,255,255,1);
    }
  }
}
</style>
