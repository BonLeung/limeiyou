<template>
  <div>
    <navbar title="我的收货地址">
      <div slot="right">
        <p class="word_right" @click="toAdd">添加</p>
      </div>
    </navbar>
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item">
                  <div class="nav-con">
                    <div class="receiceInfo">
                      <p class="user-info">
                        <span class="name">李PP</span>
                        <span class="phone">13900000000</span>
                      </p>
                      <div class="default">
                        <span class="address">广东省广州市天河区珠江东路12号高德 置地冬广场H座2608</span>
                      </div>
                    </div>
                    <div class="edit">
                      编辑
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
                   <li class="nav-item">
                  <div class="nav-con">
                    <div class="receiceInfo">
                      <p class="user-info">
                        <span class="name">李PP</span>
                        <span class="phone">13900000000</span>
                      </p>
                      <div class="default">
                        <div class="words">
                          默认
                        </div>
                        <span class="address">广东省广州市天河区珠江东路12号高德 置地冬广场H座2608</span>
                      </div>
                    </div>
                    <div class="edit">
                      编辑
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
            </ul>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'my-address',
  methods: {
    toAdd() {
      this.$router.push('/add-address')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .word_right{
    font-size:12px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(246,73,82,1);
  }
  .content{
    text-align: left;
    background: #fff;
    .nav-item{
      margin-left:19.5px;
      margin-right:10px;
      padding-top:16px;
      display: flex;
      flex-direction: column;
      justify-content:flex-end;
      align-items: center;
      .nav-con{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      .receiceInfo {
          width:261.5px;
          display: flex;
          flex-direction: column;
          margin-right:34.5px;
          margin-left:8px;
          .user-info{
            display: flex;
            flex-direction: row;
            .name{
              font-size:13px;
              font-family:PingFang-SC-Medium;
              font-weight:500;
              color:rgba(51,51,51,1);
            }
            .phone{
              margin-left:23px;
              font-size:13px;
              font-family:PingFang-SC-Medium;
              font-weight:500;
              color:rgba(51,51,51,1);
            }
          }
          .default{
            text-align: left;
            .words{
              width:32.5px;
              height:15px;
              background:rgba(255,208,210,1);
              display: inline-block;
              text-align: center;
              color:#AB1E24;
              font-size: 10px;
              line-height: 15px;
              margin-right:8px
            }
            .address{
              font-size:13px;
              font-family:PingFang-SC-Regular;
              font-weight:400;
              color:rgba(102,102,102,1);
            }
          }
        }
        .edit{
          display: flex;
          align-items: center;
          justify-content: center;
          padding:0 10px;
          margin: 10px 0;
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          border-left:0.5px solid #B7B7B7;
          height:31px;
          width:46px
        }
        }
        .line{
          margin-top:16.5px;
          width:320px;
          height:1px;
          background: #E6E6E6;
          margin-right:35px
        }
    }
  }
</style>
