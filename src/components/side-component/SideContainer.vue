<template>

    <div
        class="side"
        v-bind:class="{hidden: !isActiveSideMenu}"
    >
      <div
        class="side-layer"
        v-on:click="closeSideMenu"
      ></div>

      <LogoSide />
      <NavList @closeSideMenu="closeSideMenu"/>
    </div>

</template>

<script>
import LogoSide from "@/components/side-component/LogoSide";
import NavList from "@/components/side-component/NavList";
export default {
  name: "SideContainer",
  components: {
    LogoSide,
    NavList
  },
  props: {
    isActiveSideMenu:Boolean
  },
  methods: {
    closeSideMenu(close) {
      this.$emit("closeSideMenu", close)
      console.log('Side')
    }
  }
}
</script>

<style scoped>

  .side{
    margin: 0;
    padding: 0;
    background-color: #37474f;
    flex-basis: 20%;

  }

  .side-layer{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    left: 100%;
    bottom: 0;
    display: none;
  }


  @media (max-width: 1199px){ }

  @media (max-width: 991px){
    .side{
      flex-basis: 30%;
    }
  }

  @media (max-width: 767px){

    .side{
      position: absolute;
      top: 0;
      bottom: 0;
      transform: translateX(0);
      transition: transform .3s ease-in-out;
      width: 70%;
      z-index: 5;
      height: 100vh;
    }
    .side.hidden{
      transform: translateX(-100%);
    }
    .side-layer{
      display: block;
      transform: translateX(0);
      opacity: 1;
      transition: opacity .3s ease-in-out .2s;
    }

    .side.hidden .side-layer{
      opacity: 0;
      transform: translateX(-100%);
    }

  }

  @media (max-width: 575px){ }
</style>