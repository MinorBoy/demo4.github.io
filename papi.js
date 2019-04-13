//js接口

var orderstate = 0;
var orderid = "";
var loginuid = "";
var productid = "";
var productName = "";
var gameId = 0;

function getProductName(){
    return productName
}
function getGameId(){
    return gameId
}

function getProductId(){
	return productid
}

function setProductId(id){
	productid = id
}

function resetOrderid(){
	orderid = ""
	return orderid
}

function getOrderId(){
	return orderid
}

function setOrderId(id){
	orderid = id
}

function resetOrderState(){
	orderstate = 0
}
function getOrderState(){
	return orderstate
}
function showMessage(message) {
    console.log(message)
}

function onClick(type) {
    this[type]()
}

//请求链接0 上传行为记录
//function getActiveSyncUrl(rolename,msg){
//	var url = 'http://47.106.204.232:8084/ss/active/syncActive'
//	url = url + '?rolename=' + rolename + '&msg=' + msg 
//	return url
//}

//请求链接0 上传行为记录
function getActiveSyncUrl(rolename,msg,msg2){
	var url = 'http://47.106.204.232:8084/ss/active/syncActive'
	url = url + '?rolename=' + rolename + '&msg=' + msg + msg2
//	url = url+'?rolename='+rolename+'&msg='+msg+'&layout='+layout+'&layer='+layer+'&gameid='+gameid+'&username='+username
	return url
}

//请求链接0 上传充值记录
function getOrderSyncUrl(rolename){
	var url = 'http://47.106.204.232:8084/ss/game/syncOrder/'
	url = url + '?roleid='+ rolename + '&orderid=' + orderid
	return url
}

//请求链接1 轮询订单
function getOrderResultUrl(){
	var url = 'http://47.106.204.232:8084/ss/game/extra/'
	url = url + orderid
	showMessage(url)
	return url
}

//请求链接2
function getLoginResultUrl(){
	var url = 'http://47.106.204.232:8084/ss/player/userid/'
	url = url + loginuid
	showMessage(url)
	return url
}

//请求链接3
function getSyncUrl(maxscore,food){
	var url = 'http://47.106.204.232:8084/ss/player/update'
	url = url + '?userid=' + loginuid + '&food=' + food + '&maxscore=' + maxscore
	showMessage(url)
	return url
}


//回调接口 --begin
function orderSuccess(msg){
    showMessage('[cordova js callback] orderSuccess')
    showMessage(msg)
	orderstate = 1
	orderid = msg
}
function orderFail(msg){
    showMessage('[cordova js callback] orderFail')
    showMessage(msg)
	orderstate = 0
}
//回调接口 --end



//sdk接口 --begin
function order(price){
	showMessage("order >>> "+price)
	productid = price
	var product = productName + price
    cordova.exec(orderSuccess,orderFail,"IAPPlugin","order",[product]);
}
//sdk接口 --end

//sdk接口 --begin
function initGameIdSuccess(gameid){
    showMessage("[js] initGameIdSuccess >>> "+gameid)
    gameId = gameid
}
function initGameIdFail(){
}
function initGameId(){
    showMessage("[js] initGameId...")
    cordova.exec(initGameIdSuccess,initGameIdFail,"IAPPlugin","initGameId",[0]);
}
//sdk接口 --end

//sdk接口 --begin
function initProductSuccess(product){
    showMessage("[js] initProductSuccess >>> "+product)
    productName = product
}
function initProductFail(){
}
function initProduct(){
    showMessage("[js] initProduct...")
    cordova.exec(initProductSuccess,initProductFail,"IAPPlugin","initProduct",[0]);
}
//sdk接口 --end

