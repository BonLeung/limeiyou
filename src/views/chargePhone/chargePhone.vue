<template>
  <div class="body">
    <navbar title="修改手机号码" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item">
                    <span class="name">手机号码</span>
                    <div>
                      <input type="number" placeholder="请输入新手机号码" class="input_num" style="margin-right:77px">
                    </div>
                </li>
                 <li class="nav-item">
                    <span class="name">验证码</span>
                    <div class="nav-right">
                      <input type="number" placeholder="请输入验证码" class="input_num">
                      <div class="yzmCode">
                        <span>获取验证码</span>
                      </div>
                    </div>
                </li>
            </ul>

         <div class="signOut"  @click="security">
           <p class="outName">确认</p>
        </div>

      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'chargePhone',
  methods: {
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
          flex-direction: row;
          justify-content: space-between;
        }
        .input_num{
          font-size:14px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          outline: none;
        }
        .yzmCode{
          font-size:11px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(246,73,82,1);
          width:75px;
          height:25px;
          border:1px solid rgba(246,73,82,1);
          border-radius:2.5px;
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center
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
