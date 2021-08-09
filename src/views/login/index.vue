<template>
    <div class="login-container">
        <van-nav-bar
            class="app-nav-bar"
            title="用户登录"
            left-arrow
            @click-left="$router.back()"
        />

        <!-- 登录表单-->
        <van-form @submit="onLogin">
            <van-field
                v-model="user.mobile"
                left-icon="user-o"
                placeholder="请输入账号"
                :rules="formRules.mobile"
            />
            <van-field
                v-model="user.code"
                clearable
                left-icon="eye-o"
                placeholder="请输入密码"
                :rules="formRules.code"
            />
            <div class="login-button-wrap">
                <van-button
                class= "login-button"
                type= "info"
                block
                >登录</van-button>
            </div>
        </van-form>
        <div class="register-button-wrap">
            <van-button
            class= "login-button"
            type= "info"
            block
            @click="onRegister"
            >注册</van-button>
        </div>
    </div>
</template>

<script>

import { login } from '@/api/user'
// import { Toast } from 'vant'

export default {
    name: 'LoginIndex',
    data () {
        return {
            user: {
                mobile: '',
                code: ''
            },
            formRules: {
                mobile: [
                    { required: true, message: '请输入账号号' }
                ],
                code: [
                    { required: true, message: '请输入密码' }
                ]
            }
        }
    },
    methods: {
        async onLogin () {
            this.$toast.loading({
                message: '登录中',
                forbidClick: true,
                duration: 0
            })
            try {
                const res = await login(this.user)
                console.log(res)
                this.$toast.success('登录成功')
                this.$router.push({ name: 'home' })
            } catch {
                console.log('登录失败')
                this.$toast.fail('登录失败')
            }
        },
        onRegister () {
            this.$router.push({ name: 'register' })
        }
    }
}
</script>

<style scoped lang="less">
.login-container {
    .send-btn {
        width: 76px;
        height: 28px;
        background-color: #ddbaba;
        border: none;
    }
    .login-button-wrap {
        padding: 26px 16px;
        .login-button {
            background-color: #6db4fb;
            border: none;
            .van-button__text {
                font-size: 16px;
            }
        }
    }
    .register-button-wrap {
        padding: 0px 16px;
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
