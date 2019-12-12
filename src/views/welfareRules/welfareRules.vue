<template>
  <div>
    <navbar title="福利规则" />
    <div class="content">
      <cube-scroll>
          <p class="nav_top">【利美福利】是消费者消费后获得的财富分享。分配依据是“利美积分”</p>
          <p class="nav_middle">“利美积分”是利美商城利润分配给消费者福利的依据和标准。利美佳人通过“商业行为付出”而获得“利美积分”，以此获得利美商城部分财富福利。“利美积分”是利美佳人“有限分享”利美商城利润的一种“份额”。
          </p>
          <div class="nav_bottom">
            <div>
              <p>1、【利美积分】的获得</p>
              <p>消费：利美佳人在“利美商城”消费即可获得一定的利美积分。</p>
              <p>计算公式：利美积分=消费金额/X（X—系统系数，保留一位小数）。</p>
            </div>
            <div>
              <p>2、利美积分的用途 ：参与利美福利的分享。</p>
              <p>（1）计算公式：福利=积分份额×积分福利</p>
              <p>（2）积分福利：闺蜜（A）元/个积分；业主（B）元/个积；楼长（C）元/个积；区长（D）元/个积。</p>

            </div>
            <div>
              <p>3、福利规则</p>
              <p>（1）福利分配方式： 顺序排列法，即根据每次取得利美积分的“时间先后”进行排列。按照排列顺序分享福利。</p>
              <p>（2）按照积分份额的整数倍分享，不足一个积分转下次合并计算。以便更好的粘结消费者。</p>
            </div>
            <div>
              <p>4、利美福利的来源：利美财富福利来源【利美商城】的经营利润</p>
            </div>
            <div>
              <p>5、福利周期：【实时】【天】【周】【月】</p>
            </div>
            <div>
              <p>6、福利分配原则</p>
              <p>（1）产生多少可分配利润福利就分享多少福利，上不封顶，下不保底，没有时间限制。</p>
              <p>（2）有限分享，每个“利美积分”只参与一次利美福利分享。</p>
            </div>
          </div>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'welfareRules',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.content{
  margin: 32px 18.5px 25px 15.5px;
   p{
    font-size:12px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 1.5
  }
  .nav_middle{
    margin-top:18px
  }
  .nav_bottom{
    margin-top:16px
  }
}

</style>
