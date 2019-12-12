<template>
  <div class="applicantsucess">

    <navbar title="申请成功" />

    <div class="bg-card">
      <div class="bigfont">
        <span>恭喜您</span>
        <span>申请店长成功</span>
      </div>
      <div class="litterfont">
        <span>独享店长特权</span>
        <span>创建属于自己的店铺吧！</span>
      </div>
      <div class="shopkeeper">
        商家入驻
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'applysuccess',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.applicantsucess{
 .bg-card{
   position: fixed;
   top: 150px;
   left: 35px;
   height: 340px;
   width: 300px;
   background-size: 100%;
   background-repeat: no-repeat;
   background-image: url('../../../common/image/applicant/card-bg.png');
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
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color:rgba(135,89,64,1);
    line-height: 27px;
    display: block;
    }
  }
  .shopkeeper{
    font-size: 14.5px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    line-height: 23px;
    position: absolute;
    bottom: 62px;
    left: 128px;
     color:rgba(120,72,47,1);
  }
 }
}
</style>
