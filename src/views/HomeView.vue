<template>

    <div>
      <SectionThreeComponet />
      <SectionOneComponent />
    </div>


</template>

<script>
import SectionOneComponent from "@/components/main-components/section-one/SectionOneComponent";
import SectionThreeComponet from "@/components/main-components/section-three/SectionThreeComponet";
export default {
  name: "HomeView",
  components: {
    SectionThreeComponet,
    SectionOneComponent
  },
  data() {
    return {
      arrTitles:[
        {
          title: 'Hi Fillip,',
          subTitle: 'Checkout your latest projects and their progress.',
          timeline: false
        },
        {
          title: 'Crunch some Numbers ',
          subTitle: 'See how your projects are progressing via the new statistics',
          timeline: true
        },
        {
          title: 'Crunch some Numbers ',
          subTitle: 'See how your projects are progressing via the new statistics',
          timeline: true
        },
        {
          title: 'Crunch some Numbers ',
          subTitle: 'See how your projects are progressing via the new statistics',
          timeline: true
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>