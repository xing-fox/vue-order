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
        <Button type="primary" @click="addOrderFunc">新增订单</Button>
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
            <Button size="small" type="info" style="margin: 0 10px 0 0;" @click="detailsOrderFunc(row.id)">订单详情</Button>
            <Button size="small" type="primary" style="margin: 0 10px 0 0;" @click="changeOrderFunc(row.id)">修改</Button>
            <Button size="small" type="error" @click="deleteOrderFunc(row.id)">删除</Button>
          </template>
        </Table>
      </Col>
    </Row>
    <Row class-name="row-top" type="flex" justify="end">
      <Page :total="totals"></Page>
    </Row>
  </div>
</template>

<script>
import {
  OrderList,
  DeleteOrder
} from '@/api/order'
export default {
  name: 'order_index',
  methods: {
    addOrderFunc () {
      this.$router.push({
        path: 'order_details'
      })
    },
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
    detailsOrderFunc () {},
    // 修改
    changeOrderFunc () {},
    // 删除
    deleteOrderFunc (id) {
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
            console.log(res)
          })
        }
      })
    }
  },
  data () {
    return {
      totals: 0, // 总数据
      pageNum: 1, // 页数
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
          title: '订单编号',
          key: 'orderNo',
          align: 'center'
        }, {
          title: '交货日期',
          key: 'deliveryDate',
          align: 'center'
        }, {
          title: '结算方式',
          key: 'clearingForm',
          align: 'center'
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
