<template>
    <div v-html="title" class = "bg-light" id = "banner"></div>

</template>

<script>
    export default {
        name : "HeadBanner",
        data() {
            return {
                title : "<h2>VUEJS</h2>"
            };
        }
    }
</script>

<style>
    #banner {
        width : 100%;
    }
</style>