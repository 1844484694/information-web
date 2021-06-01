function loginin()
{
	var username = $("#username").val();
	var password = $("#password").val();
	var message = $("#message").val();
	mypost(loginApi, {
		"username":username,
		"password":password,
		"message":message
		}, 
		function(data) {
				if (data.msc == 200) {
					alert(data.text)
//					addCookie("token", data.token, 1);
					window.location.href = "index.html";
				} else if(data.msc == -1){
				
				alert(data.text)

				}
		})
	
}
function keys(){
	mypost(keysApi,{
		
	},
	function(data){
		
		alert(data.text)
		
	}
	
	
	)
	
	
	
}
