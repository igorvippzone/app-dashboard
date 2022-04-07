<template>
  <form v-on:submit.prevent="onSubmit" class="search">
    <button type="submit" class="search-button"></button>
    <input
        type="text"
        v-model="value"
        class="search-input"
        placeholder="Search"
    />

  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      value: ''
    }
  },

  methods: {
    onSubmit() {
      console.log('click')
      this.value = ''
    }
  }
}

</script>

<style scoped>
.search{
  margin-right: auto;


  display: flex;
  flex-basis: 60%;
}
.search-input {
  font-size: 14px;
  border: none;
  background-color: inherit;

  width: 100%;
}
.search-input:focus {
  outline: none;
  border-bottom: 1px solid #a7a3a3;
}
.search-button{
  background-image: url("../../assets/search.svg");
  background-repeat: no-repeat;
  background-color: inherit;
  background-position: center;
  width: 20px;
  height: 18px;
  margin-right: 15px;

  border: none;
  cursor: pointer;
  flex-grow: 0;
}



@media (max-width: 1199px){ }

@media (max-width: 991px){ }

@media (max-width: 767px){
  .search{
    flex-basis: 80%;
  }
  .search-input {
    font-size: 18px;

  }
}

@media (max-width: 575px){ }
</style>