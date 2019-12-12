<template>
  <div class="applicantsucess">

    <navbar title="申请成功" />

    <div class="form">
      <ul>
        <li><span>我的楼长:</span><span>飞鸽</span></li>
        <li><span>我的区长:</span><span>春晓</span></li>
        <li><span>我的市区:</span><span>明月豪庭</span></li>
      </ul>
    </div>

    <div class="bg-card">
      <div class="bigfont">
        <span>恭喜您</span>
        <span>成为【xx社长】业主</span>
      </div>
      <div class="litterfont">
        <span>同时获得了“申请店长”资格</span>
        <span>业主折扣:(B)</span>
        <span>（X-B×10）元/个积分</span>
      </div>
      <div class="shopkeeper">申请店长</div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'applicantsucess',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.applicantsucess{
 .form{
  margin:15px 20px;
  font-size: 13px;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(153,153,153,.8);
  li{
    height: 46px;
    line-height: 46px;
    span{
      &:last-child{
        color:rgba(51,51,51,1);
        padding-left: 6px;
      }
    }
  }
 }
 .bg-card{
   position: fixed;
   top: 200px;
   left: 35px;
   height: 340px;
   width: 300px;
   background-size: 100%;
   background-repeat: no-repeat;
   background-image: url('../../common/image/applicant/card-bg.png');
  .bigfont{
     position: absolute;
     top: 54px;
     left: 64px;
    span{
    font-size: 15.5px;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color:rgba(139,66,255,1);
    line-height: 27px;
    background: linear-gradient(45deg,rgba(122,73,47,1) 0%, rgba(201,125,59,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    }
  }
  .litterfont{
    position: absolute;
    top: 112px;
    left: 62px;
    span{
    font-size: 11px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(135,89,64,1);
    line-height: 27px;
    display: block;
    &:last-child{
      float: right;
    }
    }
  }
  .shopkeeper{
    font-size: 14.5px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(120,72,47,1);
    line-height: 23px;
    position: absolute;
    bottom: 62px;
    left: 128px;
  }
 }
}
</style>
