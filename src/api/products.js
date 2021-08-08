import request from '@/utils/request'

/*
* 登录
*/
export const getPruductsCatagory = () => {
    return request({
        method: 'POST',
        url: '/app_get_pruducts_catagory'
    })
}

/**
 * @desc 获取分类信息
 */
export const getPruductsInfo = data => {
    return request({
        method: 'POST',
        url: '/app_get_pruducts_info',
        data
    })
}
