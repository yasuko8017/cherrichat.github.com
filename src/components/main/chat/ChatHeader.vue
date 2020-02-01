<script>
import SearchSpace from './SearchSpace.vue';
import MemoSpace from './MemoSpace.vue';

export default {
  props: ['chatName'],
  data(){
    return {
      isSearchShow: false,
      isMemoShow: false,
    };
  },
  components:
  {
    SearchSpace,
    MemoSpace,
  },
  methods: {
    showSearch(){
      let searchBtn = document.getElementById("searchBtn");
      if(this.isSearchShow == false){
        this.isSearchShow = true;
        searchBtn.classList.add("usedToolBtn");
      }else{
        this.closeSearch();
        searchBtn.classList.remove("usedToolBtn");
      }
    },
    closeSearch(){
      this.isSearchShow = false;
    },
    showMemo(){
      let addMemoBtn = document.getElementById("addMemoBtn");
      if(this.isMemoShow == false){
        this.isMemoShow = true;
        addMemoBtn.classList.add("usedToolBtn");
      }else{
        this.closeMemo();
        addMemoBtn.classList.remove("usedToolBtn");
      }
    },
    closeMemo(){
      this.isMemoShow = false;
    },
  },
};
</script>

<template>
  <div class="chatHeader">
    <div class="friend">
      <div class="imgCircle">
      </div>
      <div class="name">
        {{chatName}}
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
    <SearchSpace v-if="isSearchShow"/>
    <MemoSpace v-if="isMemoShow"/>
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
