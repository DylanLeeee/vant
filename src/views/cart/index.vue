<template>
    <div class="cart-container">
        <van-nav-bar
            class="app-nav-bar"
            title="购物车"
            left-arrow
            @click-left="$router.back()"
        />
       <PurchasedList></PurchasedList>
    </div>
</template>

<script>
import PurchasedList from './components/purchased-list'
export default {
    name: 'Cart',
    components: {
        PurchasedList
    }
}
</script>
