<script>
export default {
  data(){
    return {
      msgs: [
        "保羅",
        "你好, 我是傑西卡",
        "我喜歡吃的食物有",
        "各種巧克力口味的甜點"
      ]
    };
  },
};
</script>

<template>
  <div class="msgDataSpace">
    <div class="msg" v-for="msg in msgs">
      <span>{{msg}}</span>
    </div>
  </div>
</template>

<style lang="scss">
.msgDataSpace{
  height: 340px;
  box-sizing: border-box;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  .msg{
    height: 33px;
    span{
      padding: 8px 18px;
      color: #fff;
      font-size: 0.8em;
      background: #4A90E2;
      border-radius:999em;
    }
  }

}
</style>
