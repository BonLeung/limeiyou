<template>
  <div class="welfare-detail-page">
    <navbar title="福利明细" />
    <div class="content">
      <cube-scroll>
            <div class="welfare-type">
              <div class="welfare-left">
                <p class="cumulative">累计福利</p>
                <p class="price">￥8000.00</p>
              </div>
              <div class="line"></div>
              <div class="welfare-left">
                <p class="cumulative">上次福利</p>
                <p class="price">￥8000.00</p>
              </div>
            </div>
            <div class="welfare-detail">福利明细</div>
            <ul class="nav-list">
                <li class="nav-item" @click="toInfo">
                  <p class="time">2018-12-25</p>
                  <p class="num">+￥100(-5个)</p>
                </li>
                <li class="nav-item" @click="toInfo">
                  <p class="time">2018-12-25</p>
                  <p class="num">+￥100(-5个)</p>
                </li>
                <li class="nav-item" @click="toInfo">
                  <p class="time">2018-12-25</p>
                  <p class="num">+￥100(-5个)</p>
                </li>
            </ul>
      </cube-scroll>
    </div>
    <div class="bottom-word">
              <p>百舸争流千帆竞</p>
              <p>借海扬帆奋者先</p>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'consume-detail',
  methods: {
    toInfo() {
      // this.$router.push('/personalInfo')
    },
    security() {
      this.$router.push('/install-security')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .welfare-detail-page {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .content{
      position: absolute;
      top: 44px;
      right: 0;
      bottom: 70px;
      left: 0;
      text-align: left;
      background: #fff;
      // margin:0 16px;
      .welfare-type{
        width:345px;
        height:85px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 7.5px 0px rgba(169,169,169,0.3);
        border-radius:2.5px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin:10px 16px;
        .welfare-left{
          width:135px;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .cumulative{
            font-size:12px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .price{
            font-size:15px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(51,51,51,1);
            margin-top:19.5px;
          }
        }
        .line{
          width:0.5px;
          height:55px;
          background:rgba(217,217,217,1);
          margin-top:15.5px
        }
      }
      .welfare-detail{
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-top:25.5px;
        margin-bottom:5.5px;
        margin-left:16px;
      }
      .nav-item{
        border-bottom: 0.5px solid #e1e1e1;
        height: 42.5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin:10px 16px;
          .time{
            font-size:13px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .num{
            font-size:13px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
        }
      }
    }
    .bottom-word{
        position: absolute;
        bottom: 32px;
        left: 0;
        right: 0;
        p {
          display: flex;
          justify-content: center;
          font-size:13px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height: 1.5
        }
    }
  }
</style>
