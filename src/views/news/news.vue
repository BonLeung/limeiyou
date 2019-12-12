<template>
  <div>
    <navbar title="消息">
      <div slot="right">
        <p class="word_right">清空</p>
      </div>
    </navbar>
     <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item">
                  <div class="shop-goods">
                    <span class="name">利美旗舰店 （商品消费）</span>
                    <span class="time">12-08 10:3</span>
                  </div>
                  <p class="num">1</p>
                </li>
                <li class="nav-item">
                  <div class="shop-goods">
                    <span class="name">退款成功！</span>
                    <span class="time">12-08 10:39</span>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="shop-goods">
                    <span class="name">人工充值￥500成功！</span>
                    <span class="time">12-08 10:3</span>
                  </div>
                </li>
            </ul>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'news',
  methods: {
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .word_right{
    font-size:12px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:#333333;
  }
  .content{
    text-align: left;
    margin: 10px;
    background: #fff;
    .nav-item{
      margin:0 8px;
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
          font-family:PingFang-SC-Bold;
          font-weight:bold;
          color:rgba(51,51,51,1);
        }
        .time{
          margin-top:8px;
          font-size:10px;
          font-family:PingFang-SC-Medium;;
          font-weight:500;
          color:#999999;
        }
      }
      .num{
        display: flex;
        align-items: center;
        justify-content: center;
        width:17.5px;
        height:17.5px;
        margin-right:10px;
        margin-top:10px;
        background:rgba(253,85,94,1);
        border-radius:50%;
        font-size:12px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#FFFFFF;
      }
    }
  }
</style>
