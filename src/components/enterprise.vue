<template>
    <div>
        <Header/>
        <h1>Enterprise</h1>
    </div>
</template>

<script>
import Header from './Header'
export default {
    name: 'enterprise',
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