layui.use(['table', 'layer', 'jquery','laydate'], function () {
    var table = layui.table
    var layer = layui.layer
    var $ = layui.jquery
    var laydate = layui.laydate
  
    laydate.render({ 
      elem: '#room_in_time'
    });
  
    // 模拟点击搜索后由 ajax 请求得到的数据
    $('#searchIpt').click(function () {
  
      data = {
        //表格里填充的数据
        tableData: [{
          "userAccount": 165168461561,
          "userName": "张三",
          "userId": "411381199884681549",
          "freezeMoney": "301",
          "balance": "2018-10-01",
          "acountType": "是",
          "acountStatus": "是",
          "operate": {
            "freezeAct": 0,
          },
        },{
            "userAccount": 165168461561,
            "userName": "李四",
            "userId": "411261199884681585",
            "freezeMoney": "401",
            "balance": "2018-10-01",
            "acountType": "是",
            "acountStatus": "否",
            "operate": {
              "freezeAct": 0,
            },
          }]
      }
  
      table.render({
        elem: '#show',
        page: true //开启分页
          ,
        cols: [
            [ //表头
              {
                field: 'userId',
                title: '身份证号',
                width: '12%',
                sort: true,
              }, {
                field: 'userName',
                title: '姓名',
                width: '8%',
              }, {
                field: 'userAccount',
                title: '手机号',
                width: '17%',
                sort: true
              }, {
                field: 'freezeMoney',
                title: '入住房间号',
                width: '9%',
                sort: true,
                align: 'right'
              }, {
                field: 'balance',
                title: '入住时间',
                width: '9%',
                sort: true,
                align: 'right',
              }, {
                field: 'acountType',
                title: '送餐服务',
                width: '9%',
              }, {
                field: 'acountStatus',
                title: '房间整理',
                width: '9%',
              },{
                field: 'acountStatus',
                title: '衣物换洗',
                width: '9%',
              },{
                field: 'operate',
                title: '操作',
                width: '18.2%',
                toolbar: '#ipts'
              }
            ]
          ]
  
          // 在本地模拟数据
          ,
        data: data.tableData
      })
  
      table.on('tool(show)', function (obj) {
        var event = obj.event
        var that = $(this)
        
        if (event === 'freezeMey') {
          layer.open({
            type: 1, 
            content: $('#details')
          });
        }
  
        if (event === 'freezeAct') {
          layer.open({
            type: 1, 
            content: $('#details')
          });
          
        }
      })
  
    })
  
  })