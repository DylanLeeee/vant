/*
* 用户请求相关模块
*/
import request from '@/utils/request'

/*
* 登录
*/
export const login = data => {
    return request({
        method: 'POST',
        url: '/app/v1_0/login',
        data
    })
}

/**
 * @desc 注册
 */
export const register = data => {
    return request({
        method: 'POST',
        url: '/app/v1_0/register',
        data
    })
}
