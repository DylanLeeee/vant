<template>
    <div id="iframe-container">
        <iframe :src="iframeSrc" scrolling="auto" frameborder="0" id="iframe" class="trend-container2"></iframe>
    </div>
</template>

<script>
export default {
    name: 'JdDetail',
    data () {
        return {
            iframeSrc: 'http://item.jd.com/100013389522.html'
        }
    }
}
</script>

<style scoped>
.iframe-container {
    width:auto;
    height: 500px;
}
.trend-container2 {
  position: relative;
  width: 100%;
  min-height: 700px;
  padding-bottom: 16px;
}
</style>
