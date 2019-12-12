<template>
  <div class="housemaster">

     <navbar title="申请区长"/>

      <div class="list">
        <cube-scroll>
          <ul class="bigfont">
            <li>区长资格</li>
            <li>1、至少拥有N个楼长</li>
            <li>2、完善区长资料</li>
          </ul>

          <ul class="bigfont">
            <li>区长特权</li>
            <li>1、获得“推广分享”的资格</li>
            <li>2、获得“区长折扣”的资格</li>
            <li>3、获得“申请店长”的资格</li>
            <li>4、获得“申请开店”的资格</li>
            <li>5、获得“区长薪金”的资格</li>
            <li>6、获得“申请合伙企业”的资格</li>
            <li>7、获得“申请合伙企业负责人”的资格</li>
            <li>8、享有法律赋予“合伙企业负责人”的其它权利和职责</li>
          </ul>

          <ul class="bigfont">
            <li>“区长”主要职责</li>
            <li>1、负责组建“合伙企业”，任“合伙企业负责人”</li>
            <li>2、对自己的“社区”及“合伙企业”尽服务和管理的职责</li>
          </ul>
        </cube-scroll>
      </div>

      <div class="agree-wrap">
         <div class="agree">
          本人已充分阅读，并且完全理解以上条款
        </div>

        <div class="btn">
          <router-link to="/wdapplication">
            <span>确定</span>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'warden',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.housemaster{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .navbar{
    &::after{
    background-color: #fff;
    }
  }
  .list{
    position: absolute;
    top: 48px;
    left: 15px;
    right: 15px;
    bottom: 118px;
    padding: 0 20px 18px;
    box-sizing: border-box;
    background:rgba(255,255,255,1);
    box-shadow: 0px 0px 10px 0px rgba(129,129,129,0.4);
    border-radius: 2.5px;
    font-size: 13px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(51,51,51,.8);
    .bigfont{
      margin-top: 12.5px;
    }
    li{
      line-height: 26px;
      text-align: justify;
      &:first-child{
        font-size: 13px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(51,51,51,1);
      }
    }
  }
  .agree-wrap {
    position: absolute;
    bottom: 36px;
    left: 0;
    right: 0;
    .agree{
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
}
</style>
