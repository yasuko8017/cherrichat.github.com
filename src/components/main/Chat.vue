<script>
import ChatHeader from './chat/ChatHeader.vue';
import InputMsgSpace from './chat/InputMsgSpace.vue';

export default {
  components:
  {
    ChatHeader,
    InputMsgSpace,
  },
};
</script>

<template>
  <div class="chat">
    <ChatHeader/>
    <InputMsgSpace/>
  </div>
</template>

<style lang="scss">
.chat{
  height: 450px;
  position: relative;
}
</style>
