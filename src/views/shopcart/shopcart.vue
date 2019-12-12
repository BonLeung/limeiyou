<template>
  <div class="shopcart">
    <navbar title="购物车(200)">
      <div slot="right" class="manage extends-click">
        <span class="text">管理</span>
      </div>
    </navbar>
    <div class="content">
      <cube-scroll>
        <div class="goods-wrap">
          <ul class="shopcart-list">
            <template v-for="(item, index) in shopcartGoods">
              <shopcart-item :key="index" />
            </template>
          </ul>
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
    <div class="settlement-bar">
      <div class="left">
        <div class="select-all">
          <radio />
          <div class="text">全选</div>
        </div>
        <div class="statistic">
          <div class="total-wrap">
            <div class="title">合计:</div>
            <div class="total">
              <span class="unit">￥</span>
              <span class="num">0</span>
            </div>
          </div>
          <div class="integral">合计利美积分（888）个</div>
        </div>
      </div>
      <div class="right">
        <div class="settlement-btn" @click="settle()">
          <p class="text">结算(0)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'
import GoodsItem from '../../components/goods-item-horiz/goods-item-horiz'
import ShopcartItem from '../../components/shopcart-item/shopcart-item'
import Radio from '../../components/radio/radio'

const shopcartGoods = [{
  id: 1,
  name: '产品名称产品名称产品名称',
  thumbnail: require('../../common/image/test/goods-img.png'),
  price: 848,
  integral: 888,
  attrs: 'm',
  num: 1
}, {
  id: 2,
  name: '产品名称产品名称产品名称',
  thumbnail: require('../../common/image/test/goods-img.png'),
  price: 848,
  integral: 888,
  attrs: 'm',
  num: 1
}, {
  id: 3,
  name: '产品名称产品名称产品名称',
  thumbnail: require('../../common/image/test/goods-img.png'),
  price: 848,
  integral: 888,
  attrs: 'm',
  num: 1
}]

export default {
  name: 'shopcart',
  data() {
    return {
      shopcartGoods: shopcartGoods
    }
  },
  methods: {
    settle() {
      this.$router.push('/confirm-order')
    }
  },
  components: {
    Navbar,
    GoodsItem,
    ShopcartItem,
    Radio
  }
}
</script>

<style lang="scss" scoped>
.shopcart {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .manage {
    display: flex;
    .text {
      font-size: 13px;
      color: #333;
    }
  }
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 50px;
    left: 0;
    .goods-wrap {
      background-color: #f4f4f4;
      overflow: hidden;
      .goods-list {
        .shopcart-item {
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0;
          }
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
  .settlement-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    .left {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
       &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #ededed;
        transform-origin: 0%;
      }
      .select-all {
        display: flex;
        align-items: center;
        .text {
          margin-left: 8px;
          font-size: 14px;
          color: #aaa;
        }
      }
      .statistic {
        display: flex;
        flex-direction: column;
        .total-wrap {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #333;
          .total {
            .unit {
              font-size: 11px;
              color: #F64952;
            }
            .num {
              font-size: 14px;
              color: #F64952;
            }
          }
        }
        .integral {
          margin-top: 6px;
          font-size: 10px;
          color: #999;
        }
      }
    }
    .right {
      flex: 0 0 90px;
      .settlement-btn {
        height: 50px;
        background-color: #F64952;
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
        }
      }
    }
  }
}
</style>
