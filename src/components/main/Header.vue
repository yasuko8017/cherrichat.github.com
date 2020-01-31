<script>
import i18n from "../../i18n/i18n";

export default {
  methods: {
    switchLang(newLang){
      i18n.locale = newLang;

      let twLangBtn = document.getElementById("twLangBtn");
      let enLangBtn = document.getElementById("enLangBtn");
      if(newLang == 'tw')
      {
        twLangBtn.classList.add("usedLangBtn");
        enLangBtn.classList.remove("usedLangBtn");
      }else{
        twLangBtn.classList.remove("usedLangBtn");
        enLangBtn.classList.add("usedLangBtn");
      }
    },
  },
};

</script>

<template>
  <div class="header">
    <div class="title">
      Cherri Chat
    </div>
    <div class="btnSpace">
      <div id="twLangBtn" class="langBtn usedLangBtn" @click="switchLang('tw')">
        中文
      </div>
      <div id="enLangBtn" class="langBtn" @click="switchLang('en')">
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
  .langBtn{
    border: #fff solid 1px;
    border-radius:999em;
    font-size: 0.6em;
    padding: 2px 12px;
    margin: 0px 3px;
    float: left;
  }
  .usedLangBtn{
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
