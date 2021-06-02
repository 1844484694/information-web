
$(function() {
})
/**
  * 添加数据
  */
 function addTeacher() 
 {
	var tname  = $("#tname").val();
	var sex  = $("#sex").val();
	var birth = $("#birth").val();
	var tnumber =  $("#tnumber").val();
	var password = $("#password").val();
	var school = $("#school").val();
	
	mypost(addT, 
	{
		"tname":tname,
		"sex":sex,
		"birth":birth,
		"tnumber":tnumber,
		"password":password,
		"school":school,
	}, 
	function(data) 
	{
		
				alert("添加成功")
				window.location.href='teacher_list.html';
			
	})

	 
 }