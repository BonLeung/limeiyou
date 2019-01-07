<template>
  <div class="order-item">
    <div class="head">
      <div class="name">{{shop.name}}</div>
      <div class="info">
        <div class="new-info">
          <span class="title">上新</span>
          <span class="num">{{shop.newNum}}</span>
        </div>
        <div class="discount-info">
          <span class="title">折扣</span>
          <span class="num">{{shop.discountNum}}</span>
        </div>
      </div>
      <div class="home">
        <img src="../../common/image/mall/icon-home.png" alt="" class="icon-home">
      </div>
    </div>
    <div class="goods">
      <cube-scroll
        ref="scroll"
        direction="horizontal"
        class="goods-list-wrap">
        <ul class="goods-list">
          <li class="goods-item" v-for="item in shop.goods" :key="item.id">
            <img src="../../common/image/test/goods-img-l.png" alt="">
            <div class="price-wrap" v-if="!item.isDiscount">
              <div class="price-content normal">
                <span class="unit">￥</span>
                <span class="price">{{item.price}}</span>
              </div>
            </div>
            <div class="price-wrap" v-else>
              <div class="price-content new">
                <span class="unit">￥</span>
                <span class="price">{{item.price}}</span>
              </div>
              <div class="price-content old">
                <span class="unit">￥</span>
                <span class="price">{{item.oldPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
    <div class="hot-wrap" v-if="shop.hots && showHots">
      <div class="title-wrap">
        <h2 class="title">热销商品</h2>
      </div>
      <ul class="hot-list">
        <li
          class="hot-item"
          v-for="(item, index) in shop.hots"
          :key="index">
          <img class="thumbnail" src="../../common/image/test/goods-img.png" alt="">
          <div class="content">
            <div class="name">{{item.name}}</div>
            <div class="info">
              <div class="sell-info">
                <div class="price-wrap">
                  <span class="unit">￥</span>
                  <span class="price">{{item.price}}</span>
                </div>
                <div class="sales">已售{{item.sales}}</div>
              </div>
              <div class="integral">利美积分{{item.integral}}个</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-item',
  props: {
    shop: {
      type: Object
    },
    showHots: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.order-item {
  background-color: #fff;
  .head {
    position: relative;
    padding: 0 15px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 13px;
      color: #333;
    }
    .info {
      height: 10px;
      line-height: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 8px;
      .new-info {
        line-height: 10px;
        display: flex;
        align-items: center;
        .title {
          font-size: 10px;
          color: #73BC1C
        }
        .num {
          margin-left: 5px;
          font-size: 10px;
          color: #aaa;
        }
      }
      .discount-info {
        margin-left: 10px;
        display: flex;
        align-items: center;
        .title {
          font-size: 10px;
          color: #EF0A33
        }
        .num {
          margin-left: 5px;
          font-size: 10px;
          color: #aaa;
        }
      }
    }
    .home {
      position: absolute;
      right: 25px;
      top: 5px;
      width: 23px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-home {
        width: 13px;
        height: 14px;
      }
    }
  }
  .goods {
    width: 100%;
    height: 180px;
    .goods-list-wrap {
      /deep/ .cube-scroll-content {
        display: inline-block;
      }
      .goods-list {
        padding: 0 15px;
        white-space: nowrap;
        .goods-item {
          margin-right: 30px;
          display: inline-block;
          width: 100px;
          &:last-child {
            margin-right: 0;
          }
          img {
            display: block;
            width: 100px;
            height: 150px;
          }
          .price-wrap {
            margin-top: 10px;
            line-height: 12px;
            display: flex;
            justify-content: center;
            .price-content {
              display: flex;
              align-items: flex-end;
              .unit {
                line-height: 10px;
                font-size: 10px;
                color: #333;
              }
              .price {
                font-size: 12px;
                color: #333;
              }
              &.new {
                .unit, .price {
                  color: #F64952;
                }
              }
              &.old {
                margin-left: 5px;
                text-decoration: line-through;
                color: #999;
                .unit, .price {
                  color: #999;
                }
              }
            }
          }
        }
      }
    }
  }
  .hot-wrap {
    margin-top: 15px;
    .title-wrap {
      padding: 0 15px;
      height: 20px;
      display: flex;
      align-items: center;
      .title {
        font-size: 12px;
        color: #333;
      }
    }
    .hot-list {
      padding: 0 15px;
      .hot-item {
        position: relative;
        display: flex;
        height: 82px;
        padding: 13px 0;
        &::after {
          display: block;
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: #D9D9D9;
          transform: scaleY(.5);
        }
        &:last-child::after {
          display: none;
        }
        .thumbnail {
          flex: 0 0 82px;
          height: 82px;
        }
        .content {
          margin-left: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .name {
            line-height: 20px;
            font-size: 13px;
            color: #222;
          }
          .info {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .sell-info {
              display: flex;
              align-items: center;
              .price-wrap {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                .unit {
                  font-size: 10px;
                  color: #333;
                }
                .price {
                  font-size: 14px;
                  color: #333;
                }
              }
              .sales {
                margin-left: 8px;
                font-size: 11px;
                color: #999;
              }
            }
            .integral {
              font-size: 10px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
