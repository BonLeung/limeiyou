<template>
  <div class="housemaster">

     <navbar title="入驻协议"/>

    <div class="list">
     </div>
      <div class="agree">
        本人已充分阅读，并且完全理解以上条款
      </div>

      <div class="btn">
        <router-link to="/shopentryform">
          <span>确定</span>
        </router-link>
      </div>
  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'shopentry',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.housemaster{
  .navbar{
  &::after{
  background-color: #fff;
  }
}
  .list{
  height: 440px;
  margin: 10px;
  padding: 10px 10px;
  box-sizing: border-box;
  background:rgba(255,255,255,1);
  box-shadow: 0px 0px 10px 0px rgba(129,129,129,0.4);
  border-radius: 2.5px;
  font-size: 12px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(51,51,51,.8);
  }
  .agree{
    margin-top: 20px;
    font-size: 12px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(51,51,51,1);
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    &::before{
      content: '';
      width: 17.5px;
      height: 17.5px;
      border: 1px solid rgba(220,220,220,1);
      border-radius: 50%;
      margin-right: 6px;
    }
      }
  .btn{
    display: flex;
    justify-content: center;
    margin-top: 16px;
    span{
    width: 300px;
    height: 35px;
    background: rgba(246,73,82,1);
    border-radius: 2.5px;
    display: block;
    line-height: 35px;
    text-align: center;
    font-size: 13px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(254,254,254,1);
    }
      }
}
</style>
