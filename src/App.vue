<template>
  <div id="app">
    <div id="navegador">
      <img src="./assets/logoStarWars.png" alt="">
      <ul>
        <li><router-link to="characters">Characters</router-link></li>
        <li><router-link to="planets">Planets</router-link></li>
        <li><router-link to="vehicles">Vehicles</router-link></li>
        <li><router-link to="species">Species</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  img{
    width: 100px;
  }

  #navegador ul{
    list-style-type: none;
    text-align: center;
  }
  #navegador li{
    display: inline;
    text-align: center;
    margin: 0 10px 0 0;
  }
  #navegador li a {
    padding: 2px 7px 2px 7px;
    color: #666;
    background-color: #eeeeee;
    border: 1px solid #ccc;
    text-decoration: none;
  }
  #navegador li a:hover{
    background-color: #333333;
    color: #ffffff;
  }
</style>
