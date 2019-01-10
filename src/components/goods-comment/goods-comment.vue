<template>
  <div class="goods-comment">
    <div class="head">
      <div class="user-wrap">
        <img :src="comment.user.avatar" alt="" class="avatar">
        <div class="name">{{comment.user.name}}</div>
      </div>
      <div class="stars-wrap">
        <img src="../../common/image/mall/star-full.png" alt="">
        <img src="../../common/image/mall/star-full.png" alt="">
        <img src="../../common/image/mall/star-full.png" alt="">
        <img src="../../common/image/mall/star-full.png" alt="">
        <img src="../../common/image/mall/star-empty.png" alt="">
      </div>
    </div>
    <p class="comment">{{comment.comment}}~建议您可以收藏关注下我们店铺...</p>
  </div>
</template>

<script>
export default {
  name: 'goods-comment',
  props: {
    comment: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-comment {
  // height: 75px;
  padding: 10px 15px;
  box-sizing: border-box;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user-wrap {
      display: flex;
      align-items: center;
      .avatar {
        width: 25px;
        height: 25px;
      }
      .name {
        margin-left: 8px;
        font-size: 12px;
        color: #222;
      }
    }
    .stars-wrap {
      display: flex;
      align-items: center;
      img {
        margin-left: 2px;
        width: 12px;
        height: 12px;
      }
    }
  }
  .comment {
    margin-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 12px;
    height: 24px;
    font-size: 10px;
    color: #666;
  }
}
</style>
