<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero></Hero>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue';
import Navbar from '../components/NavBar.vue';
import Login from '../components/Login.vue';

export default {
  name: 'Home',
  components: 
  {
    Hero,Navbar,Login
  }
}
</script>
