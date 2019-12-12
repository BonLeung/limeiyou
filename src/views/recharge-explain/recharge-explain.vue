<template>
  <div>
    <navbar title="充值说明" />
    <div class="content">
      <cube-scroll>
        <p>1、充值方式：支持微信、支付宝、网银和人工充值  </p>
        <p>2、充值完成后及时核对账户余额，若有差错及时联系客服      时联系客服   </p>
        <p>3、最低充值金额100元人民币 </p>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'recharge-explain',
  methods: {
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .content{
    text-align: left;
    margin-left:20px;
    margin-right:20px;
    background: #fff;
    p{
      font-size:12px;
      font-family:PingFang-SC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      margin-top:21px
    }
  }
</style>
