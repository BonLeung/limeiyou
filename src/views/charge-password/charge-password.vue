<template>
  <div class="body" style="min-heigth:100%">
    <navbar title="修改密码" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item" @click="toModify">
                    <span class="name">修改登录密码</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
                 <li class="nav-item">
                    <span class="name">修改/设置支付密码</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
            </ul>
      </cube-scroll>
    </div>

    <div class="bottom-word">
        <p>专属自己幸运秘密组合
        </p>
        <p class="words">会给您带来好运</p>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'charge-password',
  methods: {
    toModify() {
      this.$router.push('/charge-login')
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
  .content{
    text-align: left;
    padding: 0 16px;
    margin: 10px;
    background: #fff;
    .nav-item{
      border-bottom: 0.5px solid #e1e1e1;
      height: 42.5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .name {
        margin-left:6px;
        font-size:13px;
        color: #333333;
        }
      .icon-right{
        width:6px;
        height:10px;
      }
    }
    }
  .bottom-word{
     position:fixed;
     bottom:32px;
     left:123px;
     text-align: center;
     font-size:13px;
     font-family:PingFang-SC-Medium;
     font-weight:500;
     color:rgba(51,51,51,1);
     .words{
       margin-top:5px
     }
  }

</style>
