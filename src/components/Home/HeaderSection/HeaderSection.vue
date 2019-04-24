<template>
  <div id="header-container">
    <div id="circle"></div>
    <div id="tri1"></div>
    <div id="strip1" class="strip"></div>
    <div id="tri2"></div>
    <div id="tri3"></div>
    <div id="strip2" class="strip"></div>
    <div id="strip3" class="strip"></div>
    <div id="leftside">Build > Test > Measure > Iterate</div>
    <div id="rightside">Rust > React > Vue > GCP</div>
    <div id="topLeft">Full Stack
      <br><span>Software Dev</span></div>
    <div id="topRight">2019</div>
    <div id="headline">Rob Byrne</div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
