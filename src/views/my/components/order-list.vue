<template>
    <div class="order-container">
        <van-cell-group v-for="item in orderList" :key="item.id" :title="item.orderNum">
            <van-cell title="订单号" :value="item.orderId"/>
            <van-cell title="电话" :value="item.phone"/>
            <van-cell title="收获地址" :value="item.address"/>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'Orders',
    data () {
        return {
            orderList: [
                {
                    id: 1,
                    orderNum: '订单1',
                    orderId: '3232323232',
                    address: '东北那嘎子',
                    phone: '13562173287'
                },
                {
                    id: 2,
                    orderNum: '订单2',
                    orderId: '79980980',
                    address: '福建那嘎子',
                    phone: '13562145641'
                }
            ]
        }
    }
}
</script>
