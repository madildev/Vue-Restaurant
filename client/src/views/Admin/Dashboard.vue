<template>
  <div class="content">
    <div class="md-layout">
      
      <!-- This div shows the number of the of the Employees -->
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>account_circle</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Employees</p>
            <h3 class="title">100</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div>
    </div>

   <!-- This div shows the total number of reviews by the customers --> 
   <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>favorite</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Reviews</p>
            <h3 class="title">50</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div>
    </div>
   
   <!-- This div shows the total Reservations -->
    <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Reservations</p>
            <h3 class="title">200</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div>
    </div>
   
   <!-- This div shows the total orders -->
    <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>paid</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Orders</p>
            <h3 class="title">50</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div>
    </div>
       
       <!-- This table shows the employeee Information -->
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="purple" :tabledata=users></ordered-table>
          </md-card-content>
        </md-card>
      </div>

  </div>
</div>
</template>

<script>
import {StatsCard} from "@/components";
import {OrderedTable} from "@/components";
export default {
  components:{
     StatsCard,
     OrderedTable
  },
  data() {
    return {
      users:[{
          id: 1,
          name: "Ahmed",
          salary: "Rs 15000",
          country: "Pakistan",
          city: "Lahore"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        }
       ],
       responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
    }
  }
};    
</script>
<style>
.title{
  color: black;
}
</style>
