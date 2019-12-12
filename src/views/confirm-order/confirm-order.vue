<template>
  <div class="confirm-order">
    <navbar title="确认订单" />
    <div class="content">
      <div class="none-address" @click="addAddress()">
        <img
          src="../../common/image/mall/icon-location.png"
          alt=""
          class="icon-location">
        <p class="tips">请填写收货地址</p>
        <img
          src="../../common/image/public/icon-right.png"
          alt=""
          class="icon-right">
      </div>
      <div class="order-wrap">
        <cube-scroll>
          <ul class="order-list">
            <li class="order-item">
              <ul class="goods-list">
                <li class="goods-item">
                  <img
                    src="../../common/image/test/goods-img.png"
                    alt=""
                    class="thumbnail">
                  <div class="goods-info">
                    <div class="name">产品名称产品名称产品名称</div>
                    <p class="attrs">颜色；尺寸</p>
                    <div class="price-info">
                      <div class="price-wrap">
                        <span class="unit">￥</span>
                        <span class="price">848</span>
                      </div>
                      <p class="integral">利美积分（88）个</p>
                    </div>
                    <div class="num">X1</div>
                  </div>
                </li>
              </ul>
              <ul class="info-list">
                <li class="info-item">
                  <div class="label">配送方式：</div>
                  <div class="carriage">快递￥0.00</div>
                </li>
                <li class="info-item">
                  <div class="label">备注：</div>
                </li>
                <li class="info-item">
                  <div class="label">应付款：</div>
                  <div class="amount">
                    <span class="unit">￥</span>
                    <span class="num">848</span>
                  </div>
                </li>
              </ul>
            </li>
            <li class="order-item">
              <ul class="goods-list">
                <li class="goods-item">
                  <img
                    src="../../common/image/test/goods-img.png"
                    alt=""
                    class="thumbnail">
                  <div class="goods-info">
                    <div class="name">产品名称产品名称产品名称</div>
                    <p class="attrs">颜色；尺寸</p>
                    <div class="price-info">
                      <div class="price-wrap">
                        <span class="unit">￥</span>
                        <span class="price">848</span>
                      </div>
                      <p class="integral">利美积分（88）个</p>
                    </div>
                    <div class="num">X1</div>
                  </div>
                </li>
              </ul>
              <ul class="info-list">
                <li class="info-item">
                  <div class="label">配送方式：</div>
                  <div class="carriage">快递￥0.00</div>
                </li>
                <li class="info-item">
                  <div class="label">备注：</div>
                </li>
                <li class="info-item">
                  <div class="label">应付款：</div>
                  <div class="amount">
                    <span class="unit">￥</span>
                    <span class="num">848</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <div class="footer-bar">
      <div class="statistics">
        <div class="total-num">
          共<span class="num">2</span>件商品
        </div>
        <div class="price-info">
          <div class="summation">
            <div class="title">合计:</div>
            <div class="price">
              <span class="unit">￥</span>
              <span class="num">788.00</span>
            </div>
          </div>
          <div class="integral">合计利美积分（88）个</div>
        </div>
      </div>
      <div class="commit-btn" @click="commitOrder()">提交订单</div>
    </div>

    <transition name="fade">
      <div class="mask" v-show="isShow" @click="hideModal()"></div>
    </transition>
    <transition name="slide">
      <div class="select-payway-modal" v-show="isShow">
        <div class="modal-head">
          <h2 class="title">请选择支付方式</h2>
          <div class="close-btn extends-click" @click="hideModal()">
            <img
              src="../../common/image/public/icon-close.png"
              alt=""
              class="icon-close">
          </div>
        </div>
        <div class="modal-body">
          <p class="tips">请在59分钟内完成支付 金额<span class="price">￥888.00</span>元</p>
          <ul class="payway-list">
            <li class="payway-item"
              v-for="(item, index) in paywayList"
              :key="index"
              :class="item.id == paywayId ? 'active' : ''"
              @click="selectPayway(item)">
              <div class="payway">
                <img
                  :src="item.img"
                  alt=""
                  class="payway-icon">
                <div class="name">{{item.name}}</div>
              </div>
              <img
                v-show="item.id == paywayId"
                src="../../common/image/mall/icon-select.png"
                alt=""
                class="icon-select">
            </li>
          </ul>
        </div>
        <div class="modal-foot">
          <div class="confirm-btn" @click="confirmPay()">确认支付</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

