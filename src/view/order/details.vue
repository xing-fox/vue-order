<style lang="less" scoped>
.order-details-wrapper {
  color: #000;
  width: 98%;
  margin: 0 auto;
  overflow: auto;
  .content {
    margin: 20px auto;
    transform-origin: 50% 0;
    ul {
      display: inline-flex;
      width: 100%;
      font-size: 14px;
      &.ul-color {
        background-color: rgba(101, 130, 255, .8);
        li {
          color: #fff !important;
        }
      }
      &.ul-list-color {
        background-color: rgba(101, 130, 255, .5);
        li {
          color: #fff !important;
        }
      }
      li {
        flex: 1;
        line-height: 32px;
        border: 1px solid #ccc;
        list-style: none;
        text-align: center;
        i {
          cursor: pointer;
        }
        input {
          border: none;
          color: #666;
          width: 80%;
          text-align: center;
          background: none;
        }
        &.font-weight {
          color: #333;
          font-size: 14px;
          font-weight: bold;
        }
        &.line-height {
          line-height: 62px;
        }
        &.flex-2 {
          flex: 2;
          border-left: 2px solid transparent;
          position: relative;
          &:after {
            content: "";
            height: 0;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: -2px;
            right: 0;
            bottom: 0;
          }
        }
        &.flex-3 {
          flex: 3;
          border-left: 3px solid transparent;
          position: relative;
          &:after {
            content: "";
            height: 0;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: -3px;
            right: 0;
            bottom: 0;
          }
        }
        &.flex-4 {
          flex: 4;
          border-left: 4px solid transparent;
          position: relative;
          &:after {
            content: "";
            height: 0;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: -4px;
            right: 0;
            bottom: 0;
          }
        }
        &.flex-5 {
          flex: 5;
          border-left: 5px solid transparent;
          position: relative;
          &:after {
            content: "";
            height: 0;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: -5px;
            right: 0;
            bottom: 0;
          }
        }
        &.flex-10 {
          flex: 10;
          border-left: 20px solid transparent;
          position: relative;
          &:after {
            content: "";
            height: 0;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: -20px;
            right: 0;
            bottom: 0;
          }
        }
        &.flex-13 {
          flex: 13;
          border-left: 13px solid transparent;
          position: relative;
          &:after {
            content: "";
            height: 0;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: -13px;
            right: 0;
            bottom: 0;
          }
        }
        &.flex-bottom {
          position: relative;
          &:after {
            content: "";
            height: 0;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: -20px;
            right: 0;
            bottom: 0;
          }
        }
        &.no-top {
          border-top: none;
          &.list-hover {
            &:hover {
              i {
                display: inline-block;
              }
            }
            i {
              display: none;
            }
          }
        }
        &.no-left {
          border-left: none;
        }
        &.no-right {
          border-right: none;
        }
        &.no-bottom {
          border-bottom: none;
        }
        &.text-align {
          padding: 0 0 0 30px;
          text-align: left;
          input {
            text-align: left;
          }
        }
      }
    }
  }
  .row-margin {
    margin: 0 auto 20px;
  }
}
</style>

<style lang="less">
  .content {
    .ivu-input {
      height: 30px;
      line-height: 1;
      border: none;
      border-radius: 0;
    }
    .ivu-input-wrapper {
      vertical-align: none;
    }
  }
  .modal-add {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    .ivu-modal {
      top: 0;
    }
  }
  .col-fontSize {
    font-size: 20px;
    i {
      cursor: pointer;
    }
    span {
      font-size: 14px;
      margin: 0 10px;
    }
  }
</style>

