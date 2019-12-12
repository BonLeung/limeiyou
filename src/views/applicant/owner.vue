<template>
  <div class="owner">
    <navbar title="申请业主" />
    <div class="form">
      <div class="form-div">
        <ul class="zige">
          <li>业主资格</li>
          <li>1、至少拥有N个闺蜜</li>
          <li>2、完善业主资料</li>
        </ul>
        <ul class="tequan">
          <li>业主特权</li>
          <li>1、获得“推广分享”资格</li>
          <li>2、获得“业主折扣”资格</li>
          <li>3、获得“申请店长”资格</li>
          <li>4、获得“申请开店”资格</li>
          <li>5、获得“申请楼长”资格</li>
        </ul>
      </div>
    </div>

    <div class="btn">
      <router-link to="/application">
       <span>确定</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'owner',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.owner{
.navbar{
  &::after{
  background-color: #fff;
  }
}
.form{
  height: 295px;
  font-size: 13px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(51,51,51,.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  .form-div{
     width: 355px;
     height: 295px;
     background:rgba(255,255,255,1);
     box-shadow:0px 0px 10px 0px rgba(129,129,129,0.4);
     border-radius: 2.5px;
     box-sizing: border-box;
     padding: 17px 22px;
     .zige{
       margin-bottom: 10px;
       li{
           height: 28px;
           font-weight: 400;
          &:nth-of-type(1){
            padding-bottom: 6px;
            font-weight:bold;
          }
       }
     }
     .tequan{
       li{
         height: 28px;
          &:nth-of-type(1){
            padding-bottom: 6px;
            font-weight:bold;
          }
       }
     }
  }
}
.btn{
  margin-top: 40px;
  display: flex;
  justify-content: center;
  span{
    width: 300px;
    height: 35px;
    background: rgba(246,73,82,1);
    border-radius: 2.5px;
    font-size: 13px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(254,254,254,1);
    display: block;
    text-align: center;
    line-height: 35px;
  }
}
}
</style>
