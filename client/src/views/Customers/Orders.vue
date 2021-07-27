<template>
  <div class="orders">
    <div class="content">
      <div class="order-details">
        <md-table v-model="orders" md-card>
          <md-table-toolbar>
            <h1 class="md-title">Orders</h1>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Order Id" md-sort-by="id">{{
              item.O_Id
            }}</md-table-cell>
            <md-table-cell md-label="First Name">{{
              item.C_FirstName
            }}</md-table-cell>
            <md-table-cell md-label="Last Name">{{
              item.C_LastName
            }}</md-table-cell>
            <md-table-cell md-label="Dish Name">{{
              item.D_Name
            }}</md-table-cell>
            <md-table-cell md-label="Price">{{ item.D_Price }}</md-table-cell>
            <md-table-cell md-label="Quantity">{{
              item.Quantity
            }}</md-table-cell>
            <md-table-cell md-label="Date">{{ item.O_Date }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "COrders",
  data() {
    return {
      date: this.currentDateTime(),
      id: this.$route.params.cusid,
      orders: [],
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;
      return dateTime;
    },
  },
  mounted() {
    axios
      .post("http://localhost:5001/dish/getorder", {
        cusid: this.id,
        date: this.date,
      })
      .then((res) => {
        console.log(res);
        this.orders = res.data.recordset;
      });
  },
};
</script>
