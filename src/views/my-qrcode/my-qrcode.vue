<template>
  <div>
    <navbar title="我的二维码">
      <div slot="right">
        <img class="icon" src="../../common/image/me/分享(5)@2x.png" alt="" style="width:17px;height:17.5px">
      </div>
    </navbar>
    <div class="content">
      <cube-scroll ref="scroll">
         <div class="user_head">
            <img src="../../common/image/test/avatar.png" alt="" class="head_pic">
         </div>
         <p class="user_card">Carolyn Meyer的名片</p>
         <div class="user_code">
           <img src="../../common/image/test/avatar.png" alt="" class="code-pic">
         </div>
         <p class="referral">我的推荐码：
             <span class="num">123456</span>
           </p>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'my-qrcode',
  mounted() {

  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .content{
      display: flex;
      justify-content: center;
    .user_head{
      width:105px;
      height:105px;
      background:#EBEBEB;
      border-radius:50%;
      margin:34px auto;
      .head_pic{
        width:105px;
        height:105px;
      }
    }
    .user_card{
      font-size:14px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(51,51,51,1);
      margin-top:31.5px;
      text-align: center
    }
    .user_code{
      width:175px;
      height:175px;
      margin-top:21px;
      border:1px solid #eee;
      margin-left:auto;
      margin-right:auto;
      .code-pic{
        width:175px;
        height:175px;
      }
    }
    .referral{
        text-align: center;
        margin-top:17.5px;
        font-size:14px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
        .num{
          color:#F64952
        }
      }
  }
</style>
