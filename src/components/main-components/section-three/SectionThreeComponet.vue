<template>
  <div>
    <TitleGraphComponent v-bind:option="titleData" />
  </div>

</template>

<script>
import TitleGraphComponent from "@/components/main-components/TitleGraphComponent";

export default {
  name: 'SectionThreeComponent',
  components: {
    TitleGraphComponent
  },

  data() {
    return {
      titleData: {
        title:'Current Progress',
        subTitle: 'This table will show you how your current projects are behaving.',
        timeline: false
      },
    }
  }
}
</script>
