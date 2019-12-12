<template>
  <div>
    <navbar title="充值" />
    <div class="content">
      <cube-scroll>
         <div class="withdrawal">
           <p class="withdrawal-num">充值金额(元)</p>
           <div class="withdrawal-sign">
             <div class="priceA">
                <span class="price">￥</span>
                <input type="text" class="input-num" placeholder="本次可提现200元">
             </div>
           </div>
         </div>

         <div class="receive-type">
           <p class="title">收款方式</p>
           <ul class="nav-list">
             <li class="nav-item" @click="paybtn(0)">
               <div class="item-one">
                 <img src="../../common/image/me/微信支付@2x.png" alt="" class="weixin-pic">
                 <span class="type-w">微信</span>
               </div>
               <img src="../../common/image/me/图层608拷贝2@2x.png" alt="" class="select-pic" v-if="select == 0">
               <img src="../../common/image/me/矩形7拷贝6@2x.png" alt="" class="select-pic" v-else>
             </li>
             <li class="nav-item" @click="paybtn(1)">
               <div class="item-one">
                 <img src="../../common/image/me/支付宝拷贝@2x.png" alt="" class="weixin-pic">
                 <span class="type-w">支付宝</span>
               </div>
               <img src="../../common/image/me/图层608拷贝2@2x.png" alt="" class="select-pic" v-if="select == 1">
               <img src="../../common/image/me/矩形7拷贝6@2x.png" alt="" class="select-pic" v-else>
             </li>
              <li class="nav-item" @click="paybtn(2)">
               <div class="item-one">
                 <img src="../../common/image/me/银联@2x.png" alt="" class="weixin-pic">
                 <span class="type-w">银行卡</span>
               </div>
               <img src="../../common/image/me/图层608拷贝2@2x.png" alt="" class="select-pic" v-if="select == 2">
               <img src="../../common/image/me/矩形7拷贝6@2x.png" alt="" class="select-pic" v-else>
             </li>
              <li class="nav-item" style="border-bottom:0" @click="paybtn(3)">
               <div class="item-one">
                 <img src="../../common/image/me/人工服务@2x.png" alt="" class="weixin-pic">
                 <span class="type-w">人工充值</span>
               </div>
               <img src="../../common/image/me/图层608拷贝2@2x.png" alt="" class="select-pic" v-if="select == 3">
               <img src="../../common/image/me/矩形7拷贝6@2x.png" alt="" class="select-pic" v-else>
             </li>
           </ul>
         </div>

         <div class="withdraw-bottom">
           <img src="../../common/image/public/icon-tips.png" alt="" class="explain-pic">
           <span class="explain">提现说明</span>
         </div>

         <div class="signOut">
           <p class="outName">提交申请</p>
        </div>

      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'withdrawal',
  data() {
    return {
      select: ''
    }
  },
  methods: {
    paybtn(id) {
      this.select = id
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .content{
    text-align: left;
    background: #fff;
    .balance{
      width:344px;
      height:67.5px;
      margin:15.5px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 12.5px 0px rgba(169,169,169,0.3);
      border-radius:2.5px;
      display: flex;
      flex-direction: column;
      .balance-word{
        margin-top:15px;
        margin-left:12.5px;
        font-size:14px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
      }
      .balance-num{
        margin-left:12.5px;
        margin-top:17px;
        font-size:10px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(253,85,94,1);
      }
    }
    .withdrawal{
      width:344.5px;
      height:120px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 12.5px 0px rgba(169,169,169,0.3);
      opacity:0.99;
      border-radius:2.5px;
      display: flex;
      flex-direction: column;
      margin:15.5px;
      .withdrawal-num{
        margin-top:20.5px;
        margin-left:13.5px;
        font-size:14px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
      }
      .withdrawal-sign{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-top:39.5px;
          padding-bottom:13.5px;
          margin-left:13.5px;
          margin-right:12.5px;
          border-bottom: 0.5px solid #EDEDED;
          margin-bottom: 20.5px;
          .priceA{
            padding-bottom:13px;
            .price{
              font-size:24px;
              font-family:PingFang-SC-Medium;
              font-weight:500;
              color:rgba(51,51,51,1);
            }
            .input-num{
              font-size:15px;
              font-family:PingFang-SC-Regular;
              font-weight:400;
              outline: none;
            }
          }
          .all{
            font-size:13px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(32,110,254,1);
          }
      }
    }
    .receive-type{
      width:344.5px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 12.5px 0px rgba(169,169,169,0.3);
      border-radius:2.5px;
      margin:10.5px;
      .title{
        padding-top:18px;
        margin-left:15.5px;
        font-size:14px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
      }
      .nav-list{
        margin-top:20px;
      .nav-item{
        border-bottom: 0.5px solid #e1e1e1;
        height: 42.5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left:15.5px;
        margin-right:9px;
        .item-one{
          display: flex;
          align-items: center;
          .weixin-pic{
            width:20px;
            height: 20px;
            margin-right:14px;
          }
          .type-w{
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          }
        }
        .select-pic{
          width:20px;
          height: 20px;
        }
      }
      }
    }
    .withdraw-bottom{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin:15.5px;
      .explain-pic{
        width:15px;
        height:15px;
        margin-right:8.5px;
      }
      .explain{
        font-size:12px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
    .signOut{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      width:300px;
      height: 35px;
      background:rgba(246,73,82,1);
      border-radius:2.5px;
      margin:100px auto;
      text-align: center;
      .outName{
        font-size:14px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
