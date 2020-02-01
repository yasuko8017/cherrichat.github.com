<script>
import MemoItem from './MemoItem.vue';
import Format from '../../js/format';

export default {
  data(){
    return {
      memos: [],
      memoObj: {
        msg: '',
        date: '',
      },
      memoMsg: '',
    };
  },
  components:
  {
    MemoItem,
  },
  methods: {
    addMemo(){
      let now = new Date();
      this.memoObj.msg = this.memoMsg;
      this.memoObj.date = Format.getFormatDateTime(now, '/');
      this.memos.push(this.memoObj);
      this.memoObj = {};
      this.memoMsg = '';
    },
    removeMemo(idx){
      this.memos.splice(idx, 1);
    },

  },
}
</script>

<template>
  <div class="memoSpace">
    <textarea v-model="memoMsg" v-bind:placeholder="$t('_message')"></textarea>
    <div id="addBtn" @click="addMemo()">
      {{ $t("_add") }}
    </div>
    <hr/>
    <div class="memoList">
      <MemoItem v-for="(memo, i) in memos" :memo="memo" :idx="i" @remove="removeMemo"/>
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
    margin-bottom: 7px;
  }
  #addBtn{
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
    margin: 10px 0px;
  }
  .memoList{
    height: 190px;
    overflow:auto;
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
