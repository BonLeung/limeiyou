<template>
  <div class="body">
    <navbar title="我的利美佳人" />
    <div class="content">
      <cube-scroll>
            <div class="welfare-type">
              <div class="welfare-left">
                <p class="cumulative">累计推广分享获利</p>
                <p class="price">￥8000.00</p>
              </div>
              <div class="line"></div>
              <div class="welfare-left">
                <p class="cumulative">上次分享推广获利</p>
                <p class="price">￥8000.00</p>
              </div>
            </div>
            <div class="women-midd">
              <p>我的利美佳人</p>
              <p>共50人</p>
            </div>
            <ul class="nav-list">
                <li class="nav-item">
                  <span class="name">小月亮</span>
                </li>
                <li class="nav-item">
                  <span class="name">小月亮</span>
                </li>
                <li class="nav-item">
                <span class="name">小月亮</span>
                </li>
            </ul>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'myWomen',
  methods: {
    toInfo() {
      this.$router.push('/personalInfo')
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
.body{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.navbar{
  &::after{
    background-color: #fff;
  }
}
  .content{
    text-align: left;
    background: #fff;
    // margin:0 16px;
    .welfare-type{
      margin-top: 20px;
      width:345px;
      height:85px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 7.5px 0px rgba(169,169,169,0.3);
      border-radius:2.5px;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      margin-left:16px;
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
      margin-bottom:5.5px
    }
    .women-midd{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-top:25.5px;
      margin-left:16px;
      margin-right:16px;
      p{
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
    .nav-list{
      margin-top:28px;
    .nav-item{
      width:345px;
      height:40px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 7.5px 0px rgba(169,169,169,0.3);
      border-radius:2.5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content:flex-start;
      font-size:13px;
      font-family:PingFang-SC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      // margin-top:5px;
      // margin-left:16px;
      // margin-bottom:5px;
      margin:10px 16px;
      .name{
        margin-left:15px
      }
    }
    }
  }
</style>
