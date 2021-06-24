<template>
  <div class="employees">
    <div class="content">
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <stats-card data-background-color="red">
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
        <div></div>

        <!-- This div shows the number of the of the Employees -->
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <stats-card data-background-color="green">
            <template slot="header">
              <md-icon>account_circle</md-icon>
            </template>

            <template slot="content">
              <p class="category">Waiters</p>
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
        <div></div>

        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <stats-card data-background-color="blue">
            <template slot="header">
              <md-icon>account_circle</md-icon>
            </template>

            <template slot="content">
              <p class="category">Chefs</p>
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
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard } from "@/components";
export default {
  name: "Employees",
  components: {
    StatsCard,
  },
};
</script>
