$(function() {
	getPage()
	//pagezz()
})
 /**
  * 获取所有数据
  */
 //function getPage(page,size) {
 	function getPage() {
	mypost(queryAllT, {
//		page:page,
//		size:size
		}, 
		function(data) {
			dataRow =""
		
			for( var i = 0 ;i < data.length ;i++)
			{
				var id = "'"+data[i].tid+"'"
				var row = '<tr>' +
				'<th scope="row">' + (i+1) + '</th>' +
				'<td >' + data[i].tname + '</td>' +
				'<td >' + data[i].sex + '</td>' +
				'<td >' + data[i].tnumber + '</td>' +
				'<td >' + data[i].password + '</td>' +
				'<td >' + data[i].school + '</td>' +
				'<td >' + data[i].birth + '</td>' +
				'<td><button class="layui-btn layui-btn-sm" type="submit" onclick="edit('+tid+')" >更改</button>'+
				'<button class="layui-btn layui-btn-sm layui-btn-danger" type="submit" onclick="remove('+tid+')" >删除</button></td></tr>'
				dataRow += row;
			}
			$("tbody").append(dataRow)
		})
}
 	
/**
 * 删除单条
 * @param {Object} id
 */
function remove(tid) 
{
	mypost(
		deleteT,
		{
			"tid": tid,
		},
		function(data) 
		{
			
				alert("删除成功")
				$("tbody").empty()
				getPage()
			
		})
}

/**
 * 条件查询
 */
function search()
{
	$("tbody").empty()
	if ($("#tname").val().length == 0) {
		//pagezz()
		getPage();
	}else{
	mypost(queryNameT,{
		tname:$("#tname").val()
		},function(data){
			dataRow =""
				for( var i = 0;i<data.length ;i++)
				{
					var id = "'"+data[i].tid+"'"
					var row = '<tr>' +
					'<th scope="row">' + (i+1) + '</th>' +
					'<td >' + data[i].tname + '</td>' +
					'<td >' + data[i].sex + '</td>' +
					'<td >' + data[i].tnumber + '</td>' +
					'<td >' + data[i].password + '</td>' +
					'<td >' + data[i].school + '</td>' +
					'<td >' + data[i].birth + '</td>' +
					'<td><button class="layui-btn layui-btn-sm" type="submit" onclick="edit('+tid+')" >更改</button>'+
					'<button class="layui-btn layui-btn-sm layui-btn-danger" type="submit" onclick="remove('+tid+')" >删除</button></td></tr>'
					dataRow += row;
				}
			$("tbody").append(dataRow);
	})
	}
}


	 // 导出excel
function exportExcel() {
			//alert("开始")
			$.ajax({
				type: "POST",
				url: "http://localhost:8080/teacher/excel",
				success: function(data) {
					//alert("导出成功")
					window.location.href = encodeURI("http://localhost:8080/teacher/excel");
				},
				//请求失败，包含具体的错误信息
				error: function(e) {
					//alert("导出异常")
				}
			});
		}