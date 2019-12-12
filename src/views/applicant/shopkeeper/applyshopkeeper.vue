<template>
  <div class="housemaster">

     <navbar title="申请店长"/>

    <div class="list">
        <ul>
          <li class="rule">店长申请规则</li>
          <li>1、店长申请资格：必须成为社区“业主”</li>
          <li>2、店长职责：</li>
          <li><span>（1）</span><span>负责所管店铺的维护工作；</span> </li>
          <li class="kuge"><span>（2）</span><span>根据季节及销量情况，选择商品，及时上下架店铺的商品；</span></li>
          <li class="kuge"><span>（3）</span><span>负责处理订单，督促商家及时发货，并且做好跟踪服务工作。</span></li>
          <li><span>（4）</span><span>完成公司赋予店长的其它工作。</span> </li>
        </ul>
     </div>
      <div class="agree">
        本人已充分阅读，并且完全理解以上条款
      </div>

      <div class="btn">
        <router-link to="/shopkeeper">
          <span>确定</span>
        </router-link>
      </div>
  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'applyshopkeeper',
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
  margin: 10px;
  padding:10px 10px;
  box-sizing: border-box;
  background:rgba(255,255,255,1);
  box-shadow: 0px 0px 10px 0px rgba(129,129,129,0.4);
  border-radius: 2.5px;
  font-size: 13px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(51,51,51,.8);
  ul{
    .rule{
    font-size: 13px;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51,51,51,1);
  }
   li{
      height: 40px;
      line-height: 22px;
      display: flex;
      span{
        display: inline-block;
        padding: 6px 0;
        &:first-child{
          padding-left: 10px;
        }
      }
    }
    .kuge{
      margin-bottom: 10px;
    }
  }
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
      width: 17px;
      height: 17px;
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
