<template>
  <header class="header">
    <FormComponent />
    <UserComponent />
    <BurgerComponent @viewSideMenu="viewSideMenu"/>
  </header>
</template>

<script>
  import FormComponent from "@/components/header-component/FormComponent";
  import UserComponent from "@/components/header-component/UserComponent";
  import BurgerComponent from "@/components/header-component/BurgerComponent";
  export default {

    name: "NavList",
    components: {
      FormComponent,
      UserComponent,
      BurgerComponent
    },
    methods: {
      viewSideMenu(isActive){
        this.$emit("viewSideMenu", isActive)
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 70px;
    background-color: #e0e0e0;

    display: flex;
    align-items: center;
    align-content: stretch;
    padding: 0 35px;
  }

  @media (max-width: 1199px){ }

  @media (max-width: 991px){ }

  @media (max-width: 767px){
    .header {
      padding: 0 10px;
    }

  }

  @media (max-width: 575px){ }
</style>