<template>
  <div class="order-details-wrapper">
    <Row class-name="row-margin" type="flex" justify="space-between" v-if="!this.DataJson.id">
      <Col span="6">
        <Button type="primary" @click="addStatus = true">添加分类</Button>
      </Col>
      <!-- <Col class-name="col-fontSize">
        <Icon type="ios-remove-circle" @click="scaleValue = scaleValue < .8 ? .7 : scaleValue - .1" />
        <span>表格缩放</span>
        <Icon type="ios-add-circle" @click="scaleValue = scaleValue >= 1 ? 1 : scaleValue + .1" />
      </Col> -->
    </Row>
    <div class="content" :style="{'transform': `scale(${scaleValue}, ${scaleValue})`}">
      <ul>
        <li>
          <input v-model="formData.orderName" type="text" placeholder="请输入公司或项目名称">
        </li>
      </ul>
      <ul>
        <li class="no-top">订货日期</li>
        <li class="no-top no-left">
          <DatePicker v-model="formData.orderDate" type="date" format="yyyy-MM-dd" placeholder="请选择日期"></DatePicker>
        </li>
        <li class="no-top no-left">订单号</li>
        <li class="no-top no-left">
          <input type="text" disabled placeholder="---">
        </li>
        <li class="no-top no-left">交货日期</li>
        <li class="no-top no-left">
          <DatePicker v-model="formData.deliveryDate" type="date" format="yyyy-MM-dd" placement="bottom-end" placeholder="请选择日期"></DatePicker>
        </li>
      </ul>
      <ul>
        <li class="no-top">订货人</li>
        <li class="no-top  no-left">
          <input v-model="formData.orderUser" type="text" placeholder="请输入订货人姓名">
        </li>
        <li class="no-top no-left">订货人手机号</li>
        <li class="no-top no-left">
          <input v-model="formData.orderPhone" type="text" placeholder="请输入订货人手机号">
        </li>
        <li class="no-top no-left">结算方式</li>
        <li class="no-top no-left">
          <input v-model="formData.clearingForm" type="text" placeholder="请输入结算方式">
        </li>
      </ul>
      <ul>
        <li class="no-top">产品名称</li>
        <li class="no-top no-bottom flex-3">
          <input v-model="formData.terminalUser" type="text" placeholder="请输入所有产品名称" />
        </li>
        <li class="no-top no-left">送货方式</li>
        <li class="no-top no-left">
          <input v-model="formData.shippingMethod" type="text" placeholder="请输入送货方式">
        </li>
      </ul>
      <!-- demo -->
      <div v-for="(item, index) in dataArray" :key="index">
        <ul>
          <li class="no-top line-height">
            {{ item.orderTypeName }}
            <Icon @click="addListFunc(index)" type="md-add-circle"/>
          </li>
          <li class="no-top no-right no-bottom flex-10">
            <ul>
              <li class="no-top no-left no-bottom flex-bottom">产品参数</li>
            </ul>
            <ul>
              <li
                v-for="(list, eq) in (item.orderTypeRelations.length - 3)"
                :key="eq"
                class="no-top no-left"
              >{{ item.orderTypeRelations[eq].name }}</li>
            </ul>
          </li>
          <li class="no-top no-left line-height">数量</li>
          <li class="no-top no-left line-height">单位</li>
          <li class="no-top no-left line-height">金额</li>
        </ul>
        <ul v-for="(list, eq) in item.orderDetailVos" :key="eq">
          <li class="no-top list-hover">
            <span>{{ eq + 1 }}</span>
            <Icon @click="deleteListFunc(index, eq)" type="md-remove-circle" />
          </li>
          <li class="no-top no-right no-bottom flex-10">
            <ul>
              <li v-for="(ite, k) in list" v-show="k < list.length - 3" :key="k" class="no-top no-left no-bottom">
                <input v-model="ite.value" placeholder="0" type="text">
              </li>
            </ul>
          </li>
          <li class="no-top no-left">
            <Input v-model="list[list.length - 3].value" @on-change="totalFunc(index, eq)" style="width: 80%" type="text" placeholder="0" />
          </li>
          <li class="no-top no-left">
            <Input v-model="list[list.length - 2].value" @on-change="totalFunc(index, eq)" style="width: 80%" type="text" placeholder="0" />
          </li>
          <li class="no-top no-left">
            <Input disabled v-model="list[list.length - 1].value" type="text" placeholder="0" />
          </li>
        </ul>
        <ul class="ul-list-color">
          <li class="no-top font-weight">合计</li>
          <li class="no-top no-right no-bottom flex-10">-</li>
          <li class="no-top font-weight">
            {{ item.totalNums }}
          </li>
          <li class="no-top no-left font-weight">
            {{ item.totalUnit }}
          </li>
          <li class="no-top no-left font-weight">
            {{ item.totalPrice }}
          </li>
        </ul>
      </div>
      <!-- demo -->
      <!-- 总合计 -->
      <ul class="ul-color">
        <li class="no-top font-weight">总合计</li>
        <li class="no-top no-right no-bottom flex-10">-</li>
        <li class="no-top font-weight">{{ formData.totalNums }}</li>
        <li class="no-top no-left font-weight">{{ formData.totalUnit }}</li>
        <li class="no-top no-left font-weight">{{ formData.totalPrice }}</li>
      </ul>
      <!-- 备注 -->
      <ul>
        <li class="no-top font-weight">备注</li>
        <li class="no-top no-left no-bottom flex-13 text-align">
          <input v-model="formData.remark" type="text" placeholder="请填写备注">
        </li>
      </ul>
      <ul>
        <li class="no-top font-weight">电话</li>
        <li class="no-top no-left no-bottom flex-13 text-align">
          <input v-model="formData.phone" type="text" placeholder="请填写电话">
        </li>
      </ul>
      <ul>
        <li class="no-top font-weight">账号</li>
        <li class="no-top no-left no-bottom flex-13 text-align">
          <input v-model="formData.account" type="text" placeholder="请输入账号">
        </li>
      </ul>
      <ul>
        <li class="no-top font-weight">制表人</li>
        <li class="no-top no-left no-bottom flex-13 text-align">
          <input v-model="formData.createUser" type="text" placeholder="请输入制表人姓名">
        </li>
      </ul>
    </div>
    <Row type="flex" justify="end">
      <Button v-if="!this.DataJson.id" @click="addOrderFunc" type="primary">保存订单</Button>
      <Button v-else @click="addOrderFunc" type="primary">修改订单</Button>
    </Row>
    <!-- 添加分类modal -->
    <Modal
      v-model="addStatus"
      title="添加类别"
      width="800"
      @on-ok="addModalFunc"
      class-name="modal-add">
      <Input
        v-model="typeName"
        placeholder="请输入新的类别名称"
        style="width: 300px; display: block;"/>
      <Button
        type="primary"
        style="margin: 20px 0"
        @click="addNewStatus = true">添加参数库</Button>
      <Transfer
        :data="typeData"
        :target-keys="targetKeys"
        :render-format="render"
        :titles="titles"
        @on-change="handleChange" />
    </Modal>
    <!-- 新增参数库 -->
    <Modal
      v-model="addNewStatus"
      title="新增参数"
      width="500"
      @on-ok="addNewParameterFunc"
      class-name="modal-add">
      <Input
        v-model="addNewParameter"
        placeholder="请输入参数名称"
        style="width: 300px; display: block;"/>
    </Modal>
  </div>
