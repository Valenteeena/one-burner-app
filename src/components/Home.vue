<template>
    <div>
        <Header/>
        <h1>Homepage</h1>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: 'Home',
    data(){
    return{
      isActive:true
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>