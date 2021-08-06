<template>
    <div class="login-container">
        <van-nav-bar
            class="app-nav-bar"
            title="登录"
            left-arrow
            @click-left="$router.back()"
        />

        <!-- 登录表单-->
        <van-cell-group>
            <van-field
                v-model="user.mobile"
                required
                left-icon="phone-o"
                placeholder="请输入手机号"
            />
            <van-field
                v-model="user.code"
                required
                left-icon="medal-o"
                placeholder="请输入验证码"
            >
                <template #button>
                    <van-button class="send-btn" size="small" round type="primary">验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>
        <div class="login-button-wrap">
            <van-button  
                class="login-button" 
                type="primary" 
                block
                @click="onLogin"
            >登录</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginIndex',
    data () {
        return {
            user: {
                mobile: '',
                code: ''
            }
        }
    },
    methods: {
        
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
}
</style>
