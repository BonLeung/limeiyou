<template>
  <div class="order-item">
    <div class="head">
      <div class="time">{{order.time}}</div>
      <div class="status">{{statusText}}</div>
    </div>
    <div class="content">
      <ul class="goods-list">
        <li class="goods-item" v-for="(item, index) in order.goods" :key="`goods${index}`">
          <img src="../../common/image/test/goods-img.png" alt="" class="thumbnail">
          <div class="goods-content">
            <div class="goods-info">
              <div class="name">{{item.goodsName}}</div>
              <ul class="attr-list">
                <li class="attr-item" v-for="attr in item.attrs" :key="attr.name">{{attr.name}}：{{attr.content}}</li>
              </ul>
            </div>
            <div class="price-info">
              <div class="price">￥{{item.goodsPrice}}</div>
              <div class="num">X{{item.num}}</div>
            </div>
          </div>
        </li>
      </ul>
      <div class="order-info">
        <div class="total-num">共{{order.totalNum}}件</div>
        <div class="total-price">
          应付金额:<span class="price-num">￥{{order.amount}}</span>
        </div>
        <div class="integral">利美积分（{{order.integral}}）个</div>
      </div>
      <template v-if="order.status === 0">
        <div class="operate-wrap">
          <div class="btn btn-default">取消订单</div>
          <div class="btn btn-highlight">付款</div>
        </div>
      </template>
      <template v-if="order.status === 1">
        <div class="operate-wrap">
          <div class="btn btn-default">提醒卖家发货</div>
        </div>
      </template>
      <template v-if="order.status === 2">
        <div class="operate-wrap">
          <div class="btn btn-default">查看物流</div>
          <div class="btn btn-highlight">确认收货</div>
        </div>
      </template>
      <template v-if="order.status === 3">
        <div class="operate-wrap">
          <div class="btn btn-default">再来一单</div>
          <div class="btn btn-default">评价</div>
        </div>
      </template>
      <template v-if="order.status === 4">
        <div class="operate-wrap">
          <div class="btn btn-default">删除订单</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object
    }
  },
  computed: {
    statusText() {
      let statusText = ''
      switch (this.order.status) {
        case 0:
          statusText = '等待卖家付款'
          break
        case 1:
          statusText = '等待卖家发货'
          break
        case 2:
          statusText = '卖家已发货'
          break
        case 3:
          statusText = '交易成功'
          break
        case 4:
          statusText = '交易关闭'
          break
      }
      return statusText
    }
  }
}
</script>

<style lang="scss" scoped>
.order-item {
  padding: 0 15px 10px;
  background-color: #fff;
  .head {
    position: relative;
    height: 33px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &::after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #EDEDED;
      transform: scaleY(.5);
    }
    .time {
      font-size: 12px;
      color: #333;
    }
    .status {
      font-size: 12px;
      color: 3333;
    }
  }
  .content {
    .goods-list {
      .goods-item {
        display: flex;
        flex-direction: row;
        padding: 7px 0;
        .thumbnail {
          width: 82px;
          height: 82px;
          border-radius: 5px;
        }
        .goods-content {
          flex: 1;
          display: flex;
          flex-direction: row;
          padding-top: 6px;
          margin-left: 15px;
          .goods-info {
            flex: 1;
            .name {
              min-width: 0;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 13px;
              line-height: 15px;
              color: #333;
            }
            .attr-list {
              margin-top: 12px;
              .attr-item {
                margin-bottom: 5px;
                font-size: 11px;
                color: #aaa;
              }
            }
          }
          .price-info {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .price {
              line-height: 15px;
              font-size: 14px;
              font-weight: 500;
              color: #333;
            }
            .num {
              margin-top: 14px;
              font-size: 11px;
              color: #999;
            }
          }
        }
      }
    }
    .order-info {
      position: relative;
      padding-top: 12px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background-color: #EDEDED;
        transform: scaleY(.5);
      }
      .total-num {
        margin-right: 5px;
        font-size: 12px;
        color: #333;
      }
      .total-price {
        margin-right: 5px;
        display: flex;
        align-items: center;
        line-height: 12px;
        font-size: 12px;
        color: #333;
        .price-num {
          font-size: 14px;
          color: #F64952;
        }
      }
      .integral {
        font-size: 12px;
        color: #333;
      }
    }
    .operate-wrap {
      display: flex;
      justify-content: flex-end;
      margin-top: 15px;
      .btn {
        min-width: 65px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
        margin-right: 15px;
        border-radius: 3px;
        font-size: 12px;
        box-sizing: border-box;
        &:last-child {
          margin-right: 0;
        }
        &.btn-default {
          border: 1px solid #aaa;
          color: #333;
        }
        &.btn-highlight {
          background-color: #F64952;
          color: #fff;
        }
      }
    }
  }
}
</style>
