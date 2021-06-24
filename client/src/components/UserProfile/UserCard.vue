<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage"/>
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{Job}}</h6>
      <h4 class="card-title">{{FirstName}} {{LastName}}</h4>
      <p class="card-description">
        Don't be scared of the truth because we need to restart the human
        foundation in truth
      </p>
      <md-button class="md-round md-success">Follow</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/avatar.png")
    },
    FirstName: {
      type: String,
      default: ""
    },
    LastName:{
      type: String,
      default: ""
    },
    Job:{
      type: String,
      default: ""
    }
  },
  data() {
    return {
    }
  }
};
</script>
<style></style>
