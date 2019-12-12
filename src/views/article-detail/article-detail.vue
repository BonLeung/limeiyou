<template>
  <div class="article-detail">
    <navbar title="利美社区"></navbar>
    <div class="content">
      <cube-scroll>
        <img :src="article.img" alt="">
        <p>{{article.content}}</p>
        <p>{{article.content}}</p>
        <p>{{article.content}}</p>
        <p>{{article.content}}</p>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'article-detail',
  data() {
    return {
      article: {
        title: '标题标题标题',
        content: '一个人的内心非常隐秘。这是我看到这件外套时想到的问候，柔软度首先浮现在脑海中，而不是温暖。想象一下纤细的针织衫，在温和羊绒轮廓中轻轻支撑，风格与温度共存很有趣。秋夜漫长，我希望大家都可以享受这件外套！',
        img: require('../../common/image/community/article-img-head.jpeg')
      }
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.article-detail {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    img {
      width: 100%;
      height: 285px;
    }
    p {
      margin-top: 15px;
      padding: 0 15px;
      text-align: justify;
      line-height: 19px;
      font-size: 13px;
      color: #333;
    }
  }
}
</style>
