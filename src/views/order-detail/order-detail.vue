<template>
  <div>
    <div class="top">
      <img src="../../common/image/public/icon-back.png" alt=""  @click="$router.go(-1)">
      <span class="goodsname">订单详情</span>
    </div>

    <div class="order" v-show="refund">
      <div class="order-top">
        <img v-if="order==4" src="../../common/image/order/order.png" alt="">
        <img v-else src="../../common/image/order/icon-logistics.png" alt="">
        <div class="last-time">
          <p v-if="order==0">等待卖家处理</p>
          <p v-else-if="order==1">等待买家退回货物</p>
          <p v-else-if="order==2">等待卖家确认收货</p>
          <p v-else-if="order==3">退款关闭</p>
          <p v-else-if="order==4">卖家已拒绝您的申请</p>
          <p v-if="order==4">信息填写有误</p>
          <p v-else>剩余1天23时59分</p>
        </div>
      </div>
      <div class="order-detail">
        <p class="first-p" v-if="order==0">您已成功发起退款申请，请等待卖家同意</p>
        <p class="first-p" v-else-if="order==1">卖家已同意您的退货申请，请尽快退回货物</p>
        <div class="first-div" v-else-if="order==2" @click="check()">
          <img class="courier-img" src="../../common/image/public/icon-right.png" alt="">
          <div class="courier">
            <div class="courier-mes">
              <p>退货物流：圆通速递(710480973388)</p>
              <p>暂时还没有物流信息</p>
            </div>
            <img src="../../common/image/public/icon-right.png" alt="">
          </div>
        </div>
        <p class="first-p" v-else-if="order==3">您已取消本次退款申请</p>
        <p class="first-p" v-else-if="order==4">审核不通过，请修改申请重新提交</p>
        <div class="order-news" v-if="order==0">
          <p>商家同意或者超时未处理，系统将退款给您</p>
          <p>如果商家拒绝，您可以修改退款申请后再次发起，商家会重新处理</p>
        </div>
        <div class="order-news" v-else-if="order==1">
          <p>逾时未寄回退货商品，系统将自动撤销退货申请</p>
        </div>
        <div class="order-news" v-else-if="order==2">
          <p>如商家逾期未处理，系统将默认商家收到退货商品，系统默认退还钱款</p>
        </div>
        <div class="order-news" v-else-if="order==3">
          <p>建议您和商家确认发货时间，避免后续发生误会</p>
        </div>
        <div class="order-news" v-else-if="order==4">
          <p>如有疑问，请与卖家沟通售后情况</p>
        </div>
      </div>
      <div class="order-bottom" v-if="order==0 || order==4">
        <div>取消申请</div>
        <div>修改申请</div>
      </div>
      <div class="order-bottom" v-else-if="order==1">
        <div>取消申请</div>
        <div>填写物流</div>
      </div>
      <div class="order-bottom" v-else-if="order==2">
        <div>取消申请</div>
      </div>
      <div class="order-bottom" v-else-if="order==3" style="display:none;"></div>
    </div>

    <div class="order-mes" v-show="refund">
      <div class="order-goods">
        <p class="mes-title">退款信息</p>
        <div class="goods-detail">
          <div class="goodsimg"><img src="../../common/image/test/goods-img.png" alt=""></div>
          <div class="goodsdetail">
            <p class="goodsname1">产品名称产品名称产品名称</p>
            <div class="goodsize">
              <div class="sizes">
                <span>颜色；</span>
                <span>尺寸</span>
              </div>
            </div>
            <div class="price">
              <div class="priceleft">¥
                <span>848</span>
              </div>
              <span class="num">x1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="order-reason">
        <p>退款原因：买重复了</p>
        <p>退款金额：￥98</p>
        <p>申请时间：2018-6-21 15:10</p>
        <p>退款编号：9513560508746492</p>
      </div>
      <div class="kefu" v-if="order==4">联系客服</div>
    </div>

    <div class="order" v-show="!refund" style="padding:unset;">
      <div class="order-top">
        <img src="../../common/image/order/order.png" alt="">
        <div class="last-time" v-if="order==0">
          <p>等待买家付款</p>
          <p>您的订单已提交，请在00时29分58秒内完成支付，超时订单自动取消</p>
        </div>
        <div class="last-time" v-else-if="order==1">
          <p style="margin:unset;">买家已付款</p>
        </div>
        <div class="last-time" v-else-if="order==2">
          <p>卖家已发货</p>
          <p>剩余8天22时55分23秒自动确认收货</p>
        </div>
        <div class="last-time" v-else-if="order==3">
          <p>交易关闭</p>
          <p>信息填写错误，重新拍</p>
        </div>
        <div class="last-time" v-else-if="order==4">
          <p style="margin:unset;">交易成功</p>
        </div>
      </div>
      <div class="first-div" v-if="order==2" @click="check()">
          <img class="courier-img" src="../../common/image/public/icon-right.png" alt="">
          <div class="courier">
            <div class="courier-mes">
              <p>货物已出库</p>
              <p>2018-6-20 20:18:26</p>
            </div>
            <img src="../../common/image/public/icon-right.png" alt="">
          </div>
        </div>
        <div class="first-div" v-if="order==4" @click="check()">
          <img class="courier-img" src="../../common/image/order/icon-logistics.png" alt="">
          <div class="courier">
            <div class="courier-mes">
              <p>快件已被签收</p>
              <p>2018-6-20 20:18:26</p>
            </div>
            <img src="../../common/image/public/icon-right.png" alt="">
          </div>
        </div>
      <div class="order-detail" style="margin:18.5px 0 0 15px">
        <p class="first-p">收货地址</p>
        <div class="order-news1">
          <p>收货地址<span>13900000000</span></p>
          <p>广东省广州市天河区珠江东路12号高德置地冬广场H座2608</p>
        </div>
      </div>
    </div>

    <div class="order-mes" v-show="!refund">
      <div class="order-goods">
        <div class="goods-detail aa">
          <div class="goodsimg"><img src="../../common/image/test/goods-img.png" alt=""></div>
          <div class="goodsdetail" v-if="order==0 || order==3">
            <p class="goodsname1">产品名称产品名称产品名称</p>
            <div class="goodsize">
              <div class="sizes">
                <span>颜色；</span>
                <span>尺寸</span>
              </div>
            </div>
            <div class="price">
              <div class="priceleft">¥
                <span>848</span>
              </div>
              <span class="num">x1</span>
            </div>
          </div>
          <div class="goodsdetail" v-else>
            <p class="goodsname1">产品名称产品名称产品名称</p>
            <div class="goodsize">
              <div class="sizes">
                <span>颜色；</span>
                <span>尺寸</span>
              </div>
              <span class="num">x1</span>
            </div>
            <div class="price">
              <div class="priceleft">¥
                <span>848</span>
              </div>
              <router-link tag="div"  to="/refund" class="back_goods">退货</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="courier-way way">
        <span>配送方式</span>
        <span>免邮</span>
      </div>
      <div class="courier-price way">
        <span>实付款（含运费）</span>
        <span class="price-mes">￥<span>848.00</span></span>
      </div>
    </div>

    <div class="order-num"  v-show="!refund">
      <div class="num-mes">
        <p>订单编号：163770041816749264</p>
        <p>创建时间：2018-6-20 20:18:26</p>
        <p v-if="order!=0 && order!=3">付款时间：2018-6-20 20:20:26</p>
        <p v-if="order==2 || order==4">发货时间：2018-6-21 11:19:30</p>
      </div>
      <div class="num-bottom" v-if="order==0">
        <div @click="add">取消订单</div>
        <div>立即付款</div>
      </div>
      <div class="num-bottom" v-if="order==2">
        <div>联系客服</div>
        <div>查看物流</div>
        <div>确认收货</div>
      </div>
      <div class="num-bottom" v-if="order==3">
        <div style="border: 1px solid #999999;background:#FFFFFF;color:#999999;">删除订单</div>
      </div>
      <div class="num-bottom" v-if="order==4">
        <div>再来一单</div>
        <div>评价</div>
      </div>
    </div>

    <transition name="slide" v-show="!refund">
      <div class="mes-top"  v-show="modalShow">
        <p>请选择取消订单的理由</p>
        <ul>
          <li :class="{on:num==index}" v-for="(item,index) in list" :key="index" @click="select(index,$event)">{{item}}</li>
        </ul>
        <div class="mes-bottom">
          <div class="cancel"  @click="hideModal">取消</div>
          <div class="confirm">确定</div>
        </div>
      </div>
    </transition>
    <transition name="fade"  v-show="!refund">
      <div class="mask" v-show="modalShow" @click="hideModal"></div>
    </transition>

  </div>
</template>
<script>
export default {
  data(){
    return{
      num:'',
      order:4,
      refund:false,
      modalShow: false,
      list:['收货人信息有误','商品数量需调整','有更优惠的购买方案','商品缺货','我不想买了','其他原因']
    }
  },
  mounted(){
  },
  methods:{
    select(index,e){
      var that = this
      that.num = index
      console.log(e)
    },
    check(){
      var that = this
      that.$router.push('/check-courier')
    },
    showModal() {
      this.modalShow = true
    },
    hideModal() {
      this.modalShow = false
    },
    add() {
      this.showModal()
    },
  }
}
</script>

<style lang="scss" scoped>
  .top{
    width: 100%;
    height: 49px;
    background:rgba(255,255,255,1);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #EDEDED;
    position: fixed;
    top: 0;
    img{
      width: 6.5px;
      height: 13px;
      position: relative;
      left: 15px;
    }
    .goodsname{
      font-size: 16px;
      font-family:PingFang-SC-Medium;
      font-weight: 500;
      color: #333333;
      margin-right: 156px;
    }
  }
  .order{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background:rgba(255,255,255,1);
    padding-bottom: 18.5px;
    margin-top: 50px;
    .order-top{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: 0 0 17.5px;
      border-bottom: 0.5px solid #EDEDED;
      margin: 0 15px;
      img{
        width: 16.5px;
        height: 17.5px;
        margin: 18px 0 0 0;
      }
      .last-time {
        margin: 18.5px 0 0 11px;
        letter-spacing: 0.3px;
        p:first-child{
          font-size: 14px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(51,51,51,1);
          line-height: 18px;
        }
        p:last-child{
          font-size: 11px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(51,51,51,1);
          line-height: 18px;
          margin-top: 14.5px;
        }
      }
    }
    .first-div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-bottom: 12.5px;
        border-bottom: 0.5px solid #EDEDED;
        .courier-img{
          width: 18.5px;
          height: 12.5px;
          margin: 20px 0 0 14.5px;
        }
        .courier{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-right: 12.5px;
          .courier-mes{
            margin-left: 11px;
            p:first-child{
              font-size: 14px;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(51,51,51,1);
              line-height: 18px;
            }
            p:last-child{
              font-size: 11px;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(170,170,170,1);
              line-height: 18px;
              margin-top: 14.5px;
            }
          }
          img{
            width: 6px;
            height: 11.5px;
          }
        }
      }
    .order-detail{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: wrap;
      // margin: 18px 0 0 15px;
      .first-p{
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(51,51,51,1);
        line-height: 18px;
      }
      .order-news{
        font-size: 11px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(153,153,153,1);
        line-height: 21px;
        margin-top: 14px;
        margin-bottom: 11.5px;
        padding-left: 15px;
      }
      .order-news1{
        font-size: 11px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #333333;
        line-height: 21px;
        margin-top: 14px;
        margin-bottom: 11.5px;
        span{
          margin-left: 18.5px;
        }
      }
    }
    .order-bottom{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      font-size: 13px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      line-height: 18px;
      margin: 0 12px 0 0;
      div:first-child{
        width: 78px;
        height: 27.5px;
        border: 1px solid rgba(170,170,170,1);
        border-radius: 3px;
        color: rgba(153,153,153,1);
        text-align: center;
        line-height: 27.5px;
      }
      div:last-child{
        width: 78px;
        height: 27.5px;
        border: 1px solid rgba(246,73,82,1);
        border-radius: 3px;
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(246,73,82,1);
        line-height: 27.5px;
        text-align: center;
        margin-left: 14px;
      }
    }
  }
  .order-mes{
    margin-top: 10px;
    background: rgba(255,255,255,1);
    .order-reason{
      font-size:11px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:18px;
      margin: 20px 0 0 12.5px;
      p{
        margin-bottom: 9.5px;
      }
    }
    .kefu{
      width: 300px;
      height: 35px;
      background: rgba(246,73,82,1);
      border-radius: 2.5px;
      font-size: 14px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255,255,255,1);
      line-height: 35px;
      text-align: center;
      margin: 77.5px auto 0;
    }
    .way{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51,51,51,1);
      line-height: 18px;
      padding: 18.5px 15.5px 18.5px 12px;
      border-bottom: 0.5px solid #ededed;
      .price-mes{
        font-size: 11px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(246,73,82,1);
        line-height: 18px;
        span{
          font-size: 15px;
        }
      }
    }
  }
  .order-goods .mes-title{
    font-size:14px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:18px;
    margin: 19.5px 0 0 12.5px;
  }
  .goods-detail{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 121px;
    background: rgba(255,255,255,1);
    margin-bottom: 10px;
    border-bottom: 0.5px solid #ededed;
    .goodsimg{
      width: 82.5px;
      height: 82.5px;
      background: rgba(255,255,255,1);
      border: .5px solid rgba(229,229,229,1);
      border-radius: 5px;
      margin: 19px 0 0 12px;
      img{
        width: 82.5px;
        height: 82.5px;
        border-radius: 5px;
      }
    }
    .aa{
      margin-bottom: 0 !important;
    }
    .goodsdetail{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      margin: 18.5px 15px 19.5px 15px;
      .goodsname1{
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(34,34,34,1);
      }
      .goodsize{
        width: 250px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(153,153,153,1);
        margin-top: 15.5px;
      }
      .price{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(51,51,51,1);
        margin-top: 32.5px;
        align-items: center;
        .priceleft{
          font-size: 10px;
          span{
            font-size: 14px;
          }
        }
        .num{
          margin-right: 0.5px;
          font-size: 12px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(153,153,153,1);
          line-height: 18px;
        }
      }
      .back_goods{
        width: 50px;
        height: 22.5px;
        border: 1px solid rgba(51,51,51,1);
        border-radius: 2.5px;
        font-size: 12px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(51,51,51,1);
        text-align: center;
        line-height: 22.5px;
      }
    }
  }
  .order-num{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 9px;
    padding: 19px 0 0 0;
    .num-mes{
      font-size: 12px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(51,51,51,1);
      line-height: 18px;
      padding-bottom: 38.5px;
      padding-left: 14.5px;
      p{
        margin-bottom: 9.5px;
      }
    }
    .num-bottom{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      font-size: 14px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      line-height: 27.5px;
      text-align: center;
      margin: 11px 15px 0 0;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      border-top: 0.013333rem solid #ededed;
      width: 100%;
      padding-top: 10px;
      background: rgba(255,255,255,1);
      height: 35px;
      div{
        width: 77.5px;
        height: 27.5px;
        border: 1px solid rgba(153,153,153,1);
        border-radius: 2.5px;
        color: rgba(153,153,153,1);
        margin-left: 14.5px
      }
      div:first-child{
        width: 77.5px;
        height: 27.5px;
        border: 1px solid rgba(153,153,153,1);
        border-radius: 2.5px;
        color: rgba(153,153,153,1);
      }
      div:last-child{
        width: 77.5px;
        height: 27.5px;
        border: 1px solid #F64952;
        border-radius: 2.5px;
        color: #FFFFFF;
        background:rgba(246,73,82,1);
        margin-left: 14.5px;
        margin-right: 15px;
      }
    }
  }
  .mes-top{
    width: 309px;
    // height: 349.5px;
    background: rgba(255,255,255,1);
    border-radius: 5px;
    position: fixed;
    top: 158.5px;
    z-index: 3;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    p{
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(246,73,82,1);
      line-height: 18px;
      padding: 19.5px 0 15px 14px;
      border-bottom: 1.5px solid #F64952;
    }
    ul{
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(34,34,34,1);
      line-height: 18px;
      padding: 14.5px 0 0 14.5px;
      li{
        margin-bottom: 29.5px;
      }
      .on{
        background: rgba(255,255,255,1) url("../../common/image/public/radio-selected.png") no-repeat;
        background-position-x:265px;
        background-size:17.5px;
      }
      li:last-child{
        margin-bottom: 15px;
      }
    }
    .mes-bottom{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
      border-top: 0.5px solid #EDEDED;
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      .cancel{
        width: 50%;
        text-align: center;
        padding: 16.5px 0 15px;
        color: rgba(170,170,170,1);
        line-height: 18px;
        border-right: 0.5px solid #ededed;
      }
      .confirm{
        width: 50%;
        text-align: center;
        padding: 16.5px 0 15px;
        color: #222222;
        line-height: 18px;
      }
    }
  }
  .select-attr-modal {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 3;
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
    transition: all .3s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(0, 100%, 0);
    opacity: 0;
  }
</style>


