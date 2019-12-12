<template>
  <div>
    <div class="top">
      <img src="../../common/image/public/icon-back.png" alt=""  @click="$router.go(-1)">
      <span class="goodsname">收货地址</span>
    </div>

    <div class="addresslist" v-if="show">
      <ul>
        <li @click="next()">
          <img src="../../common/image/public/radio-unselected.png" alt="">
          <div class="buyer">
            <div class="buyermes">
              <span>李PP</span>
              <span>13900000000</span>
            </div>
            <div class="buyeraddress">广东省广州市天河区珠江东路12号高德置地冬广场H座2608</div>
          </div>
        </li>
        <li>
          <img src="../../common/image/public/radio-unselected.png" alt="">
          <div class="buyer">
            <div class="buyermes">
              <span>李PP</span>
              <span>13900000000</span>
            </div>
            <div class="buyeraddress">广东省广州市天河区珠江东路12号高德置地冬广场H座2608</div>
          </div>
        </li>
        <li>
          <img src="../../common/image/public/radio-unselected.png" alt="">
          <div class="buyer">
            <div class="buyermes">
              <span>李PP</span>
              <span>13900000000</span>
            </div>
            <div class="buyeraddress">广东省广州市天河区珠江东路12号高德置地冬广场H座2608</div>
          </div>
        </li>
      </ul>
    </div>

    <!-- <div class="addaddress" v-else>
      <span>添加收货地址</span>
      <img src="../../common/image/public/icon-right.png" alt="">
    </div>

    <yd-popup v-model="show1" position="center" width="6.5rem">
      <div class="yd_div" style="background:#fff;overflow:hidden;border-radius: .05rem;width:100%;height:2.5rem">
        <p>你还未设置收货地址哦~</p>
        <div class="yd_childdiv">
          <div @click="show1 = false">取消</div>
          <div>设置地址</div>
        </div>
      </div>
    </yd-popup> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      show1: ''
    }
  },
  mounted() {
    var that = this
    if (that.show) {
      that.show1 = false
    } else {
      that.show1 = true
    }
  },
  methods: {
    backmoney() {
      var that = this
      that.$router.push('/backmoney')
    },
    next() {
      var that = this
      that.$router.push('/logistics')
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
  .addresslist{
    padding: 0 15px;
    ul li{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 0.5px solid #D9D9D9;
      padding-bottom: 18.5px;
      margin-top: 19.5px;
      img{
        width: 12.5px;
        height: 12.5px;
        border: 0.5px solid  rgba(83,83,83,1);
        border-radius: 50%;
      }
      .buyer{
        text-align: left;
        margin-left: 21.5px;
        .buyermes{
          font-size: 14px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(51,51,51,1);
          line-height: 18px;
          span:first-child{
            margin-right: 18.5px;
          }
        }
        .buyeraddress{
          font-size: 13px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(51,51,51,1);
          line-height: 18px;
          width: 250px;
          margin-top: 14px;
        }
      }
    }
  }
  .addaddress span{
    font-size: .28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51,51,51,1);
    line-height: .36rem;
    margin-left: .29rem;
  }
  .addaddress img{
    width: .12rem;
    height: .23rem;
    margin-right: .31rem;
  }
  .yd_div p{
    font-size: .28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51,51,51,1);
    text-align: left;
    padding-left: .46rem;
    margin-top: .37rem;
  }
  .yd_div .yd_childdiv{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1.08rem;
    padding-right: .62rem;
    font-size: .28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(239,0,45,1);
  }
  .yd_div .yd_childdiv div:first-child{
    margin-right: .77rem;
}
</style>
