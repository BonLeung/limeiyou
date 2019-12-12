<template>
  <div class="pay-success">
    <navbar title="支付成功" />
    <div class="content">
      <cube-scroll>
        <div class="payinfo">
          <div class="amount">￥98.00</div>
          <div class="integral">获得了（50个）利美积分</div>
        </div>
        <div class="nav-wrap">
          <router-link tag="div" to="/order-detail" class="nav-item">
            <div class="name">查看订单</div>
          </router-link>
          <router-link tag="div" to="/" class="nav-item">
            <div class="name">去首页</div>
            <img src="../../common/image/public/icon-right.png" alt="" class="icon-right">
          </router-link>
        </div>
        <div class="recommend-wrap">
          <div class="title-wrap">
            <div class="line"></div>
            <div class="title">猜你喜欢</div>
            <div class="line"></div>
          </div>
          <ul class="recommend-list">
            <goods-item
              v-for="(item, index) in 5"
              :key="index"
              class="recommend-item"/>
          </ul>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'
import GoodsItem from '../../components/goods-item-horiz/goods-item-horiz'

export default {
  name: 'pay-select',
  components: {
    Navbar,
    GoodsItem
  }
}
</script>

<style lang="scss" scoped>
.pay-success {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    .payinfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      .amount {
        margin-top: 15px;
        font-size: 21px;
        color: #F64952;
      }
      .integral {
        margin-top: 12px;
        font-size: 13px;
        color: #F64952;
      }
    }
    .nav-wrap {
      position: relative;
      margin-top: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 50%;
        height: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 1px;
        background-color: #EDEDED;
        transform: scaleX(.5);
      }
      .nav-item {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(1) {
          margin-right: 40px;
        }
        &:nth-child(2) {
          margin-left: 40px;
        }
        .name {
          font-size: 14px;
          color: #333;
        }
        .icon-right {
          margin-left: 6px;
          width: 6px;
          height: 10px;
        }
      }
    }
    .recommend-wrap {
      margin-top: 15px;
      .title-wrap {
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        .line {
          width: 30px;
          height: 1px;
          background-color: #333;
          transform: scaleY(.5);
        }
        .title {
          padding: 0 32px;
          font-size: 13px;
          font-weight: 500;
          color: #333;
        }
      }
      .recommend-list {
        margin-top: 15px;
        padding: 0 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .recommend-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
