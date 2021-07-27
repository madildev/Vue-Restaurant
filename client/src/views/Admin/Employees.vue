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

          <div
            class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
          >
            <md-table
              v-model="searched"
              md-sort="name"
              md-card
              md-fixed-header
            >
              <md-table-toolbar>
                <div class="md-toolbar-section-start">
                  <h1 class="md-title">Users</h1>
                </div>

                <md-field md-clearable class="md-toolbar-section-end">
                  <md-input
                    placeholder="Search by name..."
                    v-model="search"
                    @input="searchOnTable"
                  />
                </md-field>
              </md-table-toolbar>

              <md-table-empty-state
                md-label="No users found"
                :md-description="
                  `No user found for this '${search}' query. Try a different search term or create a new user.`
                "
              >
                <md-button class="md-primary md-raised" @click="newUser"
                  >Create New User</md-button
                >
              </md-table-empty-state>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
                  item.id
                }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="name">{{
                  item.name
                }}</md-table-cell>
                <md-table-cell md-label="Email" md-sort-by="email">{{
                  item.email
                }}</md-table-cell>
                <md-table-cell md-label="Gender" md-sort-by="gender">{{
                  item.gender
                }}</md-table-cell>
                <md-table-cell md-label="Job Title" md-sort-by="title">{{
                  item.title
                }}</md-table-cell>
              </md-table-row>
            </md-table>
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
