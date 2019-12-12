<template>
  <div class="goods-detail">
    <div class="head-bar">
      <div class="back extends-click" @click="back">
        <img src="../../common/image/mall/icon-back.png" alt="">
      </div>
      <div class="share">
        <img src="../../common/image/mall/icon-share.png" alt="">
      </div>
    </div>
    <div class="content">
      <cube-scroll>
        <div class="goods-imgs">
          <cube-slide :showDots="false" ref="slide" :data="goodsInfo.imgs">
            <cube-slide-item v-for="(item, index) in goodsInfo.imgs" :key="index">
              <img :src="item.imgUrl" alt="" class="goods-img">
            </cube-slide-item>
          </cube-slide>
        </div>
        <div class="goods-info">
          <div class="base-info">
            <div class="name">{{goodsInfo.name}}</div>
            <div class="price-wrap">
              <span class="unit">￥</span>
              <span class="price">899</span>
            </div>
          </div>
          <ul class="attr-list">
            <li class="attr-item">
              <span class="name">服务</span>
              <span class="text">{{goodsInfo.service}}</span>
            </li>
            <li class="attr-item">
              <span class="name">参数</span>
              <span class="text">{{goodsInfo.parameter}}</span>
            </li>
          </ul>
        </div>
        <router-link tag="div" to="/shop-detail" class="shop-info">
          <div class="shop-info-content">
            <img :src="goodsInfo.shop.thumbnail" alt="" class="thumbnail">
            <div class="name">{{goodsInfo.shop.name}}</div>
          </div>
          <img src="../../common/image/public/icon-right.png" alt="" class="icon-right">
        </router-link>
        <div class="comments">
          <div class="title-wrap">
            <div class="title">商品评价(150)</div>
            <router-link tag="div" to="/goods-comments" class="more">
              <span class="text">查看更多</span>
              <img src="../../common/image/public/icon-right.png" alt="" class="icon-right">
            </router-link>
          </div>
          <ul class="comment-list">
            <li class="comment-item" v-if="goodsInfo.comments[0]">
              <goods-comment :comment="goodsInfo.comments[0]" />
            </li>
            <li class="comment-item" v-if="goodsInfo.comments[1]">
              <goods-comment :comment="goodsInfo.comments[1]" />
            </li>
          </ul>
        </div>
        <div class="detail">
          <div class="title-wrap">
            <h2 class="title">商品详情</h2>
          </div>
        </div>
      </cube-scroll>
    </div>
    <div class="foot-bar">
      <div class="links">
        <router-link tag="div" to="/shop-detail" class="link-item">
          <img class="icon" src="../../common/image/mall/icon-store.png" alt="">
          <div class="name">店铺</div>
        </router-link>
        <router-link tag="div" to="/shopcart" class="link-item">
          <img class="icon" src="../../common/image/mall/icon-shopcart-l.png" alt="">
          <div class="name">购物车</div>
        </router-link>
        <div class="link-item">
          <img class="icon" src="../../common/image/mall/icon-service.png" alt="">
          <div class="name">客服</div>
        </div>
      </div>
      <div class="actions">
        <div class="action-item add" @click="add">
          <div class="name">加入购物车</div>
        </div>
        <div class="action-item buy" @click="buy">
          <div class="name">立即购买</div>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div class="select-attr-modal" v-show="modalShow">
        <div class="head">
          <div class="title">{{modalTitle}}</div>
          <div class="close extends-click" @click="hideModal">
            <img src="../../common/image/public/icon-close.png" alt="">
          </div>
        </div>
        <div class="modal-content">
          <div class="goods-info">
            <img src="../../common/image/test/goods-img.png" alt="" class="thumbnail">
            <div class="info-content">
              <div class="price">
                <span class="unit">￥</span>
                <span class="num">899.00</span>
              </div>
              <p class="tips">选择：{{modalTitle}}</p>
              <div class="stock">库存充足</div>
            </div>
          </div>
          <div class="attr-wrap">
            <div class="attr-item"
              v-for="(item, index) in goodsInfo.attrs"
              :key="index">
              <div class="name">{{item.name}}</div>
              <ul class="attrs">
                <li class="attr"
                  v-for="(item, index) in item.items"
                  :key="index">
                  <span class="text">{{item.content}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="foot">
<<<<<<< HEAD
          <!-- <router-link to="/shopcart"> -->
          <div class="confirm-btn" @click="confirm">确认</div>
          <!-- </router-link> -->
=======
          <div class="confirm-btn">确认</div>
>>>>>>> fa3efc97221b4b79b646ce609c5c463929183dca
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-show="modalShow" @click="hideModal"></div>
    </transition>
  </div>
</template>

<script>
import GoodsComment from '../../components/goods-comment/goods-comment'

export default {
  name: 'goods-detail',
  data() {
    return {
      goodsInfo: {
        id: 1,
        name: '西装外套',
        imgs: [{
          imgUrl: require('../../common/image/test/goods-slide.png')
        }],
        price: 899,
        service: '赠运费险',
        parameter: '尺寸·适用类型·材质',
        shop: {
          name: '利美商城',
          thumbnail: require('../../common/image/test/goods-img.png')
        },
        attrs: [{
          id: 1,
          name: '尺寸',
          items: [{
            id: 1,
            content: 'S'
          }, {
            id: 2,
            content: 'M'
          }, {
            id: 3,
            content: 'L'
          }]
        }, {
          id: 2,
          name: '颜色',
          items: [{
            id: 1,
            content: '黑色'
          }, {
            id: 2,
            content: '褐色'
          }]
        }],
        comments: [{
          user: {
            avatar: require('../../common/image/test/avatar.png'),
            name: '用户1'
          },
          stars: 4,
          comment: '您好，非常感谢您对利美官方旗舰店的支持，您的肯定就是对我们最大的支持。我们不定期会开展各种优惠活动的呢~建议您可以收藏关注下我们店铺...'
        }, {
          user: {
            avatar: require('../../common/image/test/avatar.png'),
            name: '用户2'
          },
          stars: 4,
          comment: '您好，非常感谢您对利美官方旗舰店的支持，您的肯定就是对我们最大的支持。我们不定期会开展各种优惠活动的呢~建议您可以收藏关注下我们店铺...'
        }, {
          user: {
            avatar: require('../../common/image/test/avatar.png'),
            name: '用户3'
          },
          stars: 4,
          comment: '您好，非常感谢您对利美官方旗舰店的支持，您的肯定就是对我们最大的支持。我们不定期会开展各种优惠活动的呢~建议您可以收藏关注下我们店铺...'
        }]
      },
<<<<<<< HEAD
      modalShow: false,
      action: ''
=======
      modalShow: false
>>>>>>> fa3efc97221b4b79b646ce609c5c463929183dca
    }
  },
  computed: {
    modalTitle() {
      const title = this.goodsInfo.attrs.map(item => item.name).join('、') || ''
      return title
    }
  },
  methods: {
    back() {
      this.$router.goBack()
    },
    showModal() {
      this.modalShow = true
    },
    hideModal() {
      this.modalShow = false
    },
    add() {
<<<<<<< HEAD
      this.action = 'add'
      this.showModal()
    },
    buy() {
      this.action = 'buy'
      this.showModal()
    },
    confirm() {
      this.hideModal()
      if (this.action === 'buy') {
        this.$router.push('/checkorder')
      }
=======
      this.showModal()
    },
    buy() {
      this.showModal()
>>>>>>> fa3efc97221b4b79b646ce609c5c463929183dca
    }
  },
  components: {
    GoodsComment
  }
}
</script>

<style lang="scss" scoped>
.goods-detail {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .head-bar {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    .back {
      display: flex;
      img {
        width: 25px;
        height: 25px;
      }
    }
    .share {
      display: flex;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 50px;
    left: 0;
    background-color: #F4F4F4;
    .goods-imgs {
      height: 300px;
      background-color: #fff;
      .goods-img {
        display: block;
        width: 100%;
        height: 300px;
      }
    }
    .goods-info {
      background-color: #fff;
      .base-info {
        padding: 12px 15px;
        .name {
          font-size: 16px;
          font-weight: 500;
          color: #333;
        }
        .price-wrap {
          padding-top: 10px;
          display: flex;
          align-items: flex-end;
          .unit {
            font-size: 11px;
            font-weight: 500;
            color: #F64952;
          }
          .price {
            font-size: 16px;
            font-weight: 500;
            color: #F64952;
          }
        }
      }
      .attr-list {
        position: relative;
        padding: 0 15px;
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
        .attr-item {
          height: 35px;
          display: flex;
          align-items: center;
          .name {
            font-size: 12px;
            color: #999;
          }
          .text {
            margin-left: 10px;
            font-size: 12px;
            color: #333;
          }
        }
      }
    }
    .shop-info {
      margin-top: 10px;
      height: 40px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      .shop-info-content {
        display: flex;
        align-items: center;
        .thumbnail {
          width: 35px;
          height: 35px;
          border-radius: 2px;
        }
        .name {
          margin-left: 8px;
          font-size: 12px;
          font-weight: 500;
          color: #333;
        }
      }
      .icon-right {
        width: 6px;
        height: 10px;
      }
    }
    .comments {
      margin-top: 10px;
      background-color: #fff;
      .title-wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
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
        .title {
          font-size: 12px;
          font-weight: 500;
          color: #333;
        }
        .more {
          display: flex;
          align-items: center;
          .text {
            font-size: 10px;
            color: #666;
          }
          .icon-right {
            margin-left: 5px;
            width: 6px;
            height: 10px;
          }
        }
      }
      .comment-list {
        .comment-item {
          position: relative;
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
          &:last-child:after {
            display: none;
          }
        }
      }
    }
    .detail {
      margin-top: 10px;
      background-color: #fff;
      .title-wrap {
        height: 30px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        .title {
          font-size: 12px;
          font-weight: 500;
          color: #333;
        }
      }
    }
  }
  .foot-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    .links {
      display: flex;
      flex: 0 0 150px;
      .link-item {
        flex: 1;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 20px;
          height: 20px;
        }
        .name {
          margin-top: 7px;
          font-size: 10px;
          color: #666;
        }
      }
    }
    .actions {
      flex: 1;
      display: flex;
      .action-item {
        flex: 1;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .name {
          font-size: 14px;
          color: #fff;
        }
        &.add {
          background-color: #FF7D84;
        }
        &.buy {
          background-color: #F64952;
        }
      }
    }
  }

  .select-attr-modal {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 3;
    .head {
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      .title {
        font-size: 14px;
        color: #333;
      }
      .close {
        display: flex;
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
    .modal-content {
      padding: 0 15px;
      .goods-info {
        margin-top: 10px;
        display: flex;
        align-items: center;
        .thumbnail {
          flex: 0 0 70px;
          width: 70px;
          height: 70px;
          border-radius: 5px;
        }
        .info-content {
          margin-left: 12px;
          flex: 1;
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .price {
            display: flex;
            align-items: flex-end;
            .unit {
              font-size: 12px;
              color: #F64952;
            }
            .num {
              font-size: 14px;
              color: #F64952;
            }
          }
          .tips {
            margin-top: 14px;
            font-size: 12px;
            color: #999;
          }
          .stock {
            margin-top: 14px;
            font-size: 12px;
            color: #999;
          }
        }
      }
      .attr-wrap {
        margin-top: 5px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        .attr-item {
          margin-top: 12px;
          .name {
            font-size: 12px;
            color: #999;
          }
          .attrs {
            margin-top: 12px;
            display: flex;
            .attr {
              min-width: 45px;
              height: 25px;
              line-height: 25px;
              text-align: center;
              margin-right: 15px;
              margin-bottom: 5px;
              padding: 0 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 3px;
              border: 1px solid #D9D9D9;
              box-sizing: border-box;
              .text {
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
      }
    }
    .foot {
      .confirm-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #F64952;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 2;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(0, 100%, 0);
  }
}
</style>
