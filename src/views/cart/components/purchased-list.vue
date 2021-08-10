<template>
    <div class="purchased-container">
        <van-checkbox-group v-model="result" >
            <van-row type="flex" justify="end" gutter="1"  v-for="item in dataList" :key="item.id">
                <van-col span="2" offset="4" class="checkbox-col">
                    <van-checkbox :name="item.checkName"></van-checkbox>
                </van-col>
                <van-col span="20">
                    <van-card
                        :price="item.price"
                        :desc="item.desc"
                        title="商品标题"
                        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    >
                        <div slot="footer">
                            <van-stepper v-model="item.count" />
                        </div>
                    </van-card>
                </van-col>
            </van-row>
        </van-checkbox-group>
        <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
    </div>
</template>

<script>
export default {
    name: 'PurchasedList',
    data () {
        return {
            value: 1,
            result: [],
            dataList: [
                {
                    id: 1,
                    price: 2.00,
                    checkName: 'a',
                    desc: '文具盒',
                    count: 0
                },
                {
                    id: 2,
                    price: 4.00,
                    checkName: 'b',
                    desc: '零食',
                    count: 0
                }
            ]
        }
    },
    computed: {
        totalPrice () {
            let res = 0
            this.dataList.forEach((item, index, array) => {
                if ((this.result.indexOf(item.checkName)) !== -1) {
                    res = res + item.count * item.price * 100
                }
            })
            return res
        }
    },
    methods: {
        onSubmit () {
            console.log(this.result)
        }
    }
}
</script>

<style lang="less" scoped>
.checkbox-col {
    margin:auto
}
</style>
