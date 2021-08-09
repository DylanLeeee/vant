<template>
    <div class="my-container">
        <van-nav-bar
            class="app-nav-bar"
            title="基本信息"
            left-arrow
            @click-left="$router.back()"
        />
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'MyIndex'
}
</script>
