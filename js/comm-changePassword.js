 //监听表单
    layui.use(['form','jquery'], function () {
        var form = layui.form;
        var $ = layui.jquery;
        form.verify({
            //为账号定义的验证添加规则
            repass: function (value) {
                var repassvalue = $('#L_pass').val();
                if (value != repassvalue) {
                    return '两次输入的密码不一致!';
                }
            },
            pass: [/(.+){6,12}$/, '密码必须6到12位']

        })

        //监听提交
        form.on('submit(pwd)', function (data) {
            layer.msg("提交成功",{
                icon:6
            })
            return false;
        })
    });
