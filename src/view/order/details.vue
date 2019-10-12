<style lang="less" scoped>
.order-details-wrapper {
  width: 100%;
  color: #000;
  overflow: auto;
  .content {
    margin: 20px auto;
    ul {
      display: inline-flex;
      width: 100%;
      font-size: 14px;
      &.ul-color {
        background: #6582ff;
        li {
          color: #fff !important;
        }
      }
      &.ul-list-color {
        background: #ff9008;
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
        }
        &.font-weight {
          color: #333;
          font-size: 16px;
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
  .modal-add {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    .ivu-modal {
      top: 0;
    }
  }
</style>

<template>
  <div class="order-details-wrapper">
    <Row class-name="row-margin">
      <Col span="6">
        <Button type="primary" @click="addStatus = true">添加分类</Button>
      </Col>
    </Row>
    <div class="content">
      <ul>
        <li>
          <input type="text" placeholder="千百度订单明细">
        </li>
      </ul>
      <ul>
        <li class="no-top">订货日期</li>
        <li class="no-top no-left">
          <input type="text" placeholder="2019-09-10">
        </li>
        <li class="no-top no-left">订单号</li>
        <li class="no-top no-left">
          <input type="text" placeholder="12431122311">
        </li>
        <li class="no-top no-left">交货日期</li>
        <li class="no-top no-left">
          <input type="text" placeholder="2019-09-10">
        </li>
      </ul>
      <ul>
        <li class="no-top">订货人</li>
        <li class="no-top no-bottom flex-3">
          <input type="text" placeholder="新疆乌鲁木齐市米东区杨大伟">
        </li>
        <li class="no-top no-left">结算方式</li>
        <li class="no-top no-left">
          <input type="text" placeholder="微信支付宝">
        </li>
      </ul>
      <ul>
        <li class="no-top">终端客户</li>
        <li class="no-top no-bottom flex-3">
          <input type="text" placeholder="阳台柜+里卧衣柜+右卧书桌">
        </li>
        <li class="no-top no-left">送货方式</li>
        <li class="no-top no-left">
          <input type="text" placeholder="鸿泰-乌鲁木齐">
        </li>
      </ul>
      <!-- demo -->
      <div v-for="(item, index) in dataArray" :key="index">
        <ul>
          <li class="no-top line-height">
            {{ item.name }}
            <Icon @click="addListFunc(index)" type="md-add-circle"/>
          </li>
          <li class="no-top no-right no-bottom flex-10">
            <ul>
              <li class="no-top no-left no-bottom flex-bottom">产品参数</li>
            </ul>
            <ul>
              <li
                v-for="(list, eq) in item.parameter"
                :key="eq"
                class="no-top no-left"
              >{{ list.label }}</li>
            </ul>
          </li>
          <li class="no-top no-left line-height">数量</li>
          <li class="no-top no-left line-height">单位</li>
          <li class="no-top no-left line-height">金额</li>
        </ul>
        <ul v-for="(list, eq) in item.dataList" :key="eq">
          <li class="no-top">{{ eq + 1 }}</li>
          <li class="no-top no-right no-bottom flex-10">
            <ul>
              <li v-for="(ite, k) in list" :key="k" class="no-top no-left">
                <input placeholder="0" type="text">
              </li>
            </ul>
          </li>
          <li class="no-top no-left">
            <input type="text" placeholder="0">
          </li>
          <li class="no-top no-left">
            <input type="text" placeholder="0">
          </li>
          <li class="no-top no-left">
            <input type="text" placeholder="0">
          </li>
        </ul>
        <ul class="ul-list-color">
          <li class="no-top font-weight">合计</li>
          <li class="no-top no-right no-bottom flex-10">-</li>
          <li class="no-top font-weight">0</li>
          <li class="no-top no-left font-weight">0</li>
          <li class="no-top no-left font-weight">0</li>
        </ul>
      </div>
      <!-- demo -->
      <!-- 总合计 -->
      <ul class="ul-color">
        <li class="no-top font-weight">总合计</li>
        <li class="no-top no-right no-bottom flex-10">-</li>
        <li class="no-top font-weight">0</li>
        <li class="no-top no-left font-weight">0</li>
        <li class="no-top no-left font-weight">0</li>
      </ul>
      <!-- 备注 -->
      <ul>
        <li class="no-top font-weight">备注</li>
        <li class="no-top no-left no-bottom flex-13 text-align">
          <input type="text" placeholder="请填写备注">
        </li>
      </ul>
      <ul>
        <li class="no-top font-weight">电话</li>
        <li class="no-top no-left no-bottom flex-13 text-align">
          <input type="text" placeholder="请填写电话">
        </li>
      </ul>
      <ul>
        <li class="no-top font-weight">账号</li>
        <li class="no-top no-left no-bottom flex-13 text-align">
          <input type="text" placeholder="请输入账号">
        </li>
      </ul>
      <ul>
        <li class="no-top font-weight">新疆乌鲁木齐市米东区杨大伟</li>
      </ul>
    </div>
    <Row type="flex" justify="end">
      <Button type="primary">保存订单</Button>
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
        style="width: 300px; margin: 0 0 30px 0;"/>
      <Transfer
        :data="data"
        :target-keys="targetKeys"
        :render-format="render"
        :titles="titles"
        @on-change="handleChange" />
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'order_details',
  data () {
    return {
      addStatus: false,
      data: [
        {
          label: '长度',
          key: 'length'
        }, {
          label: '宽度',
          key: 'width'
        }, {
          label: '高度',
          key: 'height'
        }, {
          label: '平方',
          key: 'square'
        }, {
          label: '颜色',
          key: 'color'
        }, {
          label: '名称',
          key: 'name'
        }, {
          label: '型号',
          key: 'model'
        }, {
          label: '转换条',
          key: 'transform'
        }
      ], // 目标数据
      targetKeys: [], // 选择后的数据
      typeName: '',
      titles: ['参数库', '目标参数'],
      dataArray: [] // 类别总参数
    }
  },
  methods: {
    addModalFunc () {
      this.dataArray.push({
        name: this.typeName,
        parameter: this.modalDataFunc(),
        dataList: []
      })
      console.log(this.dataArray)
    },
    render (item) {
      return item.label
    },
    handleChange (newTargetKeys, direction, moveKeys) {
      this.targetKeys = newTargetKeys
    },
    modalDataFunc () {
      let arr = []
      this.targetKeys.map(item => {
        this.data.map(list => {
          if (item === list.key) arr.push(list)
        })
      })
      return arr
    },
    addListFunc (eq) {
      let data = []
      for (let i = 0; i < this.dataArray[eq].parameter.length; i++) {
        data[i] = 0
      }
      this.dataArray.map((item, index) => {
        if (eq === index) {
          item.dataList.push(data)
        }
      })
    }
  }
}
</script>