const paywayList = [{
  id: 1,
  name: '银行卡快捷支付',
  img: require('../../common/image/mall/icon-bankcard.png')
}, {
  id: 2,
  name: '支付宝',
  img: require('../../common/image/mall/icon-alipay.png')
}, {
  id: 3,
  name: '微信支付',
  img: require('../../common/image/mall/icon-wechatpay.png')
}, {
  id: 4,
  name: '其他支付方式',
  img: require('../../common/image/mall/icon-other-payway.png')
}]

export default {
  name: 'confirm-order',
  data() {
    return {
      isShow: false,
      paywayList: paywayList,
      paywayId: 3
    }
  },
  methods: {
    commitOrder() {
      this.showModal()
    },
    hideModal() {
      this.isShow = false
    },
    showModal() {
      this.isShow = true
    },
    selectPayway(payway) {
      this.paywayId = payway.id
    },
    confirmPay() {
      this.hideModal()
      this.$router.push('/pay-success')
    },
    addAddress() {
      this.$router.push('/address')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.confirm-order {
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
    bottom: 49px;
    left: 0;
    .none-address {
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      &::after {
        display: block;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #EDEDED;
        transform-origin: center;
        transform: scaleY(.5) translateY(0.2px);
      }
      .icon-location {
        width: 20px;
        height: 20px;
      }
      .tips {
        flex: 1;
        margin-left: 12px;
        font-size: 14px;
        color: #333;
      }
      .icon-right {
        width: 6px;
        height: 10px;
      }
    }
    .order-wrap {
      position: absolute;
      top: 50px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #f4f4f4;
      .order-list {
        .order-item {
          margin-bottom: 10px;
          padding: 0 15px;
          background: #fff;
          .goods-list {
            .goods-item {
              padding: 15px 0;
              display: flex;
              .thumbnail {
                flex: 0 0 82px;
                width: 82px;
                height: 82px;
              }
              .goods-info {
                position: relative;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 15px;
                min-width: 0;
                .name {
                  height: 16px;
                  line-height: 16px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 13px;
                  color: #333;
                }
                .attrs {
                  margin-top: 20px;
                  font-size: 12px;
                  color: #999;
                }
                .price-info {
                  margin-top: 23px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  .price-wrap {
                    display: flex;
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
                  .integral {
                    font-size: 12px;
                    color: #999;
                  }
                }
                .num {
                  position: absolute;
                  top: 35px;
                  right: 0;
                  line-height: 12px;
                  font-size: 12px;
                  color: #999;
                }
              }
            }
          }
          .info-list {
            .info-item {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 50px;
              &::after {
                display: block;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background-color: #ededed;
                transform: scaleY(.5);
              }
              .label {
                font-size: 14px;
                color: #333;
              }
              .carriage {
                font-size: 14px;
                color: #999;
              }
              .amount {
                display: flex;
                align-items: flex-end;
                .unit {
                  font-size: 11px;
                  font-weight: 500;
                  color: #F64952;
                }
                .num {
                  font-size: 16px;
                  font-weight: 500;
                  color: #F64952;
                }
              }
            }
          }
        }
      }
    }
  }
  .footer-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    display: flex;
    .statistics {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #D9D9D9;
      }
      .total-num {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #333;
        .num {
          color: #F64952;
        }
      }
      .price-info {
        display: flex;
        flex-direction: column;
        .summation {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #333;
          .price {
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
    .commit-btn {
      flex: 0 0 100px;
      width: 100px;
      height: 49px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F64952;
      font-size: 14px;
      color: #fff;
    }
  }

  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
  }
  .select-payway-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #fff;
    .modal-head {
      position: relative;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        display: block;
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #ededed;
        transform: scaleY(.5);
      }
      .title {
        font-size: 14px;
        color: #222;
      }
      .close-btn {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        .icon-close {
          width: 14px;
          height: 14px;
        }
      }
    }
    .modal-body {
      .tips {
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #222;
        .price {
          font-size: 12px;
          color: #F64952;
        }
      }
      .payway-list {
        .payway-item {
          position: relative;
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px;
          &::after {
            display: block;
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            background-color: #ededed;
            transform: scaleY(.5);
          }
          &:last-child::after {
            display: none;
          }
          &.active {
            background-color: #F0F0F0;
          }
          .payway {
            display: flex;
            align-items: center;
            .payway-icon {
              width: 22px;
              height: 22px;
            }
            .name {
              margin-left: 20px;
              font-size: 12px;
              color: #222;
            }
          }
          .icon-select {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .modal-foot {
      .confirm-btn {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F64952;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(0, 100%, 0);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
