<template>
    <div class="title_wrapper">
      <div>
        <h2>{{titleGraph.title}}</h2>
        <p>{{titleGraph.subTitle}}</p>
      </div>
      <div>
        {{titleGraph.timeline ? 'timeline' : ''}}
      </div>
    </div>
</template>

<script>
export default {
  name: "TitleGraphComponent",
  props: {
    titleGraph: Object,
  }
}
</script>

<style scoped>
.title_wrapper{
  padding-bottom: 30px;
  margin-bottom: 40px;
  border-bottom: 2px solid #dee3e7;
}
span{
  display: block;
  color: #78909c;
}

@media (max-width: 1199px){ }

@media (max-width: 991px){ }

@media (max-width: 767px){

}

@media (max-width: 575px){ }
</style>