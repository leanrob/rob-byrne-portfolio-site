<template>
  <div class="home">
    <HeaderSection />
    <AboutRobSection />
    <FooterSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from "../components/Home/HeaderSection/HeaderSection";
import AboutRobSection from "../components/Home/AboutRobSection/AboutRobSection";
import FooterSection from "../components/Home/FooterSection/FooterSection";

export default {
  name: "home",
  components: {
	  HeaderSection,
      AboutRobSection,
      FooterSection,
  }
};
</script>
