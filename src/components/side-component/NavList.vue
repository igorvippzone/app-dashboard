<template>
  <nav class="nav">
    <ul class="nav-list">
      <NavItem
        v-for="rout of routs" :key="rout.title"
        v-bind:rout="rout"
        v-bind:isActiveSideMenu="isActiveSideMenu"
        @closeSideMenu="closeSideMenu"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from "@/components/side-component/NavItem";
export default {

  name: "NavList",
  components: {
    NavItem
  },
  props: {
    isActiveSideMenu: Boolean
  },
  data() {
    return {
      routs: [
        {
          title: 'Home',
          iconImage: 'i-home',
          path: '/'
        },
        {
          title: 'Time Management',
          iconImage: 'i-time',
          path: '/time-management'
        },
        {
          title: 'Inbox',
          iconImage: 'i-inbox',
          path: '/inbox'
        },
        {
          title: 'Calendar',
          iconImage: 'i-calendar',
          path: '/calendar'
        },
        {
          title: 'Analytics',
          iconImage: 'i-analytics',
          path: '/analytics'
        },
        {
          title: 'Settings',
          iconImage: 'i-settings',
          path: '/settings'
        },
      ]
    }
  },
  methods: {
    closeSideMenu(close) {
      this.$emit("closeSideMenu", close)
      console.log('navList')
    }
  }
}
</script>

<style scoped>
  .nav{
    width: 100%;

  }

  @media (max-width: 1199px){ }

  @media (max-width: 991px){ }

  @media (max-width: 767px){

  }

  @media (max-width: 575px){ }
</style>