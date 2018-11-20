layui.use(['table', 'layer', 'jquery', 'form'], function () {
  var table = layui.table
  var layer = layui.layer
  var $ = layui.jquery
  var form = layui.form
  data = {
    //科目日计表表格里填充的数据
    tableheadData: [{
      "pid": "科目日计表",
    }],
    tableData: [{
      "id": 001,
      "IDname": "库存现金",
      "YM1": "103000.00",
      "YM2": "100200.00",
      "TOM1": "10010.00",
      "TOM2": "100400.00",
      "TM1": "100400.00",
      "TM2": "100500.00",
      
    },{
      "id": 002,
      "IDname": "银行存款",
      "YM1": "101000.00",
      "YM2": "100060.00",
      "TOM1": "10000.00",
      "TOM2": "102000.00",
      "TM1": "100050.00",
      "TM2": "100200.00",
      
    },{
      "id": 003,
      "IDname": "短期存款",
      "YM1": "10000.00",
      "YM2": "100020.00",
      "TOM1": "100400.00",
      "TOM2": "1005300.00",
      "TM1": "100500.00",
      "TM2": "100600.00",
      
    },{
      "id": 004,
      "IDname": "系统往来",
      "YM1": "100004.00",
      "YM2": "100002.00",
      "TOM1": "100010.00",
      "TOM2": "130000.00",
      "TM1": "100500.00",
      "TM2": "100500.00",
      
    },{
      "id": 005,
      "IDname": "利息支出",
      "YM1": "100400.00",
      "YM2": "101000.00",
      "TOM1": "100500.00",
      "TOM2": "1005500.00",
      "TM1": "100100.00",
      "TM2": "100010.00",
      
    }],
  }
  //科目日计表表格
  table.render({
      elem: '#head',
      page: false,
      cols: [
        [{
          field: 'pid',
          title: '表单姓名',
          align:'center',
        }]
      ],
      data: data.tableheadData
    }),
    table.render({
      elem: '#show',
      // url: '../test.json', //数据接口，这里先配置本地数据做测试
      page: true, //开启分页
      cols: [
        [ //表头
          {
            field: 'id',
            title: '科目',
            width: 80,
            sort: true,
            rowspan: 2,
            align:'center',
          }, {
            field: 'IDname',
            title: '科目名称',
            width: 90,
            rowspan: 2,
            align:'center',
          }, {
            field: 'YesterdayMoney',
            title: '上日余额',
            width: 160,
            colspan: 2,
            align:'center',
          }, {
            field: 'TodayOpenMoney',
            title: '今日发生额',
            width: 160,
            colspan: 2,
            align:'center',
          }, {
            field: 'TodayMoney',
            title: '今日余额',
            width: 160,
            colspan: 2,
            align:'center',
          }
        ],
        [{
          field: 'YM1',
          title: '借方',
          width: 160,
          sort: true,
          align:'right',
        }, {
          field: 'YM2',
          title: '贷方',
          width: 160,
          sort: true,
          align:'right',
        }, {
          field: 'TOM1',
          title: '借方',
          width: 160,
          sort: true,
          align:'right',
        }, {
          field: 'TOM2',
          title: '贷方',
          width: 160,
          sort: true,
          align:'right',
        }, {
          field: 'TM1',
          title: '借方',
          width: 160,
          sort: true,
          align:'right',
        }, {
          field: 'TM2',
          title: '贷方',
          width: 160,
          sort: true,
          align:'right',
        }, ],
      ],
      data: data.tableData
    }),

  $('#print').on('click', function () {
    layer.msg('正在打印...', {
      time: 1000
    }, function () {
      layer.msg('打印成功！')
    })
  })

  var $tableWraps = $('.table-wrap')
  $tableWraps.hide()
  // 表格show-hide事件
  $('#btn-table').find('a').click(function (event) {  
    console.log($(this).index());
    
    $tableWraps.hide()
    $($tableWraps[$(this).index()-1]).show()
    event.preventDefault()
  })
})