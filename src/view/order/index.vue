<style lang="less" scoped>
.order-wrapper {
  width: 100%;
  .row-top {
    margin: 20px 0 0 0;
  }
}
</style>

<template>
  <div class="order-wrapper">
    <Row type="flex" justify="space-between">
      <Col span="2">
        <Button type="primary" @click="addStatus = true">新增订单</Button>
      </Col>
      <Col span="5">
        <Input v-model="formItem.value" placeholder="请输入客户姓名">
          <Button slot="append" icon="ios-search"></Button>
        </Input>
      </Col>
    </Row>
    <Row class-name="row-top">
      <Col span="24">
        <Table
          border
          stripe
          :columns="columnsList"
          :data="dataList"
          no-data-text="暂无订单，请添加订单">
          <template slot-scope="{ row, index }" slot="action">
            <Button size="small" type="info" style="margin: 0 10px 0 0;" @click="detailsOrderFunc(row.orderNo)">订单详情</Button>
            <Button size="small" type="error" @click="deleteOrderFunc(row.id)">删除</Button>
          </template>
        </Table>
      </Col>
    </Row>
    <Row class-name="row-top" type="flex" justify="end">
      <Page :total="totals" show-total @on-change="pageChangeFunc"></Page>
    </Row>
    <Modal
      v-model="addStatus"
      title="新增订单"
      width="1360"
      :footer-hide="true"
      @on-visible-change="StatusChnage">
      <Row v-if="addStatus">
        <order-details @orderSuccess="SuccessFunc" :DataJson="dataJson" />
      </Row>
    </Modal>
  </div>
</template>

<script>
import {
  OrderList,
  DeleteOrder,
  GetOrderDetails
} from '@/api/order'
import OrderDetails from './details.vue'
export default {
  name: 'order_index',
  methods: {
    getData () {
      OrderList({
        pageSize: 10,
        pageNum: this.pageNum
      }).then(res => {
        let data = res.data
        this.totals = data.data.total
        this.dataList = data.data.records
      })
    },
    // 查看详情
    detailsOrderFunc (id) {
      GetOrderDetails(id).then(res => {
        let data = res.data
        if (data.code === 200) {
          this.dataJson = data.data
          this.addStatus = true
        }
      })
    },
    // 删除
    deleteOrderFunc (id, eq) {
      this.$Modal.confirm({
        width: 350,
        render: (h) => {
          return h('span', {
            style: {
              color: '#333',
              fontSize: '14px',
              fontWeight: 'bold'
            }
          }, '确定删除此订单?')
        },
        onOk: () => {
          DeleteOrder(id).then(res => {
            if (res.data.code === 200) {
              this.$Notice.success({
                desc: '订单删除成功'
              })
              this.getData()
            }
          })
        }
      })
    },
    // 修改页面
    pageChangeFunc (eq) {
      this.pageNum = eq
      this.getData()
    },
    // 订单保存成功
    SuccessFunc () {
      this.addStatus = false
      this.pageNum = 1
      this.getData()
    },
    // 状态更新
    StatusChnage (status) {
      if (!this.addStatus) this.dataJson = {}
    }
  },
  components: {
    OrderDetails
  },
  data () {
    return {
      totals: 0, // 总数据
      pageNum: 1, // 页数
      dataJson: {}, // 订单详情数据
      addStatus: false,
      formItem: {
        value: '' // 搜索
      },
      columnsList: [
        {
          title: '客户姓名',
          key: 'orderUser',
          align: 'center'
        }, {
          title: '客户电话',
          key: 'orderPhone',
          align: 'center'
        }, {
          width: '180px',
          title: '订单编号',
          key: 'orderNo',
          align: 'center'
        }, {
          title: '交货日期',
          align: 'center',
          render: (h, param) => {
            return h('span', {}, param.row.deliveryDate || '---')
          }
        }, {
          title: '结算方式',
          align: 'center',
          render: (h, param) => {
            return h('span', {}, param.row.clearingForm || '---')
          }
        }, {
          title: '送货方式',
          key: 'shippingMethod',
          align: 'center'
        }, {
          title: '操作',
          width: '220px',
          slot: 'action',
          align: 'center'
        }
      ],
      dataList: []
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
