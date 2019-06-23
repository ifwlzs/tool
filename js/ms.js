var str2="https://pan.baidu.com/s/";
var str1="https://www.bilibili.com/";//video/av56204446/
var str3="magnet:?xt=urn:btih:";
function pj(){
	var mst1Value=document.getElementById("msText1").value.toString();
	var mst2=document.getElementById('msText2');
	var mbValue=document.getElementById('mb').value;
	if(mbValue==1){
		mst2.value=str1+mst1Value;
	}else if(mbValue==2){
		mst2.value=str2+mst1Value;
	}else{
		mst2.value=str3+mst1Value;
	}
}
function zd(){
	var urlstr=document.getElementById('msText2').value;
//	alert(urlstr);
	window.location.href=urlstr;
}
