<script>
import i18n from "../../../i18n/i18n";
</script>

<template>
  <div class="searchSpace">
    <textarea></textarea>
    <img src="../../../assets/ic_close1.png">
    <div class="items">
      {{ $t("_items", {count:'1'}) }}
    </div>
  </div>
</template>

<style lang="scss">
.searchSpace{
  width: 100%;
  height: 40px;
  border-bottom: #c8ddf6 solid 1px;
  position: absolute;
  top: 50px;
  textarea{
    resize: none;
    box-sizing: border-box;
    height: 100%;
    width: 75%;
    padding: 15px 0px 5px 15px;
    border: none;
    outline: none;
    background: none;
    font-size: 0.8em;
    caret-color: #4A90E2;
    float: left;
  }
  .items{
    display: inline-block;
    margin: 15px 0px;
    font-size: 0.8em;
    color: #aaa;
    float: right;
  }
  img{
    width: 20px;
    margin: 10px 15px;
    box-sizing: border-box;
    float: right;
  }
}
</style>
