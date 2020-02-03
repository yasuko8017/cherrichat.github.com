<script>
import i18n from "../../../i18n/i18n";

export default {
  props: ['chatMsg'],
  data(){
    return {
      inputText: '',
      filterMsg: [],
    };
  },
  methods: {
    /*陣列透過搜尋條件（查詢）過濾物件*/
    filterItems(){
      this.filterMsg = this.chatMsg.filter((el) => {
        return el.indexOf(this.inputText.trim()) > -1;
      });
      // 中文字統一轉成unicode做比對，英文大小寫要相符才能搜尋
      //let map = Array.prototype.map;
      //let inputText = map.call(this.inputText.trim(), char => char.charCodeAt());
      //
      //this.filterMsg = this.chatMsg.filter((el) => {
      //  let msg = map.call(el, char => char.charCodeAt());
      //  return msg.toString().indexOf(inputText.toString()) > -1;
      //});
      //// 英文搜尋要用這種↓
      //this.filterMsg = this.chatMsg.filter((el) =>
      //  el.toLowerCase().indexOf(this.inputText.toLowerCase()) > -1
      //);

      //console.log("filterMsg="+this.filterMsg.length);
    },
    input(){
      this.$emit('inputSearch', this.inputText.trim());
      this.filterItems();
    },
    closeSearch(){
      this.$emit('closeSearch');
    },
  },
};
</script>

<template>
  <div class="searchSpace">
    <textarea v-model="inputText"
              @keypress.13.prevent="input"></textarea>
    <img src="../../../assets/ic_close1.png"
              @click="closeSearch">
    <div class="items">
      {{ $t("_items", {count: filterMsg.length}) }}
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
