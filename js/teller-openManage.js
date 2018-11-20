<script>
layui.use('table', function(){
  var table = layui.table
  ,form = layui.form;
  
  //监听性别操作
  form.on('switch(openDemo)', function(obj){
    layer.tips(this.value + ' ' + this.name + '：'+ obj.elem.checked, obj.othis);
  });
  
  //监听锁定操作
  form.on('checkbox(lockDemo)', function(obj){
    layer.tips(this.value + ' ' + this.name + '：'+ obj.elem.checked, obj.othis);
  });
});
</script>