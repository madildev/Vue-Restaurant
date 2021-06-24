<template>
  <div class="admin">
    <div class="sidebar">
        <div class="title">
            <h2>Admin Panel</h2>
        </div>
        <div class="sidebar-head">
          <i class="far fa-user-circle"></i> <h4>Manager</h4>
        </div>
         <div class="sidebar-menu">
           <ul>
             <li>
             <router-link :to ="{ name: 'dashboard', params: { userid: this.id}}"><p>Dashboard</p></router-link>
             </li>
             <li>
              <router-link :to ="{ name: 'profile', params: { userid: this.id}}"><p>Profile</p></router-link>
             </li>
             <li>
             <router-link :to ="{ name: 'employees', params: { userid: this.id}}"><p>Employees</p></router-link>
             </li>
             <li>
             <router-link :to ="{ name: 'reviews', params: { userid: this.id}}"><p>Reviews</p></router-link>
             </li>
             <li>            
              <router-link :to ="{ name: 'reservations', params: { userid: this.id}}"><p>Reservations</p></router-link></li>
             <li>
             <router-link :to ="{ name: 'orders', params: { userid: this.id}}"><p>Orders</p></router-link>
             </li>
             <li>
              <router-link to ="/"><p>Log Out</p></router-link>
              </li>
           </ul>
        </div>       
    </div>
    <main>
       <router-view/>
    </main>   
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "admin",
  data(){
    return{
       id: this.$route.params.userid, //This is user send from the router
    }
  }
  }; 
</script>

<style>
.sidebar {
  z-index: 1000;
  float: left;
  width: 260px;
  height: 658px;
  background-color: #17182e;
}
.sidebar .title{
  color: white;
  margin-top: 10%;
}
.sidebar-head{
  border-style: solid none solid none;
}
.sidebar-head i{
  font-size: 5.5rem;
  padding: 5%;
}
.sidebar-menu ul
{
  margin-top: 20%;
  list-style: none;
  height: 100%;
}
.sidebar-menu ul li{
  margin-top: 12%;
  text-align: left;
}
.sidebar-menu ul li p{
  color: white;
}

</style>

