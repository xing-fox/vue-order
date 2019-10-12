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
 * 删除订单
 */
export const DeleteOrder = (data) => {
  return axios.request({
    url: `/order/delete/${data}`,
    method: 'delete'
  })
}