</template>

<script>
import {
  OrderAdd,
  UpdateOrder,
  OrderTypeAdd,
  OrderTypeList
} from '@/api/order'
export default {
  name: 'order_details',
  props: {
    DataJson: {
      type: Object
    }
  },
  data () {
    return {
      scaleValue: 1,
      titles: ['参数库', '目标参数'],
      addStatus: false, // 新增分类状态
      addNewStatus: false, // 新增参数库状态
      formData: {
        phone: '', // 商家电话
        account: '', // 账号
        orderName: '', // 项目名称
        clearingForm: '', // 结算方式
        createUser: '', // 制表人
        deliveryDate: '', // 交货日期
        orderDate: '', // 订货日期
        orderNo: '', // 订单编号
        orderPhone: '', // 客户电话
        orderUser: '', // 订货人
        remark: '', // 备注
        shippingMethod: '', // 送货方式
        orderTypeName: [], // 订单类别
        totalNums: 0, // 合计数量
        totalPrice: 0, // 合计金额
        totalUnit: 0 // 合计单位
      }, // 数据
      typeData: [], // 参数库数据
      targetKeys: [], // 选择后的数据
      typeName: '', // 新增类别名称
      addNewParameter: '', // 新增参数名称
      dataArray: [] // 类别总参数
    }
  },
  methods: {
    // 获取参数库
    getTypeDataFunc () {
      OrderTypeList().then(res => {
        res.data.data.map(item => {
          item.key = item.keyName
        })
        this.typeData = res.data.data
      })
    },
    // 新增订单
    addOrderFunc () {
      let orderTypeName = []
      this.dataArray.map(item => {
        item.orderDetailVosCreate = []
        item.orderDetailVos.map((ite, index) => {
          item.orderDetailVosCreate[index] = {}
          ite.map(list => {
            item.orderDetailVosCreate[index][list.keyName] = list.value
          })
        })
      })
      orderTypeName = [].concat(JSON.parse(JSON.stringify(this.dataArray)))
      orderTypeName.map(item => {
        item.orderDetailVos = [].concat(item.orderDetailVosCreate)
      })
      if (this.DataJson.id) {
        UpdateOrder(Object.assign(this.formData, {
          orderTypeName: orderTypeName,
          orderDate: this.$moment(this.formData.orderDate).format('YYYY-MM-DD'),
          deliveryDate: this.$moment(this.formData.deliveryDate).format('YYYY-MM-DD')
        })).then(res => {
          if (Number(res.data.code) === 200) {
            this.$Notice.success({
              title: '',
              desc: '订单修改成功'
            })
            this.$emit('orderSuccess')
          }
        })
      } else {
        OrderAdd(Object.assign(this.formData, {
          orderTypeName: orderTypeName,
          orderDate: this.$moment(this.formData.orderDate).format('YYYY-MM-DD'),
          deliveryDate: this.$moment(this.formData.deliveryDate).format('YYYY-MM-DD')
        })).then(res => {
          if (Number(res.data.code) === 200) {
            this.$Notice.success({
              title: '',
              desc: '订单保存成功'
            })
            this.$emit('orderSuccess')
          }
        })
      }
    },
    // 删除分类中列表
    deleteListFunc (index, eq) {
      this.dataArray[index].orderDetailVos.splice(eq, 1)
      this.totalFunc(index, eq)
    },
    // 分类行新增列表
    addListFunc (eq) {
      let data = []
      let _paramData = JSON.parse(JSON.stringify(this.dataArray[eq].orderTypeRelations))
      for (let i = 0; i < this.dataArray[eq].orderTypeRelations.length; i++) {
        data[i] = 0
        _paramData.value = 0
      }
      this.dataArray.map((item, index) => {
        if (eq === index) {
          item.orderDetailVos.push(_paramData)
        }
      })
    },
    // 新增分类
    addModalFunc () {
      if (!this.typeName) {
        return this.$Message.error({
          content: '请填写类别名称'
        })
      }
      this.dataArray.push({
        orderTypeName: this.typeName, // 类型名称
        orderTypeRelations: this.modalDataFunc(), // 整体参数
        totalNums: 0,
        totalPrice: 0,
        totalUnit: 0,
        orderDetailVos: [], // 整体数据
        orderTypeIds: (() => {
          let _data = []
          this.modalDataFunc().map(item => {
            if (item.id) _data.push(item.id)
          })
          return _data.join(',')
        })()
      })
    },
    // 新增参数库
    addNewParameterFunc () {
      OrderTypeAdd({
        keyName: new Date().getTime(),
        name: this.addNewParameter
      }).then(res => {
        if (Number(res.data.code) === 200) {
          this.$Message.success({
            content: '参数添加成功'
          })
          this.getTypeDataFunc()
          this.addNewStatus = false
        }
      })
    },
    render (item) {
      return item.name
    },
    handleChange (newTargetKeys, direction, moveKeys) {
      this.targetKeys = newTargetKeys
    },
    modalDataFunc () {
      let arr = []
      this.targetKeys.map(item => {
        this.typeData.map(list => {
          if (item === list.keyName) {
            arr.push(Object.assign(list, {
              value: 0
            }))
          }
        })
      })
      return arr.concat([{
        keyName: 'nums',
        name: '数量',
        value: 0
      }, {
        keyName: 'unit',
        name: '单价',
        value: 0
      }, {
        keyName: 'price',
        name: '金额',
        value: 0
      }])
    },
    // 单个类别合计总值
    totalFunc (index, eq) {
      let nums = 0
      let units = 0
      let price = 0
      this.formData.totalNums = 0
      this.formData.totalUnit = 0
      this.formData.totalPrice = 0
      let _data = this.dataArray[index].orderDetailVos[eq]
      this.dataArray[index].orderDetailVos.map(item => {
        nums += Number(item[item.length - 3].value)
        units += Number(item[item.length - 2].value)
        price += Number(item[item.length - 3].value) * Number(item[item.length - 2].value)
      })
      this.dataArray[index].totalNums = nums.toFixed(1)
      this.dataArray[index].totalUnit = units.toFixed(1)
      this.dataArray[index].totalPrice = price.toFixed(1)
      _data[_data.length - 1].value = (Number(_data[_data.length - 3].value) * Number(_data[_data.length - 2].value)).toFixed(1)
      // 总合计计算
      this.dataArray.map(item => {
        this.formData.totalNums += Number(item.totalNums)
        this.formData.totalUnit += Number(item.totalUnit)
        this.formData.totalPrice += Number(item.totalPrice)
      })
    }
  },
  mounted () {
    this.getTypeDataFunc()
    if (this.DataJson.id) {
      this.DataJson.orderTypeNameDtoList.map(item => {
        item.orderDetailVos = []
        item.orderTypeRelations = item.orderTypeRelations.concat([
          {
            keyName: 'nums',
            name: '数量'
          }, {
            keyName: 'unit',
            name: '单价'
          }, {
            keyName: 'price',
            name: '金额'
          }
        ])
        item.orderDetailDtos.map((list, index) => {
          item.orderDetailVos[index] = []
          item.orderTypeRelations.map(ite => {
            item.orderDetailVos[index].push({
              value: list[ite.keyName],
              keyName: ite.keyName,
              name: ite.name
            })
          })
        })
      })
      this.formData = this.DataJson
      this.dataArray = this.DataJson.orderTypeNameDtoList
    }
  }
}
</script>
