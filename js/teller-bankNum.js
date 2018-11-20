layui.use(['table', 'layer', 'jquery'], function () {
  var table = layui.table
  var layer = layui.layer
  var $ = layui.jquery

  var pageData = {
    "tableData": [{
        "bankName":"淅川上集储金会",
 				"address":"淅川县",
 				"person":"张三",
 					"number":"0371-0000000",
 				"openBank":"中国工商银行",
 				"bankNum":"01",
 				"accountNum":"123456",
 				"name":"李四"
      }
    ]
  }

  //第一个实例
  table.render({
    id: 'tableImp',
    elem: '#table',
    page: true,//开启分页
    cols: [
        [ //表头
          {
            field: 'address',
            title: '地址',
            width: '10%',
            fixed: 'left',
            align: 'center'
          }, {
            field: 'person',
            title: '负责人',
            width: '10%',
            align: 'center'
          }, {
            field: 'number',
            title: '电话号码',
            width: '15%',
            align: 'center'
          
          }, {
            field: 'openBank',
            title: '开户行',
            width: '15%',
            align: 'center'
          }, {
            field: 'bankNum',
            title: '行号',
            width: '10%',
            align: 'center'
          }, {
            field: 'accountNum',
            title: '账号',
            width: '10%',
            align: 'center'
          },
          {
            field: 'name',
            title: '开户名',
            width: '20%',
            align: 'center'
          }, {
            fixed: 'right',
            title: '操作',
            align: 'center',
            width: '10%',
            toolbar: '#ipts'
          }
        ]
      ]
      //加载数据

      ,
    data: pageData.tableData
  })

  table.on('tool(table)',function (obj) {  
    var event = obj.event

    if(event === 'edit') {
      layer.open({
        type: 1,
        closeBtn: 0,
        title: '修改柜员信息',
        content: $('#addOpenNumcontent'),
        area: ['600px', '500px'],

        success: function (layero, index) {
          $(layero).find('form input').each(function () {  
            $(this).val(obj.data[$(this).attr('name')])
          })
        },

        btn: ['确定', '取消'],
        yes: function (index, layero) {
          //用新的数据重载表格
          table.reload('tableImp', {
            where: pageData.tableData
          })
          //清空表单里的值，并关闭表单
          $(layero).find('form')[0].reset()
          layer.close(index)
        },

        btn2: function (index, layero) {
          $(layero).find('form')[0].reset()
          layer.close(index)
        }
      })
    }
  })

  //为新增柜员按钮绑定弹出框事件
  $('#addbankNum').click(function () {
    layer.open({
      type: 1,
      closeBtn: 0,
      title: '请填写添加新柜员的信息',
      content: $('#addOpenNumcontent'),
      area: ['600px', '500px'],
      btn: ['确定', '取消'],

      yes: function (index, layero) {
        //用新的数据重载表格
        var data = {
          "bankName":"淅川上集储金会",
 				"address":"淅川县",
 				"person":"张三",
 					"number":"0371-0000000",
 				"openBank":"中国工商银行",
 				"bankNum":"01",
 				"accountNum":"123456",
 				"name":"李四"
        }
        table.reload('tableImp',{
          where: pageData.tableData.push(data)
        })
        //清空表单里的值，并关闭表单
        $(layero).find('form')[0].reset()
        layer.close(index)
      },

      btn2: function (index, layero) {
        $(layero).find('form')[0].reset()
        layer.close(index)
      }

    })
  })

})