
$(function() {
})
/**
  * 添加数据
  */
 function addStudent() 
 {
	var uname  = $("#uname").val();
	var sex  = $("#sex").val();
	var birth = $("#birth").val();
	var unumber =  $("#unumber").val();
	var password = $("#password").val();
	var cname = $("#cname").val();
	var school = $("#school").val();
	var departname = $("#departname").val();
	
	mypost(addstudentApi, 
	{
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
		
				alert("添加成功")
				window.location.href='student_list.html';
			
	})

	 
 }