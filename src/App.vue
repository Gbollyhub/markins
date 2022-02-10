<template>
  <div id="app">
    <Header/>
    <router-view/>
     <Footer/>
  </div>
</template>

<script>
import Header from "@/components/webstore/Header.vue"
import Footer from "@/components/webstore/Footer.vue"
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

@import url("./assets/css/markins-store.webflow.css");
@import url("./assets/css/normalize.css");
@import url("./assets/css/webflow.css");


#app {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
}


</style>

