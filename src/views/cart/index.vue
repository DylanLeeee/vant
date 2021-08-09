<template>
    <div class="cart-container">
        <van-nav-bar
            class="app-nav-bar"
            title="购物车"
            left-arrow
            @click-left="$router.back()"
        />
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>
</template>

<script>
export default {
    name: 'Cart'
}
</script>
