<template>
    <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green" :ProfileData="UserData"> </edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card :FirstName="UserData.E_FirstName" :LastName="UserData.E_LastName" :Job="UserData.E_Type"> </user-card>
      </div>
    </div>
  </div>  
</template>

<script>
import EditProfileForm from "../../components/UserProfile/EditProfileForm.vue"; 
import UserCard from "../../components/UserProfile/UserCard.vue";
import axios from 'axios';

export default {
    name: "Profile",
    components: {
    EditProfileForm,
    UserCard
  },
  data(){
    return{
      id: this.$route.params.userid ,  //This is the employee id passed from the router
      loaded: false,
      UserData: {} //This object holds the data from the database
    }
  },

  //This function gets the employees data from the database when the component is mounted
  beforeMount()
  {
    if(!(this.loaded))
    {
       axios.post("http://localhost:5001/profile/view/employees",{
        userid: this.id
      }).then(response =>{
           console.log(response);
           this.loaded = true;
           this.UserData = response.data.recordset[0];
      });
    }
  }
};
</script>
