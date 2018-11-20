layui.use(['table', 'layer', 'jquery', 'form'], function () {
  var table = layui.table
  var layer = layui.layer
  var $ = layui.jquery
  var form = layui.form
  layui.use('table', function(){
  var table = layui.table;
  
  table.render({
    elem: '#test'
     ,page: true
    ,cols: [[
     {field:'ID', width:'15%', title: '序号', sort: true, fixed: 'left'}
      /*,{ field: 'Date', width:'80',title: '日期', sort: true, fixed: 'left'}*/
      ,{field:'operatorNum', width:'15%', title: '操作员号',align:'center'}
      ,{field:'cNum', width:'15%', title: '柜号', sort: true,align:'center'}
      ,{field:'optContext', width:'15%', title: '操作内容',align:'center' }
      ,{field:'optDate', width:'20%', title: '操作时间',align:'center'}
      ,{field:'optWhether', width:'20%', title: '操作是否成功',align:'center'}
    ]]
    // 在本地模拟数据
      ,data:[
      {
 				"ID":"1",
 				"operatorNum":"01",
 				"cNum":"01",
 				"optContext":"取款",
 				"optDate":"2018-4-28",
 				"optWhether":"是",
 			},
 			{
 				"ID":"2",
 				"operatorNum":"01",
 				"cNum":"01",
 				"optContext":"存款",
 				"optDate":"2018-4-28",
 				"optWhether":"是",
 			},
 			{
 				"ID":"3",
 				"operatorNum":"01",
 				"cNum":"01",
 				"optContext":"取款",
 				"optDate":"2018-4-28",
 				"optWhether":"是",
 			}
 			,{
 			"ID":"4",
 			"operatorNum":"01",
 			"cNum":"01",
 			"optContext":"取款",
 			"optDate":"2018-4-28",
 			"optWhether":"是",
 			
 			}
      ] 
  });
});

  $('#print').on('click', function () {
    layer.msg('正在打印...', {
      time: 1000
    }, function () {
      layer.msg('打印成功！')
    })
  })

  
})