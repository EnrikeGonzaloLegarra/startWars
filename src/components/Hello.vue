<template>
  <div class="hello">
    <br><br><br>
    <h1>{{ msg }}</h1>
    <img src="https://media.giphy.com/media/jd6TVgsph6w7e/giphy.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to STAR WARS api viewer, with VUEJS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
