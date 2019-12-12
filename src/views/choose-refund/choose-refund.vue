<template>
  <div>
    <div class="top">
      <img src="../../common/image/public/icon-back.png" alt=""  @click="$router.go(-1)">
      <span class="goodsname">选择退款</span>
    </div>

    <div class="list">
      <div class="logi back">
        <div class="left">
          <span>*</span>
          <span>物流公司</span>
        </div>
        <div class="right">
          <input type="text" placeholder="请选择物流公司">
          <img src="../../common/image/me/icon-right.png" alt="">
        </div>
      </div>
      <div class="orderno back">
        <div class="left">
          <span>*</span>
          <span>单号填写</span>
        </div>
        <div class="right">
          <input type="text" placeholder="请填写单号">
          <img src="../../common/image/refund/saoyisao@2x.png" alt="" style="width:18.5px;height:18.5px;">
        </div>
      </div>
    </div>

    <div class="footbot">提交</div>

  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
  .top{
    width: 100%;
    height: 49px;
    background:rgba(255,255,255,1);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #EDEDED;
    img{
      width: 6.5px;
      height: 13px;
      position: relative;
      left: 15px;
    }
    .goodsname{
      font-size: 16px;
      font-family:PingFang-SC-Medium;
      font-weight: 500;
      color: #333333;
      margin-right: 156px;
    }
  }
  .list{
    width: 100%;
    background: rgba(255,255,255,1);
    height: 100.5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .back{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 18px 0 0 16px;
      .left{
        text-align: left;
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #333333;
        line-height: 18px;
        span:first-child{
          color: #E30808;
        }
      }
      .right{
        width: 73%;
        margin-left: 19.5px;
        font-size: 14px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(170,170,170,1);
        line-height: 18px;
        display: flex;
        justify-content: space-between;
        input{
          width: auto;
          outline:medium
        }
        img{
          width: 6px;
          height: 11.5px;
        }
      }
    }
  }
   .footbot{
    width: 300px;
    height: 35px;
    text-align: center;
    // border: 2.5px solid rgba(51,51,51,1);
    border-radius: 2.5px;
    margin: 9px 0 0 37.5px;
    font-size: 14px;
    font-family: PingFang-SC-Medium;
    background:rgba(246,73,82,1);
    font-weight: 500;
    color: #FFFFFF;
    line-height: 30px;
    padding-top: 7.5px;
    position: relative;
    top: 80px;
  }
</style>


