<template>
  <div class="communitysuccess">

    <navbar title="社区创建" />

    <div class="bg">
      <div class="content">
        <p>恭喜你成功创建了属于自己的“社区”，带领你的“业主”，启动你的财富动车，组建你的“合伙企业”，实现你的财富梦想吧！</p>
      </div>
      <div class="btn">
        <span>确定</span>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'communitysuccess',
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
    height: 138px;
    border-radius: 10px;
    margin: 50px auto;
    padding: 20px;
    box-sizing: border-box;
    p{
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(120,72,47,1);
      line-height: 20px;
    }
  }
  .btn{
    span{
    margin: 0 auto;
    width: 300px;
    height: 35px;
    background: rgba(246,73,82,1);
    border-radius: 2.5px;
    font-size: 13px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(255,255,255,1);
    display: block;
    text-align: center;
    line-height: 35px;
    }
  }
}
</style>
