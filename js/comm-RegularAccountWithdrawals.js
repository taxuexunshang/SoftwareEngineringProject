    //使用layui的form模块
  layui.use(['laydate','form','jquery','layer'], function(){
  var laydate = layui.laydate;
  var form = layui.form
  var $ = layui.jquery
  var layer = layui.layer

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
        date: '2018-05-02',
        overdate:'2019-05-02',
        balance:'10000.00',
        summaryNum:'101',
        summary:'定期取款',
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
    var index = layer.alert('是否立即打印?',{ 
        skin: 'layui-layer-molv' //样式类名 自定义样式
        ,closeBtn: 1  // 是否显示关闭按钮
        ,anim: 1 //动画类型
        ,btn: ['确定','取消'] //按钮
        ,icon: 6  // icon
        ,yes:function(){
            layer.close(index)
        }
        ,btn2:function(){
            layer.close()
            }
    })
    return false
  })

  //执行一个laydate实例
  laydate.render({
    elem: '#date' //指定元素
  })
})
    