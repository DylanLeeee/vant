<template>
    <div class="order-container">
        <van-cell-group v-for="item in orderList" :key="item.id" :title="item.expressNum">
            <van-cell title="订单号" :value="item.orderId"/>
            <van-cell title="物流信息" :value="item.location"/>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'Express',
    data () {
        return {
            orderList: [
                {
                    id: 1,
                    expressNum: '物流1',
                    orderId: '3232323232',
                    location: '目前快递已签收'
                },
                {
                    id: 2,
                    expressNum: '物流2',
                    orderId: '79980980',
                    location: '快递到达福州'
                }
            ]
        }
    }
}
</script>
