layui.use(['table', 'layer', 'jquery'], function () {
  var table = layui.table
  var layer = layui.layer
  var $ = layui.jquery

  var pageData = {
    "tableData": [{
        "id": 10000,
        "username": "张三",
        "status": "管理员",
        "cNum": "01"
        
      },
      {
        "id": 10001,
        "username": "张三",
        "status": "管理员",
        "cNum": "01"
        
      },
      {
        "id": 10002,
        "username": "张三",
        "status": "管理员",
        "cNum": "01"
       
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
            field: 'id',
            title: 'id',
            width: '15%',
            sort: true,
            fixed: 'left',
            align: 'center'
          }, {
            field: 'username',
            title: '用户名',
            width: '25%',
            align: 'center'
          }, {
            field: 'status',
            title: '身份',
            width: '20%',
            align: 'center',
            sort: true
          }, {
            field: 'cNum',
            title: '操作员号',
            width: '20%',
            align: 'center'
          },  {
            fixed: 'right',
            title: '操作',
            align: 'center',
            width: '20%',
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
        content: $('#addCounterContent'),
        area: ['600px', '300px'],

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
    //重置密码
    else if(event === 'reset') {
      layer.open({
        type: 1,
        closeBtn: 0,
        title: '重置柜员密码',
        content: $('#resetCounterpassword'),
        area: ['600px', '300px'],
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
    /////////////
    
  })

  //为新增柜员按钮绑定弹出框事件
  $('#addCounter').click(function () {
    layer.open({
      type: 1,
      closeBtn: 0,
      title: '请填写添加新柜员的信息',
      content: $('#addCounterContent'),
      area: ['600px', '300px'],
      btn: ['确定', '取消'],

      yes: function (index, layero) {
        //用新的数据重载表格
        var data = {
          "id": 10003,
          "username": "张三",
          "status": "管理员",
          "cNum": "01"
         
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