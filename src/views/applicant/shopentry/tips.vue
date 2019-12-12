<template>
  <div class="communitysuccess">

    <navbar title="温馨提示" />

    <div class="bg">
      <div class="content">
        <p>感谢您的支持和信任！</p>
        <p>您申请的店铺资料已经成功提交</p>
        <p>我们会马上审批请耐心等待！</p>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {

  name: 'tips',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.bg{
  .content{
    background-image: url('../../../common/image/applicant/bgi.png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 210px;
    height: 135px;
    border-radius: 10px;
    margin: 50px auto;
    padding: 20px 0;
    box-sizing: border-box;
    p{
      text-align: center;
      font-size: 11px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color:rgba(120,72,47,1);
      line-height: 23.5px;
      &:first-child{
        margin-bottom: 10px;
        font-size: 15.5px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(139,66,255,1);
        line-height: 27px;
        background: linear-gradient(45deg,rgba(122,73,47,1) 0%, rgba(201,125,59,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
