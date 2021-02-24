<template>
    <div>
        <Header/>
        <h1>Homepage</h1>
    </div>
</template>

<script>
import Header from './Header'
export default {
    name: 'Home',
    data(){
    return{
      isActive:true
    }
  },
  components:{
    Header
  }
}
</script>

<style scoped>

</style>