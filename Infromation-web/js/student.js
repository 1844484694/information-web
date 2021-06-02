
$(function() {
	//getPage()
	pagezz()
})
 /**
  * 获取所有数据
  */
 function getPage(page,size) {
 //	function getPage() {
	mypost(queryAll, {
		page:page,
		size:size
		}, 
		function(data) {
			dataRow =""
		
			for( var i = 0 ;i < data.length ;i++)
			{
				
				var uid = "'"+data[i].uid+"'"
				var row = '<tr>' +
				'<th scope="row">' + (i+1) + '</th>' +
				'<td >' + data[i].uname + '</td>' +
				'<td >' + data[i].sex + '</td>' +
				'<td >' + data[i].birth + '</td>' +
				'<td >' + data[i].unumber + '</td>' +
				'<td >' + data[i].password + '</td>' +
				'<td >' + data[i].school + '</td>' +
				'<td >' + data[i].departname + '</td>' +
				'<td >' + data[i].cname + '</td>' +
				'<td><button class="layui-btn layui-btn-sm" type="submit" onclick="edit('+uid+')" >更改</button>'+
				'<button class="layui-btn layui-btn-sm layui-btn-danger" type="submit" onclick="remove('+uid+')" >删除</button></td></tr>'
				dataRow += row;
				
			}
			$("tbody").append(dataRow)
			
		})
	
}
 
 

 
/**
 * 删除单条
 * @param {Object} id
 */
function remove(uid) 
{
	mypost(
		deleteApi,
		{
			"uid": uid,
		},
		function(data) 
		{
			
				alert("删除成功")
				$("tbody").empty()
				getPage()
			
		})
}

/**
 * 修改前查询单条，喷到页面里
 * @param {Object} id
 */
function edit(uid)
{
	$('#modify').modal('show');
	mypost(queryOneApi,
		{
			"uid": uid,
		},
		function(data) {
			console.log(data)
			var uname = data[0].uname;
			var sex = data[0].sex;
			var birth = data[0].birth;
			var unumber = data[0].unumber;
			var password = data[0].password;
			var cname = data[0].cname;
			var school = data[0].school;
			var departname = data[0].departname;
			
			$("#uid").val(uid);
			$("#uname").val(uname);
			$("#sex").val(sex);
			$("#birth").val(birth);
			$("#unumber").val(unumber);
			$("#password").val(password);
			$("#cname").val(cname);
			$("#school").val(school);
			$("#departname").val(departname);
			
			
		})
	
}

/**
 *  修改数据
 */
function editStudent(){
	
	var uid=$("#uid").val();
	var uname  = $("#uname").val();
	var sex  = $("#sex").val();
	var birth = $("#birth").val();
	var unumber =  $("#unumber").val();
	var password = $("#password").val();
	var cname = $("#cname").val();
	var school = $("#school").val();
	var departname = $("#departname").val();
	mypost(editApi, 
	{
		"uid":uid,
		"uname":uname,
		"sex":sex,
		"birth":birth,
		"unumber":unumber,
		"password":password,
		"cname":cname,
		"school":school,
		"departname":departname
	}, 
	function(data) 
	{
				alert("修改成功")
				$('#modify').modal('hide');
				$("tbody").empty()
				pagezz()
	})
}


	

	
/**
 * 多条件
 */
function search()
{
	$("tbody").empty()
	if (($("#uname1").val().length == 0)&&($("#unumber1").val().length == 0)) {
		pagezz()
	}else{
	mypost(queryNameApi,{
		uname:$("#uname1").val(),
		unumber:$("#unumber").val()
		},function(data){
			dataRow =""
				for( var i = 0;i<data.length ;i++)
				{
					var uid = "'"+data[i].uid+"'"
					var row = '<tr>' +
					'<th scope="row">' + (i+1) + '</th>' +
					'<td >' + data[i].uname + '</td>' +
					'<td >' + data[i].sex + '</td>' +
					'<td >' + data[i].birth + '</td>' +
					'<td >' + data[i].unumber + '</td>' +
					'<td >' + data[i].password + '</td>' +
					'<td >' + data[i].school + '</td>' +
					'<td >' + data[i].departname + '</td>' +
					'<td >' + data[i].cname + '</td>' +
					'<td><button class="layui-btn layui-btn-sm" type="submit" onclick="edit('+uid+')" >更改</button>'+
					'<button class="layui-btn layui-btn-sm layui-btn-danger" type="submit" onclick="remove('+uid+')" >删除</button></td></tr>'
					dataRow += row;
					
				}
			$("tbody").append(dataRow);
	})
	}
}
	
/**
 * 条件查询
 */
function search2()
{
	$("tbody").empty()
	if ($("#uname1").val().length == 0) {
		pagezz()
		//getPage();
	}else{
	mypost(queryNameApi,{
		uname:$("#uname1").val()
		},function(data){
			dataRow =""
				for( var i = 0;i<data.length ;i++)
				{
					var uid = "'"+data[i].uid+"'"
					var row = '<tr>' +
					'<th scope="row">' + (i+1) + '</th>' +
					'<td >' + data[i].uname + '</td>' +
					'<td >' + data[i].sex + '</td>' +
					'<td >' + data[i].birth + '</td>' +
					'<td >' + data[i].unumber + '</td>' +
					'<td >' + data[i].password + '</td>' +
					'<td >' + data[i].school + '</td>' +
					'<td >' + data[i].departname + '</td>' +
					'<td >' + data[i].cname + '</td>' +
					'<td><button class="layui-btn layui-btn-sm" type="submit" onclick="edit('+uid+')" >更改</button>'+
					'<button class="layui-btn layui-btn-sm layui-btn-danger" type="submit" onclick="remove('+uid+')" >删除</button></td></tr>'
					dataRow += row;
						
				}
			$("tbody").append(dataRow);
	})
	}
}

/**
 * 分页
 */
function pagezz(){
	 	var size = 5
	 	mypost(countApi, {}, 
		function(data) {
				console.log(data.num);
	 		layui.use(['laypage', 'layer'], function() {
	 			var laypage = layui.laypage //分页 
	 			var layer = layui.layer //弹层
	 			//分页
	 			laypage.render({
	 				elem: 'pageDemo', //分页容器的id
	 				count: data.num, //数据总数量
	 				limit: size,
	 				skin: '#1E9FFF',//自定义选中色值
	 				//,skip: true //开启跳页
				
	 				jump: function(obj, first) {
	 					$("#tbody").empty()
	 					getPage(obj.curr,size)
	 					if (!first) {
	 						layer.msg('第' + obj.curr + '页', {
	 							offset: 'b'
	 						});
	 					}
	 				}
	 			});
	 		});
	 	})
	 }
	 
	 
	 // 导出excel
	 
	 
function exportExcel() {
			//alert("开始")
			$.ajax({
				type: "POST",
				url: "http://localhost:8080/student/excel",
				success: function(data) {
					//alert("导出成功")
					window.location.href = encodeURI("http://localhost:8080/student/excel");
				},
				//请求失败，包含具体的错误信息
				error: function(e) {
					//alert("导出异常")
				}
			});
		}