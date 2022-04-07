<template>
  <li class="nav-item">
    <router-link :to="{path: `${rout.path}`}" class="nav-item_link">
      <img class="icon-nav" :src="require(`../../assets/${rout.iconImage}.svg`)" alt="rout.iconImage">
<!--      <img src="../../assets/i-home.svg">-->
      {{rout.title}}</router-link>

  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    rout:{
      type: Object,
    }
  },
}
</script>

<style scoped>
  .nav-item{
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: stretch;
    /*align-content: stretch;*/
  }
  .nav-item_link{
    padding-top: 20px;
    width: 100%;
    text-decoration: none;
    color: #9e9e9e;

  }
  .nav-item_link.router-link-exact-active{
    background-color: #df468e;
    color: #fff;
  }
  .nav-item_link.router-link-exact-active:hover{
    background-color: #df468e;

  }

  .nav-item_link:hover{
    background-color: #455a64;
    color: #fff;
  }
  .icon-nav {
    margin-right: 15px;
    margin-left: 21px;
  }



  @media (max-width: 1199px){ }

  @media (max-width: 991px){
    .nav-item_link{
      padding-top: 15px;
      font-size: 14px;
      color: #9e9e9e;

    }
  }

  @media (max-width: 767px){

  }

  @media (max-width: 575px){ }
</style>