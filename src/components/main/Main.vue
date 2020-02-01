<script>
import Header from './Header.vue';
import StartUse from './StartUse.vue';
import Chat from './Chat.vue';

export default {
  props: ['chatId'],
  data() {
    return {
      chatData: {},
      id: '',
    };
  },
  components:
  {
    Header,
    StartUse,
    Chat,
  },
  beforeUpdate(){
    //[ask] 沒有判斷的話會一直反覆執行fetch，為什麼??? 是因為beforeUpdate 可是沒什麼改變阿
    if(this.id == this.chatId){
      return;
    }
    this.id = this.chatId;

    let url = 'http://localhost:3000/chatMsgData/'+ this.chatId;
    //console.log("url=" + url);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.chatData = jsonData;
      });
  },
};
</script>

<template>
  <div class="main">
    <Header/>
    <StartUse v-if="chatId == ''"/>
    <Chat v-if="chatId" :chatData="chatData"/>
  </div>
</template>


<style lang="scss">
.main {
  float: left;
  width: 580px;
  height: 100%;
}
</style>
