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
                    num="1"
                    :price="item.bestPrice"
                    desc="描述信息"
                    :title="item.name"
                    :thumb="item.imgUrl"
                    :origin-price="item.unitPrice"
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
            productsList: '',
            loading: false,
            finished: true
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
        },
        onLoad () {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                // 加载状态结束
                this.loading = true
                // 数据全部加载完成
                if (this.productsList.length >= 10) {
                    this.finished = true
                }
            }, 1000)
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
