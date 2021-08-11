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
                    @click-thumb="getDetail"
                    >
                    <template #tags>
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </template>
                    <template #footer>
                        <!-- <div class="footer-div"> -->
                        <!-- <van-goods-action-button  type="danger" text="购物车" to="cart"/>
                        <van-goods-action-button   type="danger" text="购买" /> -->
                        <van-button round type="danger" size="small" @click="addCart">加购物车</van-button>
                        <van-button round type="danger" size="small">立即购买</van-button>
                        <!-- </div> -->
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
            finished: true,
            show: false
        }
    },
    mounted () {
        this.getProductsList()
    },
    methods: {
        // 获取商品列表
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
        },
        async addCart () {
            // 加入购物车
            this.$toast('已加入购物车')
        },
        getDetail () {
            this.$router.push({ name: 'jddetail' })
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
.footer-div {
    display: flex;
    flex-direction: row;
    width: 150px;
    float: right;
    .van-button__content {
        width:160px;
        .van-button__text {
            font-size: smaller;
        }
    }
}
</style>
