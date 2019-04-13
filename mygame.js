

function getNowDate(index) {
	 var date = new Date();
	 var sign1 = "-";
	 var sign2 = ":";
	 var time = date.getTime();  //毫秒时间戳
	 var year = date.getFullYear(); // 年
	 var month = date.getMonth() + 1; // 月
	 var day  = date.getDate(); // 日
	 var hour = date.getHours(); // 时
	 var minutes = date.getMinutes(); // 分
	 var seconds = date.getSeconds() //秒
	 var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
	 var week = weekArr[date.getDay()];
	 // 给一位数数据前面加 “0”
	 if (month >= 1 && month <= 9) {
	  month = "0" + month;
	 }
	 if (day >= 0 && day <= 9) {
	  day = "0" + day;
	 }
	 if (hour >= 0 && hour <= 9) {
	  hour = "0" + hour;
	 }
	 if (minutes >= 0 && minutes <= 9) {
	  minutes = "0" + minutes;
	 }
	 if (seconds >= 0 && seconds <= 9) {
	  seconds = "0" + seconds;
	 }
	
	 var currentdate = "";
	 switch(parseInt(index)){
		 case 1:currentdate = year + sign1 + month + sign1 + day + sign1 + hour + sign2 + minutes + sign2 + seconds;
			 break;
		 case 2:currentdate = hour + sign2 + minutes + sign2 + seconds;
			 break;
		 case 3:currentdate = time;
			 break;
		 case 4:
			 //local time string
			 currentdate = date.toString();
			 break;
		 case 6:
			 //time format
			 currentdate = date.getFullYear() + '年' + date.getMonth()+'月'+date.getDate()+'日'+date.getHours()+'时'+date.getMinutes()+'分'+date.getSeconds()+'秒'
			 break;
			 
		 default:
			 currentdate = year + sign1 + month + sign1 + day + " " + hour + sign2 + minutes + sign2 + seconds + " " + week;
	 }
			
	 return currentdate;
}

//移除txt文件行尾的换行符
function rmLineFlag(txt){
	return txt.replace(/[\r\n]/g,"");
}

//制表符替换成"|"
function replaceTab(txt){
	return txt.replace(/[\t]/g,"|");
}

//换行符替换成";"
function replaceEnterToOther(txt){
	return txt.replace(/[\r\n]/g,";");
}

//parse ajax
function parseData(data){
	var str = data;
	var obj = eval("(" + str + ")");
	console.log(obj);
	var ddd = function(str){
		return eval("(" + str + ")");
	}
	
	var products = "";
	
	var str = data;
	var obj = ddd(str);
	var rows = obj["data"];
	
	console.log("product array length = "+rows.length)
	
	for(var i = 0; i < rows.length; i++){
		var ri = rows[i];

		for(var k in ri){
			products = products + ri[k] + "|";
			//console.log("i=" + i + ",key=" + k + ", value=" + ri[k]);
		}

		var icon = i % 8;
		products = products + icon;
		products = products + ";"
	}

	console.log(products)

	return products
}

function parseToInt(str){
	var result = parseInt(str)
	console.log("result="+result)
	return result
}

//读取当前等级经验上限 指数增长模型
function getExp(level){
	var exp = Math.floor(20 * Math.pow(1.4,level));
	return exp;
}

//读取当前等级血量上限 指数增长模型
function getHp(level){
	var hp = Math.floor(1000 * Math.pow(1.1,level));
	return hp;
}

//读取攻击成长 指数增长模型
function getAp(level){
	var ap = Math.floor(50 * Math.pow(1.1,level));
	return ap;
}

//读取物理防御成长 指数增长模型
function getDp(level){
	var dp = Math.floor(30 * Math.pow(1.1,level));
	return dp;
}

//读取魔法防御成长 指数增长模型
function getMp(level){
	var mp = Math.floor(20 * Math.pow(1.1,level));
	return mp;
}


//读取击杀一个怪物经验 指数增长模型 level=怪物等级
function getRewardExp(level){
	var rexp = Math.floor(30 * Math.pow(1.15,level));
	return rexp;
}

//读取击杀一个怪物铜钱 指数增长模型 level=怪物等级
function getRewardCopper(level){
	var copper = Math.floor(40 * Math.pow(1.1,level));
	return copper;
}





















