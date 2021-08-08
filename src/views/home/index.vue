<template>
    <div class="home-container">
        <van-nav-bar
            class="nav-container"
            title="JD"
        />
        <van-tabs v-model="active">
            <van-tab :title="item.name" v-for="item in tabsList" :key="item.id">
                <article-list :articleTitle="item.name"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

import ArticleList from './components/article-list'
import { getPruductsCatagory } from '@/api/products.js'
export default {
    name: 'HomeIndex',
    components: { ArticleList },
    data () {
        return {
            articleTitle: '首页title',
            tabsList: '',
            active: 0
        }
    },
    created () {
        this.getTabsList()
    },
    methods: {
        async getTabsList () {
            const { data } = await getPruductsCatagory()
            this.tabsList = data.data
        }
    }
}
</script>

<style lang="less" scoped>
.home-container {
    .nav-container {
        background-color: #6db4fb;
        /deep/ .van-nav-bar__title {
            color: #fff;
        }
    }
}
</style>
