<template>
  <div>
    <div class="top">
      <img src="../../common/image/public/icon-back.png" alt=""  @click="$router.go(-1)">
      <span class="goodsname">选择退款</span>
    </div>

    <div class="goods">
      <div class="goodsimg"><img src="../../common/image/test/goods-img.png" alt=""></div>
      <div class="goodsdetail">
        <p class="goodsname1">产品名称产品名称产品名称</p>
        <div class="goodsize">
          <div class="sizes">
            <span>颜色；</span>
            <span>尺寸</span>
          </div>
          <span class="num">x1</span>
        </div>
        <div class="price">
          <div class="priceleft">
            ¥
            <span>848</span>
          </div>
          <div class="priceright">
            <span>实付金额 </span>¥
            <span>848</span>
          </div>
        </div>
      </div>
    </div>

    <div class="type" v-if="show">
      <div class="reason back">
        <div class="backtop">
          <span>*</span>
          <span>退款原因</span>
        </div>
        <div class="tuikuan">
          <input type="text"  placeholder="请选择退货理由" disabled readonly>
          <img class="downimg" src="../../common/image/refund/图层2拷贝8@2x.png" alt=""  @click="add">
        </div>
      </div>
      <div class="amount back">
        <div class="backtop">
          <span>*</span>
          <span>退款金额</span>
        </div>
        <div>
          <input type="text"  placeholder="最多¥848" >
        </div>
      </div>
    </div>

    <div class="type" v-else>
      <div class="reason back">
        <div class="backtop">
          <span>*</span>
          <span>退款原因</span>
        </div>
        <div>
          <input type="text"  placeholder="请选择退货理由" >
          <img class="downimg" src="../../common/image/refund/图层2拷贝8@2x.png" alt=""  @click="add">
        </div>
      </div>
      <div class="amount back">
        <div class="backtop">
          <span>*</span>
          <span>备注</span>
        </div>
        <div>
          <textarea type="text" rows="3" placeholder="请备注理由" maxlength="100" style="height:1rem;padding-bottom:.35rem;border: unset;" ></textarea>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="foottop" @click="imgload($event)">
        <p>上传图片</p>
        <img src="../../common/image/refund/+@2x.png" alt="">
        <input type="file" accept="image/*" multiple id="upload">
      </div>
      <router-link tag="div" to="/address" class="footbot" @click="goaddress()">提交</router-link>

    </div>

    <transition name="slide">
      <div class="select-attr-modal" v-show="modalShow">
        <div class="top1">
        <span>退货原因</span>
        <img src="../../common/image/refund/60f60759a0ab479de75bb57ff6efa706@2x_60.png" alt="" @click="hideModal">
      </div>
      <div class="sidelist">
        <ul>
          <li>商品质量问题</li>
          <li>拍错了</li>
          <li>买重复了</li>
          <li>快递太慢</li>
        </ul>
      </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-show="modalShow" @click="hideModal"></div>
    </transition>

  </div>
</template>
<script>
export default {
  data(){
    return{
      num:'',
      show:true,
      show1:false,
      imgs:[],//上传图片路径
      modalShow: false
    }
  },
  mounted(){
    var that = this
    that.num = localStorage.getItem('num')
    if(that.num == 0){
      that.show = true
    }
    else{
      that.show = false
    }
  },
  methods:{
    showModal() {
      this.modalShow = true
    },
    hideModal() {
      this.modalShow = false
    },
    add() {
      this.showModal()
    },
    goaddress(){
      var that = this
      that.$router.push({name:'chooseaddress'})
    },
    imgload(){

    }
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
  .goods{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 121px;
    background: rgba(255,255,255,1);
    .goodsimg{
      width: 82.5px;
      height: 82.5px;
      background: rgba(255,255,255,1);
      border: .5px solid rgba(229,229,229,1);
      border-radius: 5px;
      margin: 19px 0 0 15px;
      img{
        width: 82.5px;
        height: 82.5px;
        border-radius: 5px;
      }
    }
    .goodsdetail{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      margin: 18.5px 15px 19.5px 15px;
      .goodsname1{
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(34,34,34,1);
      }
      .goodsize{
        width: 250px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(153,153,153,1);
        margin-top: 15.5px;
      }
      .price{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 10px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(51,51,51,1);
        margin-top: 32.5px;
        .priceleft{
          font-size: 10px;
          .priceleft span{
            font-size: 14px
          }
        }
        .priceright{
          margin-right: 0.5px;
          font-size: 10px;
          span{
            font-size: 13px;
          }
        }
      }
    }
  }
  .type{
    width: 100%;
    height: 170px;
    background: rgba(255,255,255,1);
    margin-top: 10px;
    padding-bottom: 21.5px;
    .back{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      height: 50%;
      position:relative;
      .backtop{
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(227,8,8,1);
        line-height: 18px;
        margin: 17px 0 0 14.5px;
        span:last-child{
          color: #333333;
        }
      }
      input,textarea{
        width: 334px;
        height: 32.5px;
        border-radius: 3px;
        margin-left: 15px;
        margin-top: 10.5px;
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(153,153,153,1);
        line-height: 18px;
        padding-left: 11px;
        background:rgba(238,238,238,1);
        outline: none;
      }
      .downimg{
        width:11.5px;
        height:6px;
        position: relative;
        right: 25.5px;
      }
    }
  }
  .foot{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
    background: rgba(255,255,255,1);
    .foottop{
      text-align: left;
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51,51,51,1);
      line-height: 18px;
      margin:17px 0 92.5px 15.5px;
      img{
        width: 92.5px;
        height: 92.5px;
        border: 0.5px solid rgba(229,229,229,1);
        border-radius: 3px;
        margin-top: 15.5px;
      }
      input{
        position: absolute;
        width: 92.5px;
        height: 92.5px;
        margin-top: 15.5px;
        left: 15.5px;
        opacity: 0;
      }
    }
    .footbot{
      width: 300px;
      height: 35px;
      background:rgba(246,73,82,1);
      border: 1px solid;
      border-radius: 2.5px;
      margin: 9px 0 0 37.5px;
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 35px;
      position: relative;
      bottom: 21.5px;
      text-align: center;
    }
  }
  .top1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51,51,51,1);
    line-height: 18px;
    margin-top: 11.5px;
    img{
      width: 11px;
      height: 11px;
      position: relative;
      left: 130.5px;
    }
  }
  .sidelist{
    text-align: left;
    font-size: 13px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51,51,51,1);
    line-height: 18px;
    padding-left: 18.5px;
    margin-bottom: 15px;
  }
  .sidelist ul li{
    margin-top: 32px
  }
  .select-attr-modal {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 3;
  }
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 2;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(0, 100%, 0);
  }
</style>


