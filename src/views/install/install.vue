<template>
  <div class="body">
    <navbar title="设置" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item" @click="toInfo">
                    <span class="name">个人资料</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
                 <li class="nav-item" @click="security">
                    <span class="name">安全设置</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
                  <li class="nav-item">
                    <span class="name">注销账号</span>
                    <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </li>
            </ul>

         <div class="signOut">
           <p class="outName">退出当前账号</p>

        </div>

      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'install',
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
      .icon-right{
        width:6px;
        height:10px;
      }
    }
    .signOut{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      width:300px;
      height: 35px;
      background:rgba(246,73,82,1);
      border-radius:2.5px;
      margin:100px auto;
      text-align: center;
      .outName{
        font-size:14px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
