<template>
  <div class="application">

    <navbar title="申请店长" />

    <div class="body">
      <div class="avator">
        <span><img src="../../../common/image/applicant/text.png" alt=""></span>
        <span>更换头像></span>
      </div>

      <div class="form">
        <ul>
          <li><span>真实姓名：</span><span>根据业主资料自动形成</span></li>
          <li><span>身份证号：</span><span>根据业主资料自动形成</span></li>
          <li><span>联系方式：</span><span>根据业主资料自动形成</span></li>
          <li><span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：</span><span>根据业主资料自动形成</span></li>
          <li><span>微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信：</span><span>根据业主资料自动形成</span></li>
          <li><span>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q：</span><span>根据业主资料自动形成</span></li>
          <li><span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><span>根据业主资料自动形成</span></li>
          <li><span>家庭住址：</span><span>根据业主资料自动形成</span></li>
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
           </ul>
      </div>

      <div class="btn">
        <router-link to="/applysuccess">
            <span>提交</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../../components/navbar/navbar'

export default {
  name: 'shopkeeper',
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
  .form{
    border:1px solid rgba(229,229,229,1);
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
        &:last-child{
          font-size: 13px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(51,51,51,1);
        }
      }
    }
  }
  .validate{
    margin-top: 20px;
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
       img{
        width:169px;
        height: 100px;
        background:rgba(229,229,229,1);
        border:1px solid rgba(229,229,229,1);
        border-radius:10px;
        box-sizing: border-box;
       }
       span{
         margin-top: 8px;
         font-size: 12px;
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
