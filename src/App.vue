<template>
  <div id="app">
    <div class="sidebar">
      好友列表
    </div>
    <div class="main">
    </div>
  </div>
</template>

<script>

</script>

<style lang="sass" src="./style/reset.sass"></style>
<style lang="scss">
#app{
  width: 900px;
  height: 600px;
  background: #000;
  margin: 50px auto;
  .sidebar, .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 250px;
    background: #4A90E2;
  }
  .main {
    float: left;
    width: 650px;
    background: #4A9123;
  }
}
</style>
