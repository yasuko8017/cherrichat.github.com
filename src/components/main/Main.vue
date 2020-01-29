<script>
import Header from './Header.vue';
import StartUse from './StartUse.vue';
import Chat from './Chat.vue';

export default {
  components:
    {
      Header,
      //StartUse,
      Chat,
    },
  };
</script>

<template>
  <div class="main">
    <Header/>
    <!--<StartUse/>-->
    <Chat/>
  </div>
</template>


<style lang="scss">
.main {
  float: left;
  width: 580px;
  height: 100%;
}
</style>
