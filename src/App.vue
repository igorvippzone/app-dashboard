<template>
  <div id="app">
    <SideContainer v-bind:isActiveSideMenu="isActiveSideMenu" @closeSideMenu="closeSideMenu"/>
    <div class="wrapper">
      <HeaderContainer v-bind:isActiveSideMenu="isActiveSideMenu" @viewSideMenu="viewSideMenu"/>
      <main class="main"><router-view /></main>
    </div>
  </div>
</template>

<script>
import HeaderContainer from '@/components/header-component/HeaderContainer'
import SideContainer from "@/components/side-component/SideContainer";

export default {
  name: 'App',
  components: {
    HeaderContainer,
    SideContainer
  },
  data(){
    return {
      isActiveSideMenu: false
    }
  },
  methods: {
    viewSideMenu(toggle) {
      this.isActiveSideMenu = toggle;
    },
    closeSideMenu(close) {
      this.isActiveSideMenu = !close;
      console.log("App - ", this.isActiveSideMenu)
    },

  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
  color: #37474f;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;


  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: space-between;

  align-items: stretch;
  align-content: stretch;
  overflow: hidden;
}
.wrapper{
  background-color: #f5f5f5;
  flex-basis: 80%;
  overflow: hidden;
}
.main {
  margin: 0;
  padding: 50px 70px;
  overflow-y: auto;
  height: calc(100% - 70px);

  scrollbar-width: thin;
  scrollbar-color: #df468e #f5f5f5;
}
.main::-webkit-scrollbar {
  width: 12px;
}
.main::-webkit-scrollbar-track {
  background: transparent;
}
.main::-webkit-scrollbar-thumb {
  background-color: #df468e;
  border-radius: 20px;
  border: 3px solid #f5f5f5;
}

.close{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.82);
  z-index: 1;
  display: none;
}




@media (max-width: 1199px){ }

@media (max-width: 991px){
  .wrapper {
    flex-basis: 70%;
  }
}

@media (max-width: 767px){
  .wrapper {
    flex-basis: 100%;
  }
  .main {
    margin: 0;
    padding: 15px 20px;
    overflow-y: auto;
    height: calc(100% - 70px);

    scrollbar-width: thin;
    scrollbar-color: #df468e #f5f5f5;
  }

  .close{
    display: block;
    transform: translateX(0);
    transition: transform .3s ease-in-out;
  }
  .close.hidden{

    transform: translateX(-100%);
  }
}

@media (max-width: 575px){ }
</style>
