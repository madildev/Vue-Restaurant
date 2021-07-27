<template>
  <div class="login">
        <!-- Modal -->
        <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-body">


                        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                            
                            <h5 class="text-center">Login Please</h5>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
                            </div>

                             <div class="form-group">
                                <button class="btn btn-primary" @click="login">Login</button>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                            
                             <h5 class="text-center">Create New Account</h5>
                             
                            <div class="form-group">
                                <label for="name">Your First name</label>
                                <input type="text" v-model="firstname" class="form-control" id="firstname" placeholder="Your first name" required>
                            </div>

                            <div class="form-group">
                                <label for="name">Your Last name</label>
                                <input type="text" v-model="lastname" class="form-control" id="lastname" placeholder="Your last name" required>
                            </div>

                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" required>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-primary" @click="register">Signup</button>
                            </div>

                        </div>
                        </div>
                    
 
                </div>
           
            </div>
        </div>
        </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  props: {
    msg: String
  },
  data(){
      return {
          firstname:"",
          lastname:"",
          email:"",
          password:""
      }
  },
  methods:{
      //This method is used for the login system
      login(){         
              axios.post('http://localhost:5001/login',{
                  email: this.email,
                  password: this.password
              })                                                                                                                                      
            .then((response) => {
                          console.log(response); //The data sent from the server
                          response.data.recordset.forEach(element => {
                                if(element.Emp_Id != null)
                                {
                                    alert('You logged In Successfully!!');
                                    this.$router.replace(`/admin/${element.Emp_Id}`);
                                }
                                else
                                {
                                    alert('You logged In Successfully!!');
                                   this.$router.replace(`/customer/${element.Cus_Id}`);
                                }
                          });

                        });
      },
      register()
      {
          axios.post('http://localhost:5001/register/user',{
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              password: this.password
          }).then(response =>{
            console.log(response);
            response.data.recordset.forEach(element => {
                if(element.Cus_Id != null)
                {
                   alert('User Registered Successfully');
                   this.$router.replace(`/customer/${element.Cus_Id}`);
                }
          });
            
       });
    }
  }
}       
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>