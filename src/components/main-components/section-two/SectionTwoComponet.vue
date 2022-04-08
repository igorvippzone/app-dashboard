<template>
  <div>
    <TitleGraphComponent v-bind:option="titleData" />
  </div>

</template>

<script>
import TitleGraphComponent from "@/components/main-components/TitleGraphComponent";

export default {
  name: 'SectionTwoComponent',
  components: {
    TitleGraphComponent
  },

  data() {
    return {
      titleData: {
        title:'Crunch some Numbers',
        subTitle: 'See how your projects are progressing via the new statistics engine.',
        timeline: true
      },
    }
  }
}
</script>
