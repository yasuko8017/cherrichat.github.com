<script>
import SideBar from './components/sidebar/SideBar.vue';
import Main from './components/main/Main.vue';

export default {
  data(){
    return {
      chatId: '',
    };
  },
  components: {
    Main,
    SideBar,
  },
  methods: {
    getChat(id){
      this.chatId = id;
    }
  },
};
</script>

<template>
  <div id="app">
    <SideBar @getChat="getChat"/>
    <Main :chatId="chatId"/>
  </div>
</template>

<style lang="sass" src="./style/reset.sass"></style>
<style lang="scss">
body{
  font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
  background: #ecf3fc;
}
#app{
  width: 800px;
  height: 550px;
  margin: 50px auto;
  background: #fff;
}
</style>
