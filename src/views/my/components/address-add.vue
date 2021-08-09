<template>
    <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
    />
</template>

<script>
import { areaList } from '@vant/area-data'
export default {
    name: 'Address',
    data () {
        return {
            areaList
        }
    }
}
</script>
