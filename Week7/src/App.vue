
<script setup>
import HeadBanner from './components/HeadBanner.vue'
import MainNavigation from './components/MainNavigation.vue';
import SideHeader from './components/side-content/Side.vue'
import MainContent from './components/main-content/MainContent.vue'
</script>

<template>
  <HeadBanner/>
  <MainNavigation/>
  <div class = "row mt-3 g-1">
      <div id="side" class = "col-3">
        <SideHeader class = "card"/>
      </div>
      <div id = "content" class = "col-9">
        <MainContent class = "card"/>
      </div>
  </div>
</template>

<script>
export default {
  name : "App",
  data() {
    return {
      name : "<h1>Sieu</h1>",
    }
  }
}</script>

<style>

  

</style>