<script>
import ChatHeader from './chat/ChatHeader.vue';
import InputMsgSpace from './chat/InputMsgSpace.vue';
import MsgDataSpace from './chat/MsgDataSpace.vue';

export default {
  props: ['chatData'],
  components:
  {
    ChatHeader,
    MsgDataSpace,
    InputMsgSpace,
  },
  methods:
  {
    inputSearch(chatReplaceMsg){
      this.chatData.msg = chatReplaceMsg;
    },
  }
};
</script>

<template>
  <div class="chat">
    <ChatHeader :chatData="chatData" @input="inputSearch"/>
    <MsgDataSpace :chatMsg="chatData.msg"/>
    <InputMsgSpace/>
  </div>
</template>

<style lang="scss">
.chat{
  height: 450px;
  position: relative;
}
</style>
