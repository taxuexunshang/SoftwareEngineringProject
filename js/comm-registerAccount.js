 //监听表单
    layui.use(['form','jquery'], function () {
        var form = layui.form;
        var $ = layui.jquery;
        //创建时间对象实例，获取当前时间，注入value
        var mydate = new Date()
        var dataNow = mydate.toLocaleDateString()
        $('input[name="date"]').attr("value",dataNow)

        form.verify({
        //为账号定义的验证添加规则
        act: [/^([0-9]{6})$/, '账号必须是六位整数'],
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

        //监听提交
        //增加弹出层，通过id实现表格注入对应数据
        form.on('submit(formDemo)', function (data) {
            layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                title:'确认数据',
                content:$('#print_layer'),
                type:1,
                area: '500px',
            });
            
        })
            var id = $("input[name='id']").val()
            var userName = $("input[name='userName']").val()
            var telNum = $("input[name='telNum']").val()
            var noteNum = $("input[name='noteNum']").val()
            var date = $("input[name='date']").val()
            var note = $("input[name='note']").val()
            var evidenceNum = $("input[name='evidenceNum']").val()
            

            $('#idBack').append(id);
            $('#userNameBack').append(userName);
            $('#telNumBack').append(telNum);
            $('#noteNumBack').append(noteNum);
            $('#dateBack').append(date);
            $('#noteBack').append(note);
            $('#evidenceNumBack').append(evidenceNum);

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
                        content:$('#pass_layer'),
                        type: 1,
                    });
                });
            }
        })

    });

    layui.use('upload', function () {
        var $ = layui.jquery
            , upload = layui.upload;

        var uploadInst = upload.render({
            elem: '#test1'
            , url: '/upload/'
            , before: function (obj) {
                //预读本地文件示例，不支持ie8
                obj.preview(function (index, file, result) {
                    $('#demo1').attr('src', result); //图片链接（base64）
                });
            }
            , done: function (res) {
                //如果上传失败
                if (res.code > 0) {
                    return layer.msg('上传失败');
                }
                //上传成功
            }
            , error: function () {
                //演示失败状态，并实现重传
                var demoText = $('#demoText');
                demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
                demoText.find('.demo-reload').on('click', function () {
                    uploadInst.upload();
                });
            }
        });

    });
