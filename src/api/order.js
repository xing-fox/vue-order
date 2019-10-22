import axios from '@/libs/api.request'

/**
 * 订单列表
 */
export const OrderList = (data) => {
  return axios.request({
    url: '/order/page',
    data,
    method: 'post'
  })
}

/**
 * 新增订单
 */
export const OrderAdd = (data) => {
  return axios.request({
    url: '/order/add',
    data,
    method: 'post'
  })
}

/**
 * 新增参数库
 */
export const OrderTypeAdd = (data) => {
  return axios.request({
    url: '/orderType/add',
    data,
    method: 'post'
  })
}

/**
 * 新增参数库列表
 */
export const OrderTypeList = (data) => {
  return axios.request({
    url: '/orderType/list',
    data,
    method: 'post'
  })
}

/**
 * 删除订单
 */
export const DeleteOrder = (data) => {
  return axios.request({
    url: `/order/delete/${data}`,
    method: 'delete'
  })
}

/**
 * 查看订单详情
 */
export const GetOrderDetails = (data) => {
  return axios.request({
    url: `/order/get/${data}`,
    method: 'get'
  })
}

/**
 * 修改订单详情
 */
export const UpdateOrder = (data) => {
  return axios.request({
    url: `/order/update`,
    data,
    method: 'put'
  })
}
