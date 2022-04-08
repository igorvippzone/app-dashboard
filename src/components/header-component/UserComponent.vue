<template>
  <div class="user">
    <div class="notification-wrapper">
      <div class="bell"></div>
      <div class="quantity">8</div>
    </div>
    <select class="user-select">
      <option>Fillip J.</option>
      <option>Anton P.</option>
    </select>
    <div class="user-icon">F</div>
  </div>
</template>

<script>
export default {
  name: "UserComponent"
}
</script>

<style scoped>
  .user {
    flex-basis: 40%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .user-select{
    margin-left: 21px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .user-icon{
    border-radius: 50% ;
    background-color: #37474f;
    width: 40px;
    height: 40px;
    color: #fff;
    display: flex;

    justify-content: center;
    align-items: center;
    margin-left: 15px;
  }

  .notification-wrapper {
    position: relative;
    margin-right: 30px;
    cursor: pointer;
  }

  .bell{
    background-image: url("../../assets/i-bell.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;

  }
  .quantity{
    position: absolute;
    background-color: #1e88e5;
    width: 18px;
    height: 18px;
    color: #fff;

    border-radius: 50%;
    font-size: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    top: -50%;
    left: 40%;
  }

  .notification-wrapper::after {
    content: '';
    display: block;
    height: 24px;
    width: 2px;
    background-color: #c0c8d1;
    position: absolute;
    right: -30px;
    top: -4px;
  }

  @media (max-width: 1199px){ }

  @media (max-width: 991px){ }

  @media (max-width: 767px){
    .user {
      flex-basis: 20%;
    }
    .user-select{
      display: none;
    }

  }

  @media (max-width: 575px){ }
</style>