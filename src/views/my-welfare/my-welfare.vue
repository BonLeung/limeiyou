<template>
  <div class="body">
    <navbar title="我的利美福利">
      <div slot="right" @click="toRouls">
        <p class="word_right" @click="toRouls">福利规则</p>
      </div>
    </navbar>
    <div class="content">
      <cube-scroll>
        <div class="user-wrap">
          <div class="avatar-wrap">
            <img src="../../common/image/test/avatar.png" alt="" class="avatar">
          </div>
          <div class="user-info">
            <p class="identity">我的身份：业主</p>
            <p class="integral">利美积分：8000</p>
            <p class="integral_welfare">积分福利：4A/个</p>
          </div>
        </div>
            <ul class="nav-list">
                <li class="nav-item" @click="toDetail">
                    <span class="name">消费明细</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
                <li class="nav-item" @click="toWelfareDetail">
                    <span class="name">福利明细</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
                 <li class="nav-item" @click="toWaitDetail">
                    <span class="name">等待福利人数：20个</span>
                    <div>
                      <span class="phone">等待明细</span>
                      <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
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
  name: 'my-welfare',
  methods: {
    toRouls() {
      this.$router.push('/welfareRules')
    },
    toDetail() {
      this.$router.push('/consume-detail')
    },
    toWelfareDetail() {
      this.$router.push('/welfare-detail')
    },
    toWaitDetail() {
      this.$router.push('/waitfor-detail')
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
  .word_right{
    font-size:12px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(246,73,82,1);
  }
  .content{
    text-align: left;
    padding: 0 15px;
    background: #fff;
     .user-wrap {
      width:345px;
      height:160px;
      display: flex;
      // flex-direction: row;
      background-image: url("../../common/image/mall/bg.png");
      background-size: 100%;
      .avatar-wrap {
        margin-top:14px;
        margin-left:9.5px;
        width: 70.5px;
        height: 71px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0px 0px 10px 0px rgba(255,237,175,0.5);
        .avatar {
          width: 70.5px;
          height: 71px;
          background-color: #ccc;
          border-radius: 50%;
        }
      }
      .user-info{
        margin-top:21.5px;
        margin-left:72.5px;
        .identity{
          font-size:14px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(34,34,34,1);
        }
        .integral{
          font-size:12px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          margin-top:19px
        }
        .integral_welfare{
          font-size:12px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          margin-top:19.5px
        }
      }
     }
    .nav-item{
      border-bottom: 0.5px solid #e1e1e1;
      height: 42.5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .name {
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        }
      .phone{
        margin-right:13.5px;
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(34,34,34,1);
        }
      .icon-right{
        width:6px;
        height:10px;
      }
    }

  }
</style>
