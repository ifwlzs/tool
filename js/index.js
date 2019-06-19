function gowhere1(formname) {
	var url;
	if(formname.myselect.value == "0") {
		$("#q").attr("name", "wd");
		url = "http://www.baidu.com/s?wd";
		document.search_form1.value = "wd";
		formname.method = "get";
	}
	if(formname.myselect.value == "1") {
		$("#q").attr("name", "q");
		url = "https://cn.bing.com/search?q=";
		document.search_form1.value = "q";
		formname.method = "get";
	}
	if(formname.myselect.value == "2") {
		$("#q").attr("name", "q");
		url = "https://quark.sm.cn/s?q=";
		document.search_form1.value = "q";
		formname.method = "get";
	}
	if(formname.myselect.value == "3") {
		$("#q").attr("name", "q");
		url = "https://searx.me?q";
		document.search_form1.value = "q";
		formname.method = "get";
	}
	if(formname.myselect.value == "4") {
		$("#q").attr("name", "text");
		url = "https://yandex.com/search/?q";
		document.search_form1.value = "q";
		formname.method = "get";
	}
	if(formname.myselect.value == "5") {
		$("#q").attr("name", "q");
		url = "https://www.google.com.hk/search?q";
		document.search_form1.value = "q";
		formname.method = "get";
	}
	if(formname.myselect.value == "6") {
		$("#q").attr("name", "text");
		url = "https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&q";
		document.search_form1.value = "q";
		formname.method = "get";
	}
	formname.action = url;
	return true;
}