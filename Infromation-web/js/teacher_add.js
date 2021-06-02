
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
		"uname":uname,
		"sex":sex,
		"birth":birth,
		"tnumber":tnumber,
		"password":password,
		"school":school,
	}, 
	function(data) 
	{
		
				alert("添加成功")
				window.location.href='student_list.html';
			
	})

	 
 }