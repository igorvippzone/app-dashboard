<template>
  <div class="logo">
    <div>@justFREE</div>
  </div>
</template>

<script>
export default {
  name: "LogoSide"
}
</script>

<style scoped>
  .logo{
    background-color: #1e88e5;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;

  }
  .logo div{
    user-select: none;
  }

  @media (max-width: 1199px){ }

  @media (max-width: 991px){ }

  @media (max-width: 767px){

  }

  @media (max-width: 575px){ }
</style>