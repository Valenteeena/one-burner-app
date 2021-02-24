<template>
    <div>
        <Header/>
        <h1>Contact</h1>
    </div>
    </template>

<script>
import Header from './Header'
export default {
    name: 'Contact',
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