<template>
  <div class="content">
    <div class="md-layout">
      <!-- This card will display the desserts-->
      <div class="md-layout-item md-large-size-100 md-size-66">
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

                <md-card-header>
                  <div class="md-title">{{ dish.D_Name }}</div>
                </md-card-header>

                <md-card-content>
                  {{ dish.D_Description }}
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

              <md-card-header>
                <div class="md-title">{{ dish.D_Name }}</div>
              </md-card-header>

              <md-card-content>
                {{ dish.D_Description }}
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

              <md-card-header>
                <div class="md-title">{{ dish.D_Name }}</div>
              </md-card-header>

              <md-card-content>
                {{ dish.D_Description }}
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

              <md-card-header>
                <div class="md-title">{{ dish.D_Name }}</div>
              </md-card-header>

              <md-card-content>
                {{ dish.D_Description }}
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

              <md-card-header>
                <div class="md-title">{{ dish.D_Name }}</div>
              </md-card-header>

              <md-card-content>
                {{ dish.D_Description }}
              </md-card-content>
            </md-card></router-link>
          </div>
        </div>

        <!-- This section will show the tandoor items -->
        <div class="food-title">
          <h2>Tandoor</h2>
        </div>
        <div class="dessert-section">
          <div class="dessert" v-for="(dish, index) in tandoor" :key="index">
            <router-link
              :to="{ name: 'cdetails', params: { dishid: dish.D_Id } }"
              ><md-card>
              <md-card-media>
                <img :src="dish.D_Img" alt="People" />
              </md-card-media>

              <md-card-header>
                <div class="md-title">{{ dish.D_Name }}</div>
              </md-card-header>

              <md-card-content>
                {{ dish.D_Description }}
              </md-card-content>
            </md-card></router-link>
          </div>
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
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
  mounted() {
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

<style lang="scss" scoped>
.md-app 
{
  min-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}
.md-card
{
  height: 250px;
}

// Demo purposes only
.md-drawer {
  width: 250px;
  max-width: calc(100vw - 125px);
}

.dessert-section {
  padding-right: 10px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
  grid-column-gap: 35px;
}
.dessert {
  cursor: pointer;
}
.food-title {
  position: relative;
}
</style>
