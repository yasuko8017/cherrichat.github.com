<script>
import FriendItem from './FriendItem.vue';
import friends from "../../data/friends";
import i18n from "../../i18n/i18n";

export default {
  computed:{
    friends(){
      return friends;
    }
  },
  components:
  {
    FriendItem,
  },
};
</script>

<template>
  <div class="sidebar">
    <div class="title">
      {{ $t("_friends_list") }} ({{this.friends.length}})
    </div>
    <FriendItem v-for="friend in friends" :friend="friend"/>
  </div>
</template>


<style lang="scss">
.sidebar {
  float: left;
  width: 220px;
  height: 100%;
  box-shadow: 12px 8px 4px -10px #ddd;
  box-sizing: border-box;
  .title{
    padding: 10px;
    font-weight: bold;
    font-size: 0.8em;
    color: #666;
    border-bottom: #c8ddf6 solid 1px;
  }
}
</style>
