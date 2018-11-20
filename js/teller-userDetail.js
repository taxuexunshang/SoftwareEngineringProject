layui.use(['table', 'layer', 'jquery', 'laydate'], function () {
  var $ = layui.jquery
  var laydate = layui.laydate;
  var table = layui.table
  var layer = layui.layer
  
//年月选择器
  laydate.render({
    elem: '#test3'
    ,type: 'month'
  });
   //年月范围
  laydate.render({
    elem: '#test8'
    ,type: 'month'
    ,range: true
  });
  $('#print').on('click', function () {
    layer.msg('正在打印...', {
      time: 1000
    }, function () {
      layer.msg('打印成功！')
    })
  })

// 模拟点击搜索后由 ajax 请求得到的数据
  $('#searchIpt').click(function () {

    data = {
      //表格里填充的数据
      tableData: [{
        "Account": 165168461561,
        "userName": "张三",
        "amount": "50000",
        "freezeMoney": "10000.00",
        "balance": "30000.00",
        "month": "2018年-5月",
        "whether": "定期",
        "rate": "0.3%",
        "manageNum": "001"
        
      }]
    }

    table.render({
      elem: '#show',
      page: true //开启分页
        ,
      cols: [
          [ //表头
            {
              field: 'Account',
              title: '账号',
              width: '20%',
              
            }, {
              field: 'userName',
              title: '姓名',
              width: '15%',
            }, {
              field: 'amount',
              title: '金额',
              width: '15%',
             sort: true,
              align: 'right'
              
            }, {
              field: 'month',
              title: '月份',
              width: '20%',
              sort: true,
               
            }, {
              field: 'whether',
              title: '活期/定期',
              width: '10%',
              sort: true,
              
            }, {
              field: 'rate',
              title: '利率',
              width: '10%',
               sort: true,
              align: 'right'
            }, {
              field: 'manageNum',
              title: '客户经理号',
              width: '10%',
              sort: true,
              
            }
          ]
        ]

        // 在本地模拟数据
        ,
      data: data.tableData
    })

  })

  
})