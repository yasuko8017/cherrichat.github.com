<script>
import SearchSpace from './SearchSpace.vue';
import MemoSpace from './MemoSpace.vue';

export default {
  props: ['chatData'],
  data(){
    return {
      chatReplaceMsg: [],
      isSearchShow: false,
      isMemoShow: false,
      lastSearchText: '',
    };
  },
  components:
  {
    SearchSpace,
    MemoSpace,
  },
  watch: {
    chatData() {
      this.closeSearch();
      this.closeMemo();
    }
  },
  methods: {
    showSearch(){
      let searchBtn = document.getElementById("searchBtn");
      if(this.isSearchShow == false){
        this.isSearchShow = true;
        searchBtn.classList.add("usedToolBtn");
      }else{
        this.closeSearch();
      }
    },
    closeSearch(){
      searchBtn.classList.remove("usedToolBtn");
      this.isSearchShow = false;
      this.inputSearch("");
    },
    inputSearch(text){
      // todo: html injection
      let chatMsg = this.chatData.msg;
      if(this.lastSearchText != text)
      {
        let recoverMsg = chatMsg.map((el) => {
          el = el.replace("<span class=\'searchMark\'>", "");
          el = el.replace("</span>", "");
          return el;
        });
        chatMsg = recoverMsg;

        this.chatReplaceMsg = chatMsg.map(el => el.replace(text, `<span class='searchMark'>${text}</span>`));
      }else{
        this.chatReplaceMsg = chatMsg;
      }
      this.lastSearchText = text;
      this.$emit('input', this.chatReplaceMsg);
    },
    showMemo(){
      let addMemoBtn = document.getElementById("addMemoBtn");
      if(this.isMemoShow == false){
        this.isMemoShow = true;
        addMemoBtn.classList.add("usedToolBtn");
      }else{
        this.closeMemo();
      }
    },
    closeMemo(){
      addMemoBtn.classList.remove("usedToolBtn");
      this.isMemoShow = false;
    },
  }
};
</script>

<template>
  <div class="chatHeader">
    <div class="friend">
      <div class="imgCircle">
      </div>
      <div class="name">
        {{chatData.name}}
      </div>
    </div>
    <div class="toolbar">
      <div id="searchBtn" @click="showSearch()" class="toolBtn">
        <img src="../../../assets/ic_search.png">
      </div>
      <div id="addMemoBtn" @click="showMemo()" class="toolBtn">
        <img src="../../../assets/ic_note.png">
      </div>
    </div>
    <SearchSpace v-if="isSearchShow"
                :chatMsg="chatData.msg"
                @inputSearch="inputSearch"
                @closeSearch="closeSearch"/>
    <MemoSpace v-if="isMemoShow"
              :chatId="chatData.id"/>
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
    right: 25px;
    top: 10px;
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
