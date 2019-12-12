<template>
  <div class="shops">
    <navbar title="店铺" />
    <div class="content">
      <cube-scroll>
        <ul class="shop-list">
        <shop-item
            v-for="(item, index) in shops"
            :key="index"
            :shop="item"
            :showHots="false"
            class="shop-item" />
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'
import ShopItem from '../../components/shop-item/shop-item'

export default {
  name: 'shop-list',
  data() {
    return {
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
      }, {
        id: 3,
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
      }, {
        id: 4,
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
  components: {
    Navbar,
    ShopItem
  }
}
</script>

<style lang="scss" scoped>
.shops {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f4f4f4;
    .shop-list {
      .shop-item {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
