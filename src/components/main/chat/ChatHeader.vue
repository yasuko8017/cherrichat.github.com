<template>
  <div class="chatHeader">
    <div class="friend">
      <div class="imgCircle">
      </div>
      <div class="name">
        保羅
      </div>
    </div>
    <div class="toolbar">
      <div id="searchBtn" class="toolBtn usedToolBtn">
        <img src="../../../assets/ic_search.png">
      </div>
      <div id="addMemoBtn" class="toolBtn">
        <img src="../../../assets/ic_note.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chatHeader{
  width: 100%;
  height: 50px;
  position: relative;
  box-shadow:0px 3px 4px 0px #ddd;
  .friend{
    position: absolute;
    padding: 10px 20px;
    .imgCircle{
      width:30px;
      height:30px;
      background: #fff;
      border: #c8ddf6 solid 1px;
      border-radius:999em;
      float: left;
    }
    .name{
      font-weight: bold;
      padding: 8px;
      float: left;
    }
  }
  .toolbar{
    position: absolute;
    padding: 9px 15px;
    right: 0;
    top: 0;
    .toolBtn{
      width:25px;
      height:25px;
      border-radius:999em;
      padding: 3px;
      margin: 0px 3px;
      float: left;
    }
    .usedToolBtn{
      background: #f5f5f5;
      border: #ddd solid 1px;
    }
  }
}
</style>
