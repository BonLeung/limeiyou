<template>
  <div>
    <navbar title="安全设置" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item" @click="charge">
                    <span class="name">修改手机号码</span>
                    <div>
                      <span class="phone">139****5678</span>
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
  name: 'install-security',
  methods: {
    charge() {
      this.$router.push('/chargePhone')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
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
      .phone{
        margin-right:24.5px;
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
