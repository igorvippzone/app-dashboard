<template>
    <div class="title_wrapper">
      <div>
        <h2 class="graph-title">{{option.title}}</h2>
        <p class="graph-subtitle">{{option.subTitle}}</p>
      </div>
      <div>
        <TimelineComponent v-if="option.timeline" />
      </div>
    </div>
</template>

<script>
import TimelineComponent from "@/components/main-components/TimelineComponent";
export default {
  name: "TitleGraphComponent",

  components: {
    TimelineComponent
  },

  props: {
    option: Object,
  }
}
</script>

<style scoped>
.title_wrapper{
  padding-bottom: 30px;
  margin-bottom: 40px;
  border-bottom: 2px solid #dee3e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

span{
  display: block;
  color: #78909c;
}
.graph-title{
  font-size: 18px;
  font-weight: 500;
}
.graph-subtitle{
  color: #78909c;
  font-size: 14px;
}

@media (max-width: 1199px){ }

@media (max-width: 991px){ }

@media (max-width: 767px){

}

@media (max-width: 575px){ }
</style>