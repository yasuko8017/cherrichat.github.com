<template>
  <div class="header">
    <div class="title">
      Cherri Chat
    </div>
    <div class="btnSpace">
      <div class="cnLangBtn useLangBtn">
        中文
      </div>
      <div class="enLangBtn">
        English
      </div>
    </div>
    <div class="user">
      <div class="imgCircle">
      </div>
      <div class="name">
        潔西卡
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  width: 100%;
  height: 50px;
  background: #4A90E2;
  font-size: 1.2em;
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  .btnSpace{
    padding: 16px 0px;
    position: absolute;
    right: 160px;
    top: 0;
  }
  .cnLangBtn, .enLangBtn{
    border: #fff solid 1px;
    border-radius:999em;
    font-size: 0.6em;
    padding: 2px 12px;
    margin: 0px 3px;
    float: left;
  }
  .useLangBtn{
    background: #fff;
    color: #4A90E2;
    font-weight: bold;
  }
  .user{
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-left: #c8ddf6 solid 1px;
    padding: 10px 20px;
    box-sizing: border-box;
    .imgCircle{
      width:30px;
      height:30px;
      background: #fff;
      border: #c8ddf6 solid 1px;
      border-radius:999em;
      float: left;
    }
    .name{
      color: #fff;
      font-size: 0.9em;
      font-weight: bold;
      padding: 8px;
      float: left;
    }
  }
}

</style>
