<script>
export default {
  props: ['chatMsg'],
};
</script>

<template>
  <div class="msgDataSpace">
    <div class="msg" v-for="msg in chatMsg">
      <div v-html="msg"></div>
    </div>
  </div>
</template>

<style lang="scss">
.msgDataSpace{
  height: 390px;
  box-sizing: border-box;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  .msg{
    padding: 8px 20px;
    background: #4A90E2;
    border-radius: 15px;
    margin: 2px;
    div{
      color: #fff;
      font-size: 0.8em;
      line-height: 1.5em;
      white-space:pre;
      .searchMark{
        padding: 4px 0px;
        background: yellow;
        color: #000;
        font-weight: bold;
      }
    }
  }

}
</style>
