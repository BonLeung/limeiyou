<template>
  <div class="application">

    <navbar title="商家入驻" />

    <div class="body">
      <div class="avator">
        <span><img src="../../../common/image/applicant/text.png" alt=""></span>
        <span>更换头像></span>
      </div>

       <div class="owner">
          <div class="quzhang">
            <span>店铺类别：</span>
            <span>直营（招商）</span>
          </div>
          <div class="shequ">
            <span>开店数量</span>
            <span>&nbsp;&nbsp;&nbsp;(X)</span>
          </div>
       </div>

      <div class="form">
        <ul>
          <li><span>单位名称：</span><input type="text"></li>
          <li><span>单位地址：</span><input type="text"></li>
          <li><span>邮箱地址：</span><input type="text"></li>
          <li><span>联系方式：</span><input type="text"></li>
          <li><span>法人姓名：</span><input type="text"></li>
          <li><span>法人身份证号码：</span><input type="text"></li>
          <li><span>店长手机：</span><input type="text"></li>
          <li><span>商品类别：</span><input type="text"></li>
        </ul>
      </div>

      <div class="validate">
           <ul>
             <li>
               <img src="../../../common/image/applicant/id-face.png" alt="">
               <span>上传身份证正面</span>
             </li>
             <li>
               <img src="../../../common/image/applicant/id-back.png" alt="">
               <span>上传身份证反面</span>
             </li>
             <li class="jianju">
               <img src="../../../common/image/applicant/business licence.png" alt="">
               <span>上传营业执照</span>
             </li>
             <li class="jianju">
               <img src="../../../common/image/applicant/file.png" alt="">
               <span>上传附件</span>
             </li>
           </ul>
      </div>

      <div class="btn">
        <router-link to="/tips">
            <span>提交</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'shopentryform',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>

.application{
  .body{
    padding: 15px;
    box-sizing: border-box;
    font-size: 13px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(51,51,51,.6);
   .avator{
     display: flex;
     justify-content: flex-start;
     align-content: center;
     margin-bottom: 20px;
    span{
      align-self: center;
      padding-left: 12px;
      font-size: 12px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(153,153,153,1);
      &:first-child{
        width: 47.5px;
        height: 47.5px;
        padding: 2.5px;
        border-radius: 50%;
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 0px rgba(129,129,129,0.4);
       img{
      width: 42.5px;
      height: 42.5px;
      border-radius: 50%;
    }
      }
    }
  }
  .owner{
    display: flex;
    align-items: center;
    padding: 0 6px;
    .shequ{
      padding-left: 55.5px;
    }
    span{
      font-size: 13px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(51,51,51,1);
    }
  }
  .form{
    border: 1px solid rgba(229,229,229,1);
    border-radius: 2.5px;
    color:rgba(153,153,153,1);
    padding: 0 5px;
    margin-top: 15px;
    li{
      height: 42px;
      display: flex;
      align-content: center;
      border-bottom: 1px solid #F4F4F4;
      &:last-child{
        border-bottom: none;
      }
      span{
        align-self: center;
        &:first-child{
        padding-left: 15.5px;
      }
      }
      input{
       outline: none;
       align-self: center;
      }
    }
  }
  .validate{
    margin-top: 20px;
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
       img{
        width: 169px;
        height: 100px;
        background:rgba(229,229,229,1);
        border: 1px solid rgba(229,229,229,1);
        border-radius: 5px;
        box-sizing: border-box;
       }
       span{
         margin-top: 8px;
       }
      }
      .jianju{
        margin-top: 25px;
        img{
         border-radius: 10px;
        }
      }
    }
  }
  .btn{
    display: flex;
    justify-content: center;
    margin-top:  26px;
    span{
    width: 300px;
    height: 35px;
    background: rgba(246,73,82,1);
    border-radius: 2.5px;
    line-height: 35px;
    text-align: center;
    color:rgba(255,255,255,1);
    display: block;
    }
  }
  }
}
</style>
