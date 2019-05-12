<template>
  <div id="app">
    <div class="area">
      <p class="mirror">
        <img src="./assets/sun.png" alt="sword" />
      </p>
      <h1 class="mirror">
          Uploads File
      </h1>
    </div>

    <uploads></uploads>
  </div>
</template>

<script>
  import uploads from './components/uploads.vue'

  export default {
    name: 'app',
    components: {
      uploads
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .mirror {
    font-weight: normal;
  }
  .area {
    padding: 60px 0;
  }
</style>
