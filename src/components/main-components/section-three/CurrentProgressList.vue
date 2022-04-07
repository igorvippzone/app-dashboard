<template>
  <ul class="current-list">
    <li class="current-item">
      <div class="wrapper-description">
        <div class="image-container"></div>
        <div>
          <h3>Project Title</h3>
          <p>Design & Development</p>
        </div>
      </div>

      <div>
        <p>Lastupdate Today at 4:24 AM</p>
        <div class="time">
          26:30
        </div>
        <div class="message">
          624
        </div>
        <progress value="`${value}`" max="100">
          200
        </progress>
      </div>
    </li>

  </ul>
</template>

<script>
export default {
  name: "CurrentProgressList",
  data() {
    return{
      value: 100
    }
  }
}
</script>

<style scoped>
  .current-list{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .current-item{
    background-color: #fff;
    padding: 20px;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .wrapper-description{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .image-container{
    width: 60px;
    height: 60px;
    background-color: #cfd8dc;
  }

  progress{
    /*background-color: #ff0000;*/

    border-radius: 4px;
    max-width: 200px;
    width: 100%;
    height: 8px;
  }
  progress::-webkit-progress-bar {
    background-color: #cfd8dc;
    border-radius: 4px;
  }

  progress::-webkit-progress-value {
    background-color: #7bff00;
    border-radius: 4px;
  }

</style>