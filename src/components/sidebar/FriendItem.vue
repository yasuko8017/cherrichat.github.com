<script>
export default {
  props: ['friend'],
}
</script>

<template>
  <div class="friendItem">
    <div class="imgCircle">
    </div>
    <div class="info">
      <div class="name">
        {{friend.name}}
      </div>
      <div class="desc">
        {{friend.desc}}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.friendItem{
  padding: 12px 10px 12px 10px;
  border-bottom: #dae8f9 solid 1px;
  overflow:hidden;
  clear: both;
  .imgCircle, .info{
    float: left;
  }
  .imgCircle{
    width:40px;
    height:40px;
    background: #fff;
    border: #c8ddf6 solid 1px;
    border-radius:999em;
  }
  .info{
    width:130px;
    padding-left: 8px;
    .name{
      font-weight: bold;
      padding-bottom: 10px;
    }
    .desc{
      color: #999;
      font-size: 0.8em;
    }
  }
}
.friendItem:hover{
  background: #eee;
}

</style>
