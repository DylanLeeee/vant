<template>
    <div class="article-list">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell v-for="item in productsList" :key="item.skuid" >
                <van-card
                    num="2"
                    :price="item.unitPrice"
                    desc="描述信息"
                    :title="item.name"
                    :thumb="item.imgUrl"
                    >
                    <template #tags>
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </template>
                    <template #footer>
                        <van-button size="mini">按钮</van-button>
                        <van-button size="mini">按钮</van-button>
                    </template>
                </van-card>
            </van-cell>
        </van-list>
    </div>
</template>

<script>

import { getPruductsInfo } from '@/api/products.js'
export default {
    name: 'ArticleList',
    props: {
        articleTitle: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            productsList: ''
        }
    },
    mounted () {
        this.getProductsList()
    },
    methods: {
        async getProductsList () {
            const { data } = await getPruductsInfo({ catagory: this.articleTitle })
            console.log(data)
            this.productsList = data.data
        }
    }
}
</script>

<style lang="less" scoped>
.article-list {
    position:fixed;
    left: 0;
    right: 0;
    top: 90px;
    bottom: 50px;
    overflow-y:auto;
}
</style>
