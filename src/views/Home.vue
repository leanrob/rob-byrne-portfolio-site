<template>
  <div class="home">
    <HeaderSection />
    <AboutRobSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from "../components/Home/HeaderSection/HeaderSection";
import AboutRobSection from "../components/Home/AboutRobSection/AboutRobSection";

export default {
  name: "home",
  components: {
	  HeaderSection,
      AboutRobSection,
  }
};
</script>
