function loginin()
{
	var rname = $("#rname").val();
	var password = $("#password").val();
	var message = $("#message").val();
	mypost(loginApi, {
		"rname":rname,
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
	var rname = $("#rname").val();
	//alert(rname)
	mypost(keysApi,{
		"rname":rname,
	},
	function(data){
		
		
	}
	
	
	)
	
	
	
}
