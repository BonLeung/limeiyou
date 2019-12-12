<template>
  <div class="login">

   <div class="goBack-wrapper">
       <span class="text">重置密码</span>
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
  font-family:PingFangSC-Regular;
  .goBack-wrapper{
      font-size: 16px;
      position: absolute;
      top: 20px;
      left: 34px;
      color:rgba(255,255,255,1);
      &::before{
        content: '';
        width: 8px;
        height: 8px;
        display: block;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        transform: rotate(-45deg);
        position: absolute;
        top: 50%;
        left: -15px;
        margin-top: -4px;
      }
  }
  .form{
    padding: 0 20px 20px;
    width: 282px;
    height: 260px;
    background:rgba(255,255,255,1);
    border-radius: 7.5px;
    position: relative;
    .form-item{
      margin-top: 10px;
      display: flex;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid rgba(0,0,0,.2);
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
    .code-item{
      display: flex;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid rgba(0,0,0,.2);
      .code-warpper{
        flex: 1;
        display: flex;
        align-items: center;
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
      .form-massge{
        width: 60px;
        height: 28px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        padding: 0px 5px;
        border: 1px solid rgba(246,73,82,1);
        border-radius: 2.5px;
        font-size: 10px;
        font-weight: 400;
        color: rgba(246,73,82,1);
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
    .regist{
      width: 36px;
      height: 16.5px;
      font-size: 16px;
      font-weight: 500;
      color:rgba(255,255,255,1);
    }
  }

}
</style>
