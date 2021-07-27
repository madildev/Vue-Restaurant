<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar>
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Vue-Restaurant</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
          <router-link :to ="{ name: 'cdashboard'}"><span class="md-list-item-text">Dashboard</span></router-link>
          </md-list-item>

          <md-list-item>
          <router-link :to ="{ name: 'cprofile'}"><span class="md-list-item-text">Profile</span> </router-link>
          </md-list-item>

          <md-list-item>
          <router-link :to ="{ name: 'corders'}"><span class="md-list-item-text">Orders</span></router-link>
          </md-list-item>

          <md-list-item>
          <router-link :to ="{ name: 'creservations'}"><span class="md-list-item-text">Reservation</span></router-link>
          </md-list-item>
          
          <md-list-item>
          <router-link :to ="{ name: 'hero'}"><span class="md-list-item-text">Log Out</span></router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'CAdmin',
    data: () => ({
      menuVisible: false,
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }
  .md-list{
    margin-left: 10px;
  }
   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>