<template>
  <div class="body">
    <navbar title="我的钱包" />
    <div class="content">
      <cube-scroll>
            <div class="wallet-type">
              <div class="wallet-top">
                <div class="wallet_head">
                  <img src="../../common/image/test/avatar.png" alt="" class="head_pic">
                </div>
                <div class="wallet-right">
                  <p class="balance">账户余额：</p>
                  <p class="price">￥500</p>
                </div>
              </div>
              <div class="wallet-bottom">
                  <div class="wallet-left" @click="toWithDrawal">
                    <span class="tixian">提现</span>
                  </div>
                  <div class="line"></div>
                  <div class="wallet-left" @click="toRecharge">
                    <span>充值</span>
                  </div>
              </div>
            </div>
            <ul class="nav-list">
                <li class="nav-item" @click="toBalance">
                    <span class="name">余额明细</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
            </ul>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'my-wallet',
  methods: {
    toInfo() {
      this.$router.push('/personalInfo')
    },
    security() {
      this.$router.push('/install-security')
    },
    toWithDrawal() {
      this.$router.push('/withdrawal')
    },
    toRecharge() {
      this.$router.push('/recharge')
    },
    toBalance() {
      this.$router.push('/balance-detail')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.body{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.navbar{
  &::after{
    background-color: #fff;
  }
}
  .content{
    text-align: left;
    background: #fff;
    .wallet-type{
      width:345px;
      height:160px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 7.5px 0px rgba(169,169,169,0.3);
      border-radius:2.5px;
      margin:10px 16px;
      display:flex;
      flex-direction:column;
      .wallet-top{
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-bottom:22px;
        border-bottom:0.5px solid #EDEDED;
        .wallet_head{
          width:70.5px;
          height:71px;
          background:rgba(255,255,255,1);
          border-radius:50%;
          margin-top:14px;
          margin-left:9.5px;
          .head_pic{
          width:70.5px;
          height:71px;
          }
        }
        .wallet-right{
          margin-left:18px;
          .balance{
            font-size:14px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
          .price{
            margin-top:26.5px;
            font-size:15px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
        }
      }
      .wallet-bottom{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .wallet-left{
          width:130px;
          display:flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          span{
          margin-top:10px;
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          }
        }
        .line{
          width:1px;
          height:35px;
          background:rgba(217,217,217,1);
          margin-top:8.5px
        }
      }
    }
    .nav-list{
     .nav-item{
      border-bottom: 0.5px solid #e1e1e1;
      height: 42.5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin:30px 16px;
      .name {
        margin-left:12px;
        font-size:13px;
        color: #333333;
        }
      .icon-right{
        width:6px;
        height:10px;
      }
    }
    }
  }
</style>
