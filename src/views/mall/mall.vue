<template>
  <div class="mall">
    <navbar title="利美商城">
      <div class="shopcart-wrap" slot="right">
        <img class="icon" src="../../common/image/mall/icon-shopcart-d.png" alt="">
      </div>
    </navbar>
    <div class="content">
      <cube-scroll ref="scroll">
        <div class="swiper">
          <cube-slide ref="slide" :data="items" :showDots="false">
            <cube-slide-item v-for="(item, index) in items" :key="index">
              <img :src="item.image" alt="" class="banner">
            </cube-slide-item>
          </cube-slide>
        </div>
        <div class="nav-wrap">
          <div class="nav-item">
            <img src="../../common/image/mall/icon-clothing.png" alt="">
            <div class="name">衣帽</div>
          </div>
          <div class="nav-item">
            <img src="../../common/image/mall/icon-beauty.png" alt="">
            <div class="name">美妆</div>
          </div>
          <div class="nav-item">
            <img src="../../common/image/mall/icon-accessory.png" alt="">
            <div class="name">饰品</div>
          </div>
          <div class="nav-item">
            <img src="../../common/image/mall/icon-all.png" alt="">
            <div class="name">全部分类</div>
          </div>
        </div>
        <div class="shop-wrap">
          <div class="head">
            <h2 class="title">商家推荐</h2>
            <router-link tag="div" to="/shops" class="more">更多></router-link>
          </div>
          <div class="shop-list">
            <shop-item
              v-for="(item, index) in shops"
              :key="index"
              :shop="item"
              :showHots="true"
              class="shop-item-wrap" />
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'
import ShopItem from '../../components/shop-item/shop-item'

export default {
  name: 'mall',
  data() {
    return {
      items: [{
        image: require('../../common/image/test/mall-banner.png')
      }, {
        image: require('../../common/image/test/mall-banner.png')
      }],
      shops: [{
        id: 1,
        name: '店铺名称',
        newNum: 104,
        discountNum: 24,
        goods: [{
          id: 1,
          img: require('../../common/image/test/goods-img-l.png'),
          price: 848,
          oldPrice: 999,
          isDiscount: false
        }, {
          id: 2,
          img: require('../../common/image/test/goods-img-l.png'),
          price: 848,
          oldPrice: 999,
          isDiscount: true
        }, {
          id: 3,
          img: require('../../common/image/test/goods-img-l.png'),
          price: 848,
          oldPrice: 999,
          isDiscount: false
        }],
        hots: [{
          id: 4,
          name: '产品名称产品名称产品名称',
          img: require('../../common/image/test/goods-img.png'),
          price: 848,
          sales: 500,
          integral: 100
        }, {
          id: 5,
          name: '产品名称产品名称产品名称',
          img: require('../../common/image/test/goods-img.png'),
          price: 848,
          sales: 500,
          integral: 100
        }]
      }, {
        id: 2,
        name: '店铺名称',
        newNum: 104,
        discountNum: 24,
        goods: [{
          id: 6,
          img: require('../../common/image/test/goods-img-l.png'),
          price: 848,
          oldPrice: 999,
          isDiscount: false
        }, {
          id: 7,
          img: require('../../common/image/test/goods-img-l.png'),
          price: 848,
          oldPrice: 999,
          isDiscount: true
        }, {
          id: 8,
          img: require('../../common/image/test/goods-img-l.png'),
          price: 848,
          oldPrice: 999,
          isDiscount: false
        }],
        hots: [{
          id: 9,
          name: '产品名称产品名称产品名称',
          img: require('../../common/image/test/goods-img.png'),
          price: 848,
          sales: 500,
          integral: 100
        }, {
          id: 10,
          name: '产品名称产品名称产品名称',
          img: require('../../common/image/test/goods-img.png'),
          price: 848,
          sales: 500,
          integral: 100
        }]
      }]
    }
  },
  mounted() {

  },
  components: {
    Navbar,
    ShopItem
  }
}
</script>

<style lang="scss" scoped>
.mall {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .shopcart-wrap {
    width: 37px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      width: 17px;
      height: 17px;
    }
  }
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f4f4f4;
    .swiper {
      height: 175px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #fff;
      .nav-item {
        flex: 1;
        height: 95px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        .name {
          margin-top: 5px;
          font-size: 12px;
          font-weight: 400;
          color: #333;
        }
      }
    }
    .shop-wrap {
      margin-top: 15px;
      .head {
        height: 35px;
        padding: 0 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        .title {
          flex: 1;
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }
        .more {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          color: #333;
        }
      }
      .shop-list {
        .shop-item-wrap {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
