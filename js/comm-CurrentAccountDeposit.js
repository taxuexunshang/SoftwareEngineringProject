//使用layui的form模块
  layui.use(['laydate','form','jquery','layer'], function(){
  var laydate = layui.laydate;
  var form = layui.form
  var $ = layui.jquery
  var layer = layui.layer
  var mydate = new Date()
  var dataNow = mydate.toLocaleDateString()
 
  //当账号填充满6位数字后，ajax请求数据，回显数据
  var actReg = new RegExp("^([0-9]{6})$")
  $('#act').keyup(function () {
    var val = $(this).val()
    if (actReg.test(val)) {
      //假装此处进行了异步请求
      
      var data = {
        name: '王大锤',
        id: '411381166608081228',
        status: '正常',
        date: dataNow,
        sure: '0110'
      }
      $('#fm').find('input').each(function () {
        var that = $(this)
        if(that.attr('readonly')){
          that.val(data[that.attr('name')])
        }  
      })
    }
  })

  //自定义验证规则
  form.verify({
    //为账号定义的验证添加规则
    act: [/^([0-9]{6})$/, '账号必须是六位整数'],
    money: [/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,'金额不能超过两位小数，且不能为负数']
  })

  form.on('submit(sub)',function (data) {  
    //假装此处有ajax
    //打印提示框
    //获取弹出层的index,且在点击事件触发后关闭
    layui.use('layer', function () {
      var layer = layui.layer;
      layer.open({
          title:'确认打印',
          content:$('#print_layer'),
          type:1,
          area: '500px',
      });
      
  })
      //一个辣眼睛的回显
      var act = $("input[name='act']").val()
      var sure = $("input[name='sure']").val()
      var name = $("input[name='name']").val()
      var money = $("input[name='money']").val()
      
      $('#actBack').text(act);
      $('#sureBack').text(sure);
      $('#nameBack').text(name);
      $('#moneyBack').text(Number(money).toFixed(2));
      
      
    return false  
  })
  form.on('submit(pass)', function (data) {
    layer.closeAll();
    return false;
});
  //执行一个laydate实例
})