<template>
  <div class="home">
    <HeaderSection />
    <AboutRobSection />
    <LanguagesFrameworksSection />
    <FooterSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from "../components/Home/HeaderSection/HeaderSection";
import AboutRobSection from "../components/Home/AboutRobSection/AboutRobSection";
import FooterSection from "../components/Home/FooterSection/FooterSection";
import LanguagesFrameworksSection from "../components/Home/LanguagesFrameworksSection/LanguagesFrameworksSection";

export default {
  name: "home",
  components: {
	  HeaderSection,
      AboutRobSection,
      FooterSection,
      LanguagesFrameworksSection,
  }
};
</script>
