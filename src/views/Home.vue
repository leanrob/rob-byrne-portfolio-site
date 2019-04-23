<template>
  <div class="home">
    <HeaderSection msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from "../components/HeaderSection/HeaderSection";

export default {
  name: "home",
  components: {
	  HeaderSection,
  }
};
</script>
