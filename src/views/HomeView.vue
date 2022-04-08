<template>

    <div>
<!--      <SectionThreeComponet />-->
      <SectionOneComponent />
    </div>


</template>

<script>
import SectionOneComponent from "@/components/main-components/section-one/SectionOneComponent";
// import SectionThreeComponet from "@/components/main-components/section-three/SectionThreeComponet";
export default {
  name: "HomeView",
  components: {
    // SectionThreeComponet,
    SectionOneComponent
  }
}
</script>

<style scoped>

</style>