<template>
  <Container msg="Hello" />
</template>

<script>
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap'); */
/* @import url('http://fonts.cdnfonts.com/css/sofia-pro'); */
@import url(//db.onlinewebfonts.com/c/a1f486ff14cc5c4f87a0e3825d152372?family=Sofia+Pro);
:root {
  --primaryColor: #462686;
  --fontcolor: #454545;
}
*{
  font-family: 'Sofia Pro', sans-serif;
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
#app {
  color: var(fontcolor);
}
</style>
