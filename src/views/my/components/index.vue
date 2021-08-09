<template>
    <div>
        <van-cell-group title="地址管理">
            <van-cell is-link title="收货地址" @click="show = true" to="address-list"/>
            <van-cell is-link title="新增地址" @click="show = true" to="address-add"/>
        </van-cell-group>
        <van-cell-group title="我的订单">
            <van-cell is-link title="订单详情" @click="show = true" to="order-list"/>
        </van-cell-group>
        <van-cell-group title="物流信息">
            <van-cell is-link title="物流详情" @click="show = true" to="express-list"/>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'Basic'
}
</script>
