<template>
  <div>
    <navbar title="余额明细" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item">
                  <div class="wrap">
                    <span class="name">余额充值 </span>
                    <span class="num">+￥500</span>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="wrap">
                    <span class="name">提现</span>
                    <span class="num">+￥500</span>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="wrap">
                    <span class="name">商品消费</span>
                    <span class="num">+￥500</span>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="wrap">
                    <span class="name">分享奖励</span>
                    <span class="num">+￥500</span>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="wrap">
                    <span class="name">利美福利</span>
                    <span class="num">+￥500</span>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="wrap">
                    <span class="name">商品退款</span>
                    <span class="num">+￥500</span>
                  </div>
                </li>
            </ul>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'balance-detail',
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
    padding: 0 16px;
    margin:0 10px 10px 10px 10px;
    background: #fff;
    .nav-item{
      border-bottom: 0.5px solid #e1e1e1;
      padding:15px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .wrap{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .time{
        font-size: 12px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color:rgba(153,153,153,1);
        line-height: 18px;
      }
        .name {
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 18px;
        }
        .num{
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
      }
  }
</style>
