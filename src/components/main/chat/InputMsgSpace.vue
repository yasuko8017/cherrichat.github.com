<template>
  <div class="inputMsgSpace">
    <textarea placeholder="輸入訊息..."></textarea>
    <img src="../../../assets/ic_sent.png">
  </div>
</template>

<style lang="scss">
.inputMsgSpace{
  width: 100%;
  height: 60px;
  border-top: #c8ddf6 solid 1px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  textarea{
    resize: none;
    box-sizing: border-box;
    height: 100%;
    width: 90%;
    padding: 15px;
    border: none;
    outline: none;
    background: none;
    font-size: 0.8em;
  }
  img{
    width: 25px;
    margin: 18px 10px;
    box-sizing: border-box;
  }
}
</style>
