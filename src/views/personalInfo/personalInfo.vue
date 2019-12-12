<template>
  <div class="body">
    <navbar title="个人信息" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item"  style="padding:15px 0;">
                    <span class="name">个人头像</span>
                    <div class="nav-right">
                      <img src="../../common/image/test/avatar.png" alt="" class="head_pic">
                      <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                    </div>
                </li>
                <li class="nav-item">
                    <span class="name">我的昵称</span>
                    <div class="nav-right">
                      <span class="nickName">kelly1988</span>
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
  name: 'personalInfo',
  methods: {
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
        margin-left:12px;
        font-size:13px;
        color: #333333;
        }
      .nav-right{
        display: flex;
        justify-content: flex-start;
        align-items: center
      }
      .phone{
        margin-right:24.5px;
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(34,34,34,1)
        }
      .head_pic{
        width:45px;
        height:45px;
        margin-right:15px
        }
      .icon-right{
        width:6px;
        height:10px
      }
      .nickName{
        font-size:14px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(34,34,34,1);
        margin-right:15px
      }
    }

  }
</style>
