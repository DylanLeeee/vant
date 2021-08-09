<template>
    <div class="search-container">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'SearchIndex',
    data () {
        return {
            value: ''
        }
    }
}
</script>
