<script>
import ChatHeader from './chat/ChatHeader.vue';
import InputMsgSpace from './chat/InputMsgSpace.vue';
import MsgDataSpace from './chat/MsgDataSpace.vue';

export default {
  components:
  {
    ChatHeader,
    MsgDataSpace,
    InputMsgSpace,
  },
};
</script>

<template>
  <div class="chat">
    <ChatHeader/>
    <MsgDataSpace/>
    <InputMsgSpace/>
  </div>
</template>

<style lang="scss">
.chat{
  height: 450px;
  position: relative;
}
</style>
