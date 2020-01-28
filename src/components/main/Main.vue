<script>
import Header from './Header.vue';
import StartUse from './StartUse.vue';

export default {
  components:
    {
      Header,
      StartUse,
    },
  };
</script>

<template>
  <div class="main">
    <Header/>
    <StartUse/>
  </div>
</template>


<style lang="scss">
.main {
  float: left;
  width: 580px;
  height: 100%;
}
</style>
