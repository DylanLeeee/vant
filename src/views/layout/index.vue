<template>
    <div class="layout-container">
        <!-- 子路由 -->
        <router-view />
        <!-- 底部导航栏-->
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="envelop-o" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            active: 1
        }
    }
}
</script>
