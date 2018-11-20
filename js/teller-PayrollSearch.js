layui.use(['table', 'layer', 'jquery','upload','form'], function () {
    var table = layui.table
    var layer = layui.layer
    var $ = layui.jquery
    var upload = layui.upload
    var form = layui.form

  //表单验证
  form.verify({  
    userN:[/^\d{6}$/, '必须6位，只能是数字！']
});
    // 模拟点击搜索后由 ajax 请求得到的数据
    $('#searchIpt').click(function () {
      data = {
        //表格里填充的数据
        tableData: [{
          "userAccount": 123456,
          "userName": "张三",
          "manId": "411381199884681549",
          "TransferID":138746489764879,
          "balance": "30000.00",
          "acountDate": "2018/5/30",
          "PayrollMon": "2018/5",
          "operate": {
            "updatefile":1,
            "roll":1
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
                field: 'userAccount',
                title: '职工账号',
                width: '12%',
                sort: true,
                align: 'center',
              }, {
                field: 'userName',
                title: '姓名',
                width: '12%',
                align: 'center',
              }, {
                field: 'manId',
                title: '工号',
                width: '17%',
                sort: true,
                align: 'center',
              },{
                field: 'TransferID',
                title: '转账号',
                width: '17%',
                sort: true,
                align: 'center',
              },{
                field: 'balance',
                title: '金额',
                width: '12%',
                sort: true,
                align: 'right',
              },{
                field: 'acountDate',
                title: '转出日期',
                width: '12%',
                align: 'center',
              }, {
                field: 'PayrollMon',
                title: '工资月份',
                width: '18%',
                align: 'center',
              },
            ]
          ]
          // 在本地模拟数据
          ,
        data: data.tableData
      });

    //提交验证
    form.on('submit(roll)', function () {
      layer.open({
        title: '最终的提交信息',
        content:'成功！',
    })
    return false;
    });

    //执行实例
    var uploadInst = upload.render({
    elem: '#updatebtn' //绑定元素
    ,url: '/upload/' //上传接口
    ,done: function(res){
      //上传完毕回调
    }
    ,error: function(){
      //请求异常回调
    }
    }); 
    })
  })