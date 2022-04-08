<template>
  <div class="graph">
    <TitleGraphComponent v-bind:elem="elem" />
    <div>
      <SectionOneComponent />
    </div>
  </div>


</template>

<script>
import TitleGraphComponent from "@/components/main-components/TitleGraphComponent";
import SectionOneComponent from "@/components/main-components/section-one/SectionOneComponent";

export default {
  name: "GraphComponent",

  components: {
    TitleGraphComponent,
    SectionOneComponent
  },

  props: {
    elem: Object
  }
}
</script>

<style scoped>
  .graph{
    margin-bottom: 65px;
  }

  @media (max-width: 1199px){ }

  @media (max-width: 991px){ }

  @media (max-width: 767px){

  }
  @media (max-width: 575px){ }
</style>