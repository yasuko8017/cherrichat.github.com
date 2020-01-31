<script>
export default {
  props: ['memo', 'idx'],
  methods: {
    remove(){
      this.$emit('remove', this.idx);
    },
  },
}
</script>

<template>
  <div class="memoItem">
    <span>{{memo.date}}</span>
    <div class="content">{{memo.msg}}</div>
    <img src="../../../assets/ic_close2.png" @click="remove">
  </div>
</template>

<style lang="scss">
.memoItem{
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
    white-space:pre;
  }
  img{
    width: 7px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>
