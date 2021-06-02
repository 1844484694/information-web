//主项目地址
var domain = "http://localhost:8080";
/**
 * 主页数据
 */
/**
 * 学生展示的api
 */
var queryAll ="/student/queryAll";					//查询全部
var addstudentApi="/student/add";					//添加信息
var deleteApi="/student/delete";				//删除信息
var queryOneApi="/student/queryOne"
var editApi="/student/update";						//修改信息
var queryNameApi="/student/querybyname";			//条件查询
var countApi="/student/getLogsCount";				//查询记录数
var excelApi="/student/excel";					//excel导出
//var UserqueryApi="/Goods/queryName";			//多条件查询
/*
var queryDepotApi ="/Goods/queryDepot";//下拉框查询
var queryNumApi="/Goods/queryNum";				//E-charts*/

//var keysApi="/Manage/key";				//发送验证码
//var loginApi="/Manage/login";				//登录

/**
 * 教师展示的api
 */
var queryAllT ="/teacher/query";
var addT ="/teacher/addOne";
var updateT ="/teacher/updateOne";
var queryOneT ="/teacher/queryOne";
var deleteT ="/teacher/delete";
var queryNameT ="/teacher/queryname";

/**
 * @description  自己封装的 ajax方法
 * @param {Object} api  连接地址
 * @param {Object} parameters   请求参数
 * @param {Object} callback    回调函数
 */


function mypost(api, parameters, callback) {
	
	$.ajax({
		url: domain + api,
		data: parameters,
		type: 'POST',
		async:true,
		dataType: 'json',
		success: callback,
		error: function() {
			//异常处理；  
			console.log('error : 服务器内部错误');
			console.log("-------------------------")
		}
	});
}
