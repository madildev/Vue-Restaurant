<template>
  <div class="hero">
      <Navbar></Navbar>
    <section id="home">
        <h1 class="h-primary">Welcome to Vue Restaurant</h1>
        <p>An intreguing Resteraunt that works on all of YOUR likings and has been adapted to fulfil all our customer needs </p>
        <p> You may explore it however you like. </p>
        <button class="btn">Order Now</button>
    </section>

    <section id="services-container">
        <h1 class="h-primary center">Our Services</h1>
        <div id="services">
            <div class="box">
                <img src="../assets/img/1.png" alt="">
                <h2 class="h-secondary center">Food Catering</h2>
                <p class="center">
                    A catering system you have never experienced before, you have to see it to believe it
                </p>
            </div>
            <div class="box">
                <img src="../assets/img/2.png" alt="">
                <h2 class="h-secondary center">Bulk Ordering</h2>
                <p class="center">
                    You have all of the best cooks in the city, they'll cook almost anything you like as much as you like.
                </p>
            </div>
            <div class="box">
                <img src="../assets/img/3.png" alt="">
                <h2 class="h-secondary center">Food Ordering</h2>
                <p class="center">
                    You can order food to your homes and our delivery will be at your door in no time!
                </p>
            </div>
        </div>
    </section>
    
    <section id="contact">
        <h1 class="h-primary center">Contact Us</h1>
        <div id="contact-box">
            <form action="">
                <div class="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input type="email" name="name" id="email" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number: </label>
                    <input type="phone" name="name" id="phone" placeholder="Enter your phone">
                </div>
                <div class="form-group">
                    <label for="message">Message: </label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    </section>
    <footer>
    <div class="center">
            Copyright &copy; www.myOnlineMeal.com. All rights reserved!
    </div>
    </footer> 
  </div>
    
</template>

<script>
import Navbar from '../components/NavBar.vue';
export default {
  name: "Hero",
  props: {
    msg: String
  },
  components:{
      Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* CSS Reset */
*{
    margin: 0;
    padding: 0;
}

html
{
    scroll-behavior: smooth;
}

/* Home Section */
#home
{   
  display: flex;
  flex-direction: column;
  padding:3px 200px;
  height: 550px;
  justify-content: center;
  align-items: center;
}

#home::before
{ 
    content: "";
    position: absolute;
    background: url('../assets/img/bg1.jpg') no-repeat center center/cover;
    height: 580px;
    top:0px;
    left:0px;
    width: 100%;
    opacity:0.89;
}

#home h1
{
  z-index: 10;
  color: white;
  text-align: center;
  font-family: 'Bree Serif', serif;
}

#home p{
    color:white;
    z-index: 10;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Bree Serif', serif;
}
/* Services Section */
#services
{
  margin: 34px;
  display: flex;
}
#services .box
{ 
  border: 2px solid brown;
  padding: 34px;
  margin: 2px 55px;
  border-radius: 28px;
  background: #f2f2f2;
  margin-bottom: 20px;
}

#services .box img
{ 
   height: 160px;
   margin: auto;
   display: block;
}

#services .box p
{
    font-family: 'Bree Serif', serif;
} 
/* Contact Section */
#contact{
    position: relative;
}
#contact::before
{
  content: "";
  margin-top: 100px;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: url('../assets/img/contact.jpg') no-repeat center center/cover;
}
#contact-box
{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 34px;
}
#contact-box input, 
#contact-box textarea{
    width: 100%;
    padding: 0.5rem;
    border-radius: 9px;
    font-size: 1.1rem;
} 

#contact-box form{
    width: 40%;
}

#contact-box label{
   font-size: 1.3rem;
   font-family: 'Bree Serif', serif;

}


footer
{
    margin-top: 100px;
    background: black;
    color: white;
    padding: 9px 20px;
}

/* Utility Classes */
.h-primary
{
  font-family: 'Bree Serif', serif;
  font-size: 3.8rem;
  padding: 12px;
  color: black;
}

.h-secondary
{
  color: black;
  font-family: 'Bree Serif', serif;
  font-size: 2.3rem;
  padding: 12px;
}

.btn{
    z-index: 10;
    padding: 6px 20px;
    border: 2px solid white;
    background-color: brown;
    color: white;
    margin: 17px;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor:pointer;
}

.center{
    text-align: center;
}

@media  screen and (max-width: 1170px) 
{
    /* Navigation */
#navbar {
    flex-direction: column;
}

#navbar ul li a{
    font-size: 1rem;
    padding: 0px 7px;
    padding-bottom: 8px;
}
/* Home section */
#home{
    height: 370px; 
    padding: 3px 28px;
}

#home::before{
    height: 480px; 
}

#home p{
    font-size: 13px;
}

/* Services section  */
#services{
    flex-direction: column;
}

#services .box { 
    padding: 14px;
    margin: 2px 0px; 
    margin-bottom: 20px;
}

/* Clients section */
#clients{
    flex-wrap: wrap;
}

#clients img{
    width: 66px;
    padding: 6px;
    height: auto;
}

/* Contact us section */
#contact-box form{
    width:80%;
}
/* Footer */

/* Utility classes */
.h-primary{
    font-size:26px;
}
.btn{
    font-size: 13px;
    padding: 4px 8px;
}
  
}


</style>
