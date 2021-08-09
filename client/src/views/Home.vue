<template>
  <div class="home">
    <Hero></Hero>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue';
import Login from '../components/Login.vue';

export default {
  name: 'Home',
  components: 
  {
    Hero,Login
  }

}
</script>
