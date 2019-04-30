<template>
  <div class="home">
    <HeaderSection />
    <AboutRobSection />
    <MadeWithSection />
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
import MadeWithSection from "../components/Home/MadeWithSection/MadeWithSection";

export default {
  name: "home",
  components: {
	  HeaderSection,
      AboutRobSection,
      FooterSection,
      LanguagesFrameworksSection,
      MadeWithSection,
  }
};
</script>
