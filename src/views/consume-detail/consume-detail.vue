<template>
  <div>
    <navbar title="消费明细" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item" @click="toInfo">
                  <div class="shop-goods">
                    <span class="name">利美旗舰店 （商品消费）</span>
                    <span class="time">2018-12-25  10:48</span>
                  </div>
                  <p class="num">+20</p>
                </li>
                <li class="nav-item" @click="toInfo">
                  <div class="shop-goods">
                    <span class="name">利美旗舰店 （商品消费）</span>
                    <span class="time">2018-12-25  10:48</span>
                  </div>
                  <p class="num">+20</p>
                </li>
                <li class="nav-item" @click="toInfo">
                  <div class="shop-goods">
                    <span class="name">利美旗舰店 （商品消费）</span>
                    <span class="time">2018-12-25  10:48</span>
                  </div>
                  <p class="num">+20</p>
                </li>
            </ul>
      </cube-scroll>
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
  .content{
    text-align: left;
    padding: 0 16px;
    margin: 10px;
    background: #fff;
    .nav-item{
      border-bottom: 0.5px solid #e1e1e1;
      padding:16px 0;
      height: 42.5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .shop-goods{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        .name {
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .time{
          margin-top:15px;
          font-size:12px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
      }
      .num{
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
  }
</style>
