<template>
  <div class="shop-detail">
    <div class="head">
      <div class="head-bar">
        <div class="left-item">
          <div
            class="back extends-click"
            @click="() => this.$router.goBack()">
            <img
            class="icon"
            src="../../common/image/public/icon-back-white.png" alt="">
          </div>
        </div>
        <div class="center-item">
          <div class="search-bar">
            <img class="icon-search" src="../../common/image/mall/icon-search.png" alt="">
            <p class="placeholder">大家都在搜“冬季保暖”</p>
          </div>
        </div>
        <div class="right-item">
          <div class="call extends-click">
            <img class="icon-phone" src="../../common/image/mall/icon-phone.png" alt="">
          </div>
        </div>
      </div>
      <div class="bg-wrap">
        <img src="../../common/image/test/shop-head-img.png" alt="" class="bg">
      </div>
      <div class="shop-info">
        <img src="../../common/image/mall/shop-thumbnail.png" alt="" class="thumbnail">
        <div class="info-content">
          <div class="name-wrap">
            <span class="name">利美旗舰店</span>
            <img class="icon-wechat" src="../../common/image/mall/icon-wechat.png" alt="">
          </div>
          <span class="manager">店长：百合</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="nav-wrap">
        <cube-scroll
        ref="scroll"
        direction="horizontal"
        class="nav-list-wrap">
          <ul class="nav-list">
            <li
              class="nav-item"
              :class="index == navIndex ? 'active' : ''"
              v-for="(item, index) in navs"
              :key="index"
              @click="changeNav(index)">{{item.name}}</li>
          </ul>
        </cube-scroll>
      </div>
      <div class="goods-wrap">
        <cube-scroll>
          <ul class="goods-list">
            <goods-item
              class="godos-item"
              v-for="(item, index) in goods"
              :key="index" />
          </ul>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '../../components/goods-item/goods-item'

export default {
  name: 'shop-detail',
  data() {
    return {
      navs: [{
        name: '全部'
      }, {
        name: '活动促销'
      }, {
        name: '衣服'
      }, {
        name: '美妆'
      }, {
        name: '靴子'
      }, {
        name: '饰品'
      }],
      navIndex: 0,
      goods: [
        {
          id: 1,
          name: '产品名称产品名称产品名称',
          thumbnail: require('../../common/image/test/goods-img.png'),
          intro: '产品详细介绍',
          price: 848,
          sales: 500,
          integral: 100
        },
        {
          id: 2,
          name: '产品名称产品名称产品名称',
          thumbnail: require('../../common/image/test/goods-img.png'),
          intro: '产品详细介绍',
          price: 848,
          sales: 500,
          integral: 100
        },
        {
          id: 3,
          name: '产品名称产品名称产品名称',
          thumbnail: require('../../common/image/test/goods-img.png'),
          intro: '产品详细介绍',
          price: 848,
          sales: 500,
          integral: 100
        },
        {
          id: 4,
          name: '产品名称产品名称产品名称',
          thumbnail: require('../../common/image/test/goods-img.png'),
          intro: '产品详细介绍',
          price: 848,
          sales: 500,
          integral: 100
        }
      ]
    }
  },
  methods: {
    changeNav(index) {
      this.navIndex = index
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="scss" scoped>
.shop-detail {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .head {
    position: relative;
    height: 170px;
    .head-bar {
      height: 44px;
      padding: 0 15px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      .left-item {
        .back {
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            width: 7px;
            height: 13px;
          }
        }
      }
      .center-item {
        flex: 1;
        display: flex;
        align-items: center;
        margin: 0 18px;
        .search-bar {
          flex: 1;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          background: #fff;
          .icon-search {
            width: 15px;
            height: 15px;
          }
          .placeholder {
            margin-left: 8px;
            font-size: 12px;
            color: #999;
          }
        }
      }
      .right-item {
        .call {
          display: flex;
          justify-content: center;
          align-items: center;
          .icon-phone {
            width: 17px;
            height: 17px;
          }
        }
      }
    }
    .bg-wrap {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(49, 0, 0, .5);
      }
      .bg {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
    .shop-info {
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 15px;
      display: flex;
      .thumbnail {
        width: 55px;
        height: 55px;
        box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.35);
      }
      .info-content {
        margin-left: 18px;
        flex: 1;
        .name-wrap {
          display: flex;
          align-items: center;
          .name {
            line-height: 20px;
            font-size: 15px;
            font-weight: 500;
            color: #fff;
          }
          .icon-wechat {
            margin-left: 5px;
            width: 15px;
            height: 15px;
          }
        }
        .manager {
          display: inline-block;
          vertical-align: top;
          margin-top: 10px;
          height: 18px;
          line-height: 18px;
          padding: 0 3px;
          border: 1px solid #fff;
          box-sizing: border-box;
          border-radius: 2px;
          box-sizing: border-box;
          font-size: 10px;
          color: #fff;
        }
      }
    }
  }
  .content {
    position: absolute;
    top: 170px;
    left: 0;
    right: 0;
    bottom: 0;
    .nav-wrap {
      position: relative;
      height: 45px;
      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #D9D9D9;
        transform: scaleY(.5);
      }
      .nav-list-wrap {
        /deep/ .cube-scroll-content {
          display: inline-block;
          vertical-align: top;
        }
        .nav-list {
          white-space: nowrap;
          padding: 0 5px;
          box-sizing: border-box;
          .nav-item {
            display: inline-flex;
            vertical-align: top;
            height: 45px;
            justify-content: center;
            align-items: center;
            padding: 0 23px;
            font-size: 12px;
            color: #999;
            &.active {
              color: #333;
              font-weight: 600;
            }
          }
        }
      }
    }
    .goods-wrap {
      position: absolute;
      top: 45px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #F4F4F4;
      .goods-list {
        .goods-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
