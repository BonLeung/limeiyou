<template>
  <div>
    <navbar title="等待明细" />
    <div class="content">
      <cube-scroll>
            <ul class="nav-list">
                <li class="nav-item">
                  <div class="top">
                    <p class="integral">
                      <span class="integral-wait">等待利美积分：</span>
                      <span class="num">5个</span>
                    </p>
                    <p class="need">
                      需等待人数
                      <span class="num-need">20</span>人
                    </p>
                  </div>
                  <div class="bottom">
                    <p class="integral">
                      <span class="integral-wait">可获得福利：</span>
                      <span class="num">+￥100</span>
                    </p>
                    <p class="time">
                      2018-12-25  10:48
                    </p>
                  </div>
                </li>
                  <li class="nav-item">
                  <div class="top">
                    <p class="integral">
                      <span class="integral-wait">等待利美积分：</span>
                      <span class="num">5个</span>
                    </p>
                    <p class="need">
                      需等待人数
                      <span class="num-need">20</span>人
                    </p>
                  </div>
                  <div class="bottom">
                    <p class="integral">
                      <span class="integral-wait">可获得福利：</span>
                      <span class="num">+￥100</span>
                    </p>
                    <p class="time">
                      2018-12-25  10:48
                    </p>
                  </div>
                </li>
            </ul>
      </cube-scroll>
    </div>
     <div class="bottom-word">
              <p>坐享其成  财福倍增</p>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'waitfor-detail',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .nav-list{
    text-align: left;
    .nav-item{
      width:345px;
      height:70px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 7.5px 0px rgba(169,169,169,0.3);
      border-radius:2.5px;
      display: flex;
      flex-direction:column;
      margin:10px 16px;
      .top{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        .integral{
          margin-left:13px;
          margin-top:10px;
          .integral-wait{
            font-size:12px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .num{
            font-size:12px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:#FD555E;
          }
        }
        .need{
          margin-top:10px;
          margin-right:23px;
          display: flex;
          align-items: center;
          font-size:12px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
        .num-need{
          color:#FD555E
          }
        }
      }
        .bottom{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        .integral{
          margin-left:13px;
          .integral-wait{
            font-size:12px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .num{
            font-size:12px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:#FD555E;
          }
        }
        .time{
          margin-right:23px;
          display: flex;
          align-items: center;
          font-size:12px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
      }
    }
  }
  .bottom-word{
      position:fixed;
      bottom:32px;
      left:142px;
      p{
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height: 1.5
      }
  }
</style>
