<template>
  <div class="content">
    <div>
      <!-- This card will display the desserts-->
        <div class="food-title">
          <h2>Desserts</h2>
        </div>
        <div class="dessert-section">
          <div
            class="dessert"
            v-for="(dish, index) in this.desserts"
            :key="index"
          >
           <router-link
              :to="{ name: 'cdetails', params: { dishid: dish.D_Id } }"
              ><md-card>
                <md-card-media>
                  <img :src="dish.D_Img" alt="People" />
                </md-card-media>
                <md-card-content>
                  <h3>{{dish.D_Name}}</h3>
                  <h1>Rs: {{dish.D_Price}}</h1>
                  <p>{{ dish.D_Description }}</p>
                </md-card-content>
              </md-card></router-link
            >
          </div>
        </div>
        <!--This row of cards will display the Chinese food items-->

        <div class="food-title">
          <h2>Chinese</h2>
        </div>
        <div class="dessert-section">
          <div
            class="dessert"
            v-for="(dish, index) in this.chinese"
            :key="index"
          >
            <router-link
              :to="{ name: 'cdetails', params: { dishid: dish.D_Id } }"
              ><md-card>
              <md-card-media>
                <img :src="dish.D_Img" alt="People" />
              </md-card-media>

              <md-card-content>
                  <h3>{{dish.D_Name}}</h3>
                  <p>{{ dish.D_Description }}</p>
                </md-card-content>

            </md-card></router-link>
          </div>
        </div>
        <!-- This section will show the desi food items-->
        <div class="food-title">
          <h2>Desi Foods</h2>
        </div>
        <div class="dessert-section">
          <div class="dessert" v-for="(dish, index) in this.desi" :key="index">
            <router-link
              :to="{ name: 'cdetails', params: { dishid: dish.D_Id } }"
              ><md-card>
              <md-card-media>
                <img :src="dish.D_Img" alt="People" />
              </md-card-media>
              
              <md-card-content>
                  <h3>{{dish.D_Name}}</h3>
                  <p>{{ dish.D_Description }}</p>
                </md-card-content>

            </md-card> </router-link>
          </div>
        </div>

        <!-- This section will show the soft drinks -->
        <div class="food-title">
          <h2>Drinks</h2>
        </div>
        <div class="dessert-section">
          <div class="dessert" v-for="(dish, index) in drinks" :key="index">
            <router-link
              :to="{ name: 'cdetails', params: { dishid: dish.D_Id } }"
              ><md-card>
              <md-card-media>
                <img :src="dish.D_Img" alt="People" />
              </md-card-media>
              
              <md-card-content>
                  <h3>{{dish.D_Name}}</h3>
                  <p>{{ dish.D_Description }}</p>
                </md-card-content>

            </md-card> </router-link>
          </div>
        </div>

        <!-- This section will show the fast foods -->
        <div class="food-title">
          <h2>Fast Foods</h2>
        </div>
        <div class="dessert-section">
          <div class="dessert" v-for="(dish, index) in fastfood" :key="index">
            <router-link
              :to="{ name: 'cdetails', params: { dishid: dish.D_Id } }"
              ><md-card>
              <md-card-media>
                <img :src="dish.D_Img" alt="People" />
              </md-card-media>
                 
              <md-card-content>
                  <h3>{{dish.D_Name}}</h3>
                  <p>{{ dish.D_Description }}</p>
                </md-card-content>

            </md-card></router-link>
          </div>
        </div>

        <!-- This section will show the tandoor items -->
        <div class="food-title">
          <h2>Tandoor</h2>
        </div>
        <div class="dessert-section md-layout-item md-layout md-gutter">
          <div class="dessert" v-for="(dish, index) in tandoor" :key="index">
            <router-link
              :to="{ name: 'cdetails', params: { dishid: dish.D_Id } }"
              ><md-card>
              <md-card-media>
                <img :src="dish.D_Img" alt="People" />
              </md-card-media>
              
              <md-card-content>
                  <h3>{{dish.D_Name}}</h3>
                  <h4>Rs: {{dish.D_Price}}</h4>
                  <p>{{ dish.D_Description }}</p>
                </md-card-content>

            </md-card></router-link>
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CDashboard",
  data: () => ({
    menuVisible: false,
    loaded: false,
    desserts: [],
    chinese: [],
    desi: [],
    drinks: [],
    fastfood: [],
    tandoor: [],
    colors: ["red","green","blue","purple","orange"]
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    getcolor()
    {
       var index = Math.random()* 5;
       return this.colors[index];
    }
  },
  mounted() 
  {
    if(!(this.loaded))
    {
      axios
      .all([
        axios.get("http://localhost:5001/product/desserts"),
        axios.get("http://localhost:5001/product/chinese"),
        axios.get("http://localhost:5001/product/desi"),
        axios.get("http://localhost:5001/product/drinks"),
        axios.get("http://localhost:5001/product/fastfood"),
        axios.get("http://localhost:5001/product/tandoor"),
      ])
      .then(
        axios.spread((...responses) => {
          this.desserts = responses[0].data.recordset;
          this.chinese = responses[1].data.recordset;
          this.desi = responses[2].data.recordset;
          this.drinks = responses[3].data.recordset;
          this.fastfood = responses[4].data.recordset;
          this.tandoor = responses[5].data.recordset;
        })
      );

    }
    
  },
};
</script>

<style scoped>
.md-card
{
  height: 340px;
  width: 290px;
  box-shadow: 15px 10px 35px gray;
  border-radius: 8px;
}
.md-card .md-card-media img
{
  height: 165px;
  border-radius: 8px 8px 0 0;
}
.md-card .md-card-media
{
  margin: 0px;
}

.md-card .md-card-content{
  padding: 0 15px;
}
.md-card .md-card-content h3{
  margin: 0px;
}

.md-card .md-card-content h1{
  margin: 0px;
  color: #81bdf5;
  font-weight: bold;
  font-size: 14px;
}

.md-drawer {
  width: 250px;
  max-width: calc(100vw - 125px);
}

.dessert-section 
{
  width: 100%;
  padding-right: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  justify-content: center;
}
.dessert {
  cursor: pointer;
}
.food-title {
  position: relative;
  margin-left: 20px;
}
</style>
