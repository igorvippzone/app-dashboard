<template>

    <div>
      <SectionOneComponent />
      <SectionTwoComponet />
      <SectionThreeComponet />
      <SectionFourComponet />
    </div>


</template>

<script>
import SectionOneComponent from "@/components/main-components/section-one/SectionOneComponent";
import SectionTwoComponet from "@/components/main-components/section-two/SectionTwoComponet";
import SectionThreeComponet from "@/components/main-components/section-three/SectionThreeComponet";
import SectionFourComponet from "@/components/main-components/section-four/SectionFourComponet";
export default {
  name: "HomeView",
  components: {

    SectionOneComponent,
    SectionTwoComponet,
    SectionThreeComponet,
    SectionFourComponet
  }
}
</script>

<style scoped>

</style>