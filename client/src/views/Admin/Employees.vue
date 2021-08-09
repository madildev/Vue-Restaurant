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
        </div>
      </div>
  </div>   
</template>

<script>
import { StatsCard } from "@/components";

const toLower = (text) => {
  return text.toString().toLowerCase();
};
const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) => toLower(item.name).includes(toLower(term)));
  }
  return items;
};

export default {
  name: "Employees",
  components: {
    StatsCard,
  },
  data: () => ({
    search: null,
    searched: [],
    users: [
      {
        id: 1,
        name: "Shawna Dubbin",
        email: "sdubbin0@geocities.com",
        gender: "Male",
        title: "Assistant Media Planner",
      },
      {
        id: 2,
        name: "Odette Demageard",
        email: "odemageard1@spotify.com",
        gender: "Female",
        title: "Account Coordinator",
      },
      {
        id: 3,
        name: "Vera Taleworth",
        email: "vtaleworth2@google.ca",
        gender: "Male",
        title: "Community Outreach Specialist",
      },
      {
        id: 4,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "Female",
        title: "Operator",
      },
      {
        id: 5,
        name: "Thatcher Stave",
        email: "tstave4@reference.com",
        gender: "Male",
        title: "Software Test Engineer III",
      },
    ],
  }),
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    },
  },
  created() {
    this.searched = this.users;
  },
};
</script>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
</style>
