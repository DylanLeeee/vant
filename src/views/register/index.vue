<template>
    <div class="register-container">
        <van-nav-bar
            class="app-nav-bar"
            title="用户注册"
            left-arrow
            @click-left="$router.back()"
        />
        <!-- 注册表单-->
        <van-form @submit="onRegister">
            <van-field
                v-model="user.account"
                left-icon="user-o"
                placeholder="账号"
                :rules="formRules.account"
            />
            <van-field
                v-model="user.password"
                clearable
                type="password"
                left-icon="eye-o"
                placeholder="密码"
                :rules="formRules.password"
            />
            <div class="register-button-wrap">
                <van-button
                class= "login-button"
                type= "info"
                block
                >注册</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>

import { register } from '@/api/user'

export default {
    name: 'RegisterIndex',
    data () {
        return {
            user: {
                account: '',
                password: '',
                address: '',
                phone: ''
            },
            formRules: {
                phone: [
                    { required: true, message: '请输入手机号' },
                    { pattern: /^1\d{10}/, message: '手机号验证错误' }
                ],
                account: [
                    { required: true, message: '请输入账号' }
                ],
                password: [
                    { required: true, message: '请输入密码' },
                    { pattern: /^(?=.*[A-Za-z])(?=.*\d)[!@#$:.",^&*()A-Za-z\d]{8,16}$/, message: '密码8-26位,不能全为数字或字母' }
                ]
            }
        }
    },
    methods: {
        async onRegister () {
            this.$toast.loading({
                message: '注册中',
                forbidClick: true,
                duration: 0
            })
            try {
                await register(this.user)
                this.$toast.success('注册成功')
            } catch {
                this.$toast.fail('注册失败')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.register-container{
    .van-nav-bar__content{
        background-color: #6db4fb;
    }
    .register-button-wrap {
        padding: 26px 16px;
        .login-button {
            background-color: #6db4fb;
            border: none;
            .van-button__text {
                font-size: 16px;
            }
        }
    }
}
</style>
