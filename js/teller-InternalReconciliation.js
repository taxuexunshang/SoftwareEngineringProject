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
    id:[/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,'身份证号必须是18位'],
    money: [/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,'金额不能超过两位小数，且不能为负数'],
})
    /*未改完*/
    //监听提交
    form.on('submit(formDemo)', function (data) {
         layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                title:'确认打印',
                content:
                '<table class="layui-table">'
                  +'<colgroup>'
                    +'<col width="150">'
                    +'<col width="200">'
                  +'</colgroup>'
                  +'<thead>'
                    +'<tr>'
                      +'<th>数据项</th>'
                      +'<th>数据</th>'
                    +'</tr> '
                  +'</thead>'
                  +'<tbody>'
                    +'<tr>'
                      +'<td>柜员号</td>'
                      +'<td id="userNameBack"></td>'
                    +'</tr>'
                    +'<tr>'
                      +'<td>金额</td>'
                      +'<td id="moneyInBack"></td>'
                    +'</tr>'
                    +'<tr>'
                        +'<td>摘要</td>'
                        +'<td>内部调账</td>'
                    +'</tr>'
                    +'<tr>'
                        +'<td>科目号</td>'
                        +'<td>621</td>'
                    +'</tr>'
                  +'</tbody>'
                +'</table>'
                +'<div class="btn-center">'
                + '<button class="layui-btn" lay-submit lay-filter="pass">确认</button>'
                +'<button class="layui-btn" lay-submit lay-filter="pass">取消</button>'
                + '</div>',
                type:1,
                area: '500px',
            });
            
        })

            var userName = $("input[name='userName']").val()
            var moneyIn = $("input[name='moneyIn']").val()
            
            $('#userNameBack').append(userName);
            $('#moneyInBack').append(Number(moneyIn).toFixed(2));
         
            return false;
    })
    

     form.on('submit(pass)', function (data) {
        layer.closeAll();
        return false;
    });
});


// layui.use('laydate', function () {
//     var laydate = layui.laydate;

//     //执行一个laydate实例
//     laydate.render({
//         elem: '#date' //指定元素
//     });

//     laydate.render({
//         elem: '#date1' //指定元素
//     });
// });

