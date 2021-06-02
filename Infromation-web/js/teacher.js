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
				var tid = "'"+data[i].tid+"'"
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
					var tid = "'"+data[i].tid+"'"
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

/**
 * 修改前查询单条，喷到页面里
 * @param {Object} id
 */
function edit(tid)
{

	$('#modify1').modal('show');
	mypost(queryOneT,
		{
			"tid": tid,
		},
		function(data) {
			console.log(data)
			var tname = data.tname;
			var sex = data.sex;
			var birth = data.birth;
			var tnumber = data.tnumber;
			var password = data.password;
			var school = data.school;
			
			$("#tid").val(tid);
			$("#tname1").val(tname);
			$("#sex").val(sex);
			$("#birth").val(birth);
			$("#tnumber").val(tnumber);
			$("#password").val(password);
			$("#school").val(school);
			
			
		})
	
}

/**
 *  修改数据
 */
function editTeacher(){
	
	var tid=$("#tid").val();
	var tname  = $("#tname1").val();
	var sex  = $("#sex").val();
	var birth = $("#birth").val();
	var tnumber =  $("#tnumber").val();
	var password = $("#password").val();
	var school = $("#school").val();
	mypost(updateT, 
	{
		"tid":tid,
		"tname":tname,
		"sex":sex,
		"birth":birth,
		"tnumber":tnumber,
		"password":password,
		"school":school
	}, 
	function(data) 
	{
				alert("修改成功")
				$('#modify1').modal('hide');
				$("tbody").empty()
				getPage()
//				pagezz()
	})
}