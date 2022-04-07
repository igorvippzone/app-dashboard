<template>
  <button class="burger" v-bind:class="{active: isActive}"  v-on:click="onSideMenuClicked">
    <span></span>
  </button>
</template>

<script>
export default {
  name: "BurgerComponent",
  data(){
    return {
      isActive: false,
    }
  },
  methods: {
    onSideMenuClicked(e) {
      console.log(e.target)
      this.isActive = !this.isActive;

      this.$emit("viewSideMenu",this.isActive)
    }
  }
}
</script>

<style scoped>
.burger{
  width: 30px;
  height: 25px;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;

  flex-shrink: 0;
  background-color: transparent;
  border: none;

  display: none;
  margin-left: 10px;
  z-index: 10;

}
.burger span, .burger span:before, .burger span:after{
  width: 100%;
  position: absolute;
  height: 5px;
  background: #333;
  display: block;
  transition: .3s;
  border-radius: 5px;
  background-color: #000;
}
.burger span:before{
  content: "";
  top: -10px;

  transition: top 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.burger span{
  top: 8px;
}

.burger span:after{
  content: "";
  bottom: -10px;
  transition: bottom 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.burger.active span:before{
  content: "";
  top: 0px;
  transform: rotate(45deg);
  transition: top 300ms, transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.burger.active span:after{
  content: "";
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 300ms, transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.burger.active span{
  background: rgba(255, 255, 255, 0);
}

.burger.active span:after,
.burger.active span:before{
  background-color: #df468e;
}



@media (max-width: 1199px){ }

@media (max-width: 991px){

}

@media (max-width: 767px){
  .burger {
    display: block;
    z-index: 20;
  }
}

@media (max-width: 575px){ }
</style>