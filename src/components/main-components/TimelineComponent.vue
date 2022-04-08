<template>
  <div class="timeline-select">
    <p>Timeline:</p>
    <select>
      <option>7 days</option>
      <option>7 days</option>
      <option>7 days</option>
      <option>7 days</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TimelineComponent"
}
</script>

<style scoped>
  .timeline-select{
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .timeline-select p{

    color: #78909c;
  }
  .timeline-select select{
    max-width: 100px;
    width: 100%;
    color: #37474f;
    border-radius: 20px;
    background-color: #cfd8dc;
    border: none;
    padding: 10px 0 10px 15px;
  }
</style>