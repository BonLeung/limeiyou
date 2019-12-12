<template>
  <div>
    <navbar title="提现说明" />
    <div class="content">
      <cube-scroll>
        <p>1、最低金额：账户余额可以申请提现，提现最低金额≥100元 </p>
        <p>2、提现方式：微信、支付宝、银行卡均可申请提现  </p>
        <p>3、手续费：提现时扣除手续费10%   </p>
        <p>4、到账时间：即时到账 </p>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'withdrawal-explain',
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
