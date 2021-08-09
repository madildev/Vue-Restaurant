<template>
      <div class="dish-details">
          <div class="details" :style="{'background-image': `url(${details.D_Img})` }">
          <div class="inner-details">
            <h1 :style="{ 'font-weight': 'bold' }">{{ details.D_Name }}</h1>
            <h2>Details: </h2>
            <h3>Price: {{ details.D_Price }} Rs</h3>
            <h3>{{ details.D_Description }}</h3>
          </div>
          <div class="detail-btns">
               <a @click="scrollMeTo('order')">Order</a>
               <a @click="scrollMeTo('review')">Rating</a>
          </div>
        </div>
        
        <div id="order" class="orders">
            <h2>Order</h2>
              <form>
                  <legend>Details</legend>
                  <input type="number" name="" id="" v-model="quantity" placeholder="Enter the Quantity">
                  <md-button class="md-dense md-raised " @click="AddOrder">Add to Cart</md-button>
              </form>
          </div>

        <div id="review" class="review-details">
          <h2>Reviews</h2>
          <div class="review-button">
            <md-button
              class="md-dense md-raised "
              @click="loadreview = !(loadreview)"
              >Reviews</md-button
            >
            <md-button
              class="md-dense md-raised "
              @click="reviewform = !(reviewform)"
              >Add Review</md-button
            >
          </div>

          <div class="review-table" v-if="loadreview">
            <md-table v-model="reviews" md-card>
              <md-table-toolbar>
                <h1 class="md-title">Reviews</h1>
              </md-table-toolbar>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Remarks" md-sort-by="name">{{
                  item.Remarks
                }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
        
        <div class="review-form" v-if="reviewform">
          <form>
            <legend>Review Form</legend>
            <label for="fname">Remarks</label>
            <input type="text" name="" id="" v-model= "remarks" placeholder="Enter your remarks" />
            <label for="fname">Rating</label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Rate the dish out of 5"
              v-model= "rating"
            />
            <md-button class="md-dense md-raised " @click="AddReview">Add Review</md-button>
          </form>
        </div>
      </div>
        
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "CDetails",
      id: this.$route.params.dishid,
      cid: this.$route.params.cusid,
      details: {},
      reviews: [],
      loaded: false,
      reviewform: false,
      loadreview: true,
      quantity: 0,
      date: this.currentDateTime(),
      rating: 0,
      remarks: ''
    };
  },
  methods:
  {
      currentDateTime() 
      {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date +' '+ time;
      
      return dateTime;
      }, 
    AddOrder()
    {
        axios.post("http://localhost:5001/dish/addorder",{
            dishid: this.id,
            cusid: this.cid,
            quantity: this.quantity,
            date: this.date
        }).then(res => {
            console.log(res);
            alert(res.data)
        })
    },
    AddReview()
    {
      axios.post("http://localhost:5001/dish/add/reviews",{
        cusid: this.cid,
        remarks: this.remarks,
        rating: this.rating,
        dishid: this.id,
      }).then(res=>{
        console.log(res);
        alert(res.data)
      })
    },
    scrollMeTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  mounted() {
    if (!this.loaded) 
    {
      axios
        .post("http://localhost:5001/dish/details", {
          dishid: this.id,
        })
        .then((res) => {
          console.log(res);
          this.details = res.data.recordset[0];
        });

      axios
        .post("http://localhost:5001/dish/reviews", {
          dishid: this.id,
        })
        .then((res) => {
          console.log(res);
          this.reviews = res.data.recordset;
        });
      this.loaded = true;
    }
  },
};
</script>

<style>
.details
{
   height: 100vh;
   background-repeat: none;
   background-size: cover;
   background-position: center center;
}
.inner-details{
  padding: 5px 15px;
  color: white;
}
.detail-btns a{
  cursor: pointer;
   padding: 5px;
   font-size: 20px;
   text-decoration: none;
   background-color: violet;
   margin: 5px;
   border-radius: 5px;
}

.review-form form
{
  width: 50%;
  border: 1px solid black;
  text-align: center;
}
.review-form form input 
{
  padding: 12px 20px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: auto;
}
.orders form 
{
  width: 50%;
  border: 1px solid black;
  text-align: center;
}

.orders form input{
    padding: 2px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: auto;
}

</style>
