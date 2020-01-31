<script>
import i18n from "../../../i18n/i18n";
</script>

<template>
  <div class="memoSpace">
    <textarea placeholder="輸入訊息..."></textarea>
    <div class="addBtn">
      {{ $t("_add") }}
    </div>
    <hr/>
    <div class="memo">
      <div class="memoMsg">
        <span>2019/07/01 13:45</span>
        <div class="content">
          備忘訊息1
        </div>
        <img src="../../../assets/ic_close2.png">
      </div>
      <div class="memoMsg">
        <span>2019/07/01 13:45</span>
        <div class="content">
          備忘訊息1
        </div>
        <img src="../../../assets/ic_close2.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.memoSpace{
  width: 250px;
  height: 330px;
  border-radius: 5px;
  background: #fff;
  box-shadow:0px 0px 5px 3px #ddd;
  padding: 15px;
  box-sizing: border-box;
  position: absolute;
  top: 65px;
  right: 10px;
  textarea{
    width: 100%;
    height: 70px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: #4A90E2 solid 1px;
    resize: none;
    font-size: 0.8em;
    caret-color: #4A90E2;
    margin-bottom: 6px;
  }
  .addBtn{
    padding: 6px;
    text-align: center;
    background: #4A90E2;
    color: #fff;
    font-size: 0.7em;
  }
  hr{
    border: 0;
    height: 1px;
    background: #c8ddf6;
  }
  .memo{
    height: 190px;
    overflow:auto;
    .memoMsg{
      height: 70px;
      box-sizing: border-box;
      padding: 3px 7px;
      border: #c8ddf6 solid 1px;
      font-size: 0.7em;
      margin-bottom: 5px;
      overflow:auto;
      position: relative;
      span{
        color: #6ea6e7;
        line-height: 2em;
      }
      .content{
        line-height: 1.5em;
      }
      img{
        width: 7px;
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
  }
}
.memoSpace:after{
  content: "";
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 0px solid #fff;
  filter: drop-shadow(0px -4px 3px #ddd);
  border-width: 19px 11px;
  position: absolute;
  top: -19px;
  right: 25px;
}
</style>
