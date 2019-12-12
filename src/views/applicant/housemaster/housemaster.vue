<template>
  <div class="housemaster">

     <navbar title="申请楼长"/>

      <div class="list">

        <ul>
          <li>楼长资格</li>
          <li>1、至少拥有N个业主</li>
          <li>2、完善楼长资料</li>
        </ul>

         <ul class="bigfont">
           <li>楼长特权</li>
           <li>1、获得“推广分享”的资格</li>
           <li>2、获得“楼长折扣”的资格</li>
           <li>3、获得“申请店长”的资格</li>
           <li>4、获得“申请开店”的资格</li>
           <li>5、获得“楼长薪金”的资格</li>
           <li>6、获得“申请区长”的资格</li>
           <li>7、获得“申请有限合伙人”的资格</li>
           <li>8、获得成为“有限合伙人”组建合伙企业的资格</li>
           <li>9、享有法律赋予“有限合伙人”的其它权利和职责</li>
         </ul>

         <ul class="bigfont">
           <li>“楼长”主要职责</li>
           <li>1、参与“合伙企业”的组建和管理</li>
           <li>2、对隶属“业主”及“闺蜜”尽服务和管理的职责</li>
         </ul>
      </div>

      <div class="agree">
        本人已充分阅读，并且完全理解以上条款
      </div>

      <div class="btn">
        <router-link to="/hmapplication">
          <span>确定</span>
        </router-link>
      </div>
  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'housemaster',
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
  margin: 15px;
  padding: 14px 14px;
  box-sizing: border-box;
  background:rgba(255,255,255,1);
  box-shadow: 0px 0px 10px 0px rgba(129,129,129,0.4);
  border-radius: 2.5px;
  font-size: 13px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(51,51,51,.8);
  .bigfont{
    margin-top: 16px;
  }
  li{
    height: 26px;
    line-height: 26px;
    &:first-child{
    font-size: 13px;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51,51,51,1);
    }
  }
  }
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
</style>
