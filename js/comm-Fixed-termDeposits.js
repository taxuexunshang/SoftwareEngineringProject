   //监听表单
   layui.use('form', function () {
    var form = layui.form;
    var $ = layui.jquery;
    //创建时间对象实例，获取当前时间，注入value
    var mydate = new Date()
    var dataNow = mydate.toLocaleDateString()
    $('input[name="date"]').attr("value",dataNow)
    $('input[name="date1"]').attr("value",dataNow)
    form.verify({
    //为账号定义的验证添加规则
    pass:[/^([0-9]{6})$/, '密码必须是六位整数'],
    id:[/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,'身份证号必须是18位'],
    money: [/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,'金额不能超过两位小数，且不能为负数'],
    telNum:[/^[0-9]{11}/,'手机号必须为十一位数字'],
    confirmPwd:function(value, item){  
        if(!new RegExp($("#oldPwd").val()).test(value)){
            return "两次输入密码不一致，请重新输入！";  
        }
    }
})
    /*未改完*/
    //监听提交
    form.on('submit(formDemo)', function (data) {
         layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                title:'确认打印',
                content:$('#print_layer'),
                type:1,
                area: '500px',
            });
            
        })
            
            var id = $("input[name='id']").val()
            var userName = $("input[name='userName']").val()
            var moneyIn = $("input[name='moneyIn']").val()
            var interestRate = $("select[name='interestRate']").val()
            var acNum = $("input[name='acNum']").val()
            

            $('#idBack').text(id);
            $('#userNameBack').text(userName);
            $('#moneyInBack').text(Number(moneyIn).toFixed(2));
            $('#interestRateBack').text(interestRate);
            $('#acNumBack').text(acNum);
         

            return false;
    })
    

     form.on('submit(pass)', function (data) {
        layer.closeAll();
        return false;
    });
    //监听select选项，生成模态框
    form.on('select(dep)', function (data) {
        if (data.value == 1) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    title: '设置密码',
                    content: $('#pass_layer'),
                    type: 1,
                });
            });
        }
    })
    
});


