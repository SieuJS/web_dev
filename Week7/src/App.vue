
<script setup>
import HeadBanner from './components/HeadBanner.vue'
import MainNavigation from './components/MainNavigation.vue';
import SideHeader from './components/side-content/Side.vue'
import MainContent from './components/main-content/MainContent.vue'
</script>

<template>
  <HeadBanner/>
  <MainNavigation/>
  <div class="d-grid mt-3">
      <SideHeader class = "g-col-6 bg-light "></SideHeader>
      <MainContent class="g-col-6 bg-light"/>
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