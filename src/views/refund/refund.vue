<template>
  <div>
    <div class="top">
      <img src="../../common/image/public/icon-back.png" alt=""  @click="$router.go(-1)">
      <span class="goodsname">选择退款</span>
    </div>

    <div class="goods">
      <div class="goodsimg"><img src="../../common/image/test/goods-img.png" alt=""></div>
      <div class="goodsdetail">
        <p class="goodsname1">产品名称产品名称产品名称</p>
        <div class="goodsize">
          <div class="sizes">
            <span>颜色；</span>
            <span>尺寸</span>
          </div>
          <span class="num">x1</span>
        </div>
        <div class="price">
          <div class="priceleft">
            ¥
            <span>848</span>
          </div>
          <div class="priceright">
            <span>实付金额 </span>¥
            <span>848</span>
          </div>
        </div>
      </div>
    </div>

    <div class="typeway">
      <div class="backmoney back" @click="backmoney(0)">
        <img class="typeimg" src="../../common/image/refund/仅退款@2x.png" alt="">
        <div class="typeright">
          <div class="type">
            <p class="typename">仅退款</p>
            <div class="typedetail">未收到货，与卖家协商同意后填写</div>
          </div>
          <img src="../../common/image/public/icon-right.png" alt="">
        </div>
      </div>
      <div class="backgoods back"  @click="backmoney(1)">
        <img class="typeimg" src="../../common/image/refund/退@2x.png" alt="">
        <div class="typeright">
          <div class="type">
            <p class="typename">退货</p>
            <div class="typedetail">已收到货(包含拒收)，与卖家协商同意后填写</div>
          </div>
          <img src="../../common/image/public/icon-right.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    backmoney(num) {
      var that = this
      console.log(num)
      localStorage.setItem('num',num)
      that.$router.push ({
        name: 'refund_way'
        })
    }
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
  .goods{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 121px;
    background: rgba(255,255,255,1);
    .goodsimg{
      width: 82.5px;
      height: 82.5px;
      background: rgba(255,255,255,1);
      border: .5px solid rgba(229,229,229,1);
      border-radius: 5px;
      margin: 19px 0 0 15px;
      img{
        width: 82.5px;
        height: 82.5px;
        border-radius: 5px;
      }
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
        font-size: 10px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(51,51,51,1);
        margin-top: 32.5px;
        .priceleft{
          font-size: 10px;
          .priceleft span{
            font-size: 14px
          }
        }
        .priceright{
          margin-right: 0.5px;
          font-size: 10px;
          span{
            font-size: 13px;
          }
        }
      }
    }
  }
  .typeway{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    // height: 147.5px;
    background: rgba(255,255,255,1);
    margin-top: 10px;
    .back{
      height: 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      // margin-top: 18.5px;
      padding-left: 15.1px;
      border-bottom: 0.5px solid #EDEDED;
      align-items: self-start;
      padding-bottom: 18.5px;
      img{
        width: 17.5px;
        height: 17.5px;
        margin-top: 18.5px;
      }
      .typeright{
        width: 100%;
        margin-left: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 14.5px;
        margin-top: 20.5px;
        .type .typename{
          font-size:14px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(0,0,0,1);
          line-height:18px;
        }
        .type .typedetail{
          font-size:11px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(170,170,170,1);
          line-height:18px;
        }
        img{
          width:6px;
          height:11.5px;
        }
      }
    }
  }
</style>
