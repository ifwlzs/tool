function setKeyup(obj) {
	if (!obj.value) return false;
		re = /^[\d\.]+$/
		if (!re.test(obj.value)) {
		alert("请输入阿拉伯数字");
		obj.value = "";
	}
}

function getHei() {
	var fHeig = document.getElementById('wfhei').value;
	if (fHeig == '') {
		alert('请输入父亲身高');
		document.getElementById('wfhei').focus();
		return false;
	}
	var mHeig = document.getElementById('wmhei').value;
	if (mHeig == '') {
		alert('请输入母亲身高');
		document.getElementById('wmhei').focus();
		return false;
	}
	var cSex = document.getElementById('wcsex1').checked;
	if (!cSex && !document.getElementById('wcsex0').checked) {
		alert('请选择子女性别');
		return false;
	}
	if (cSex == true) {
		var cHeig = (parseFloat(fHeig) + parseFloat(mHeig)) * 1.08 / 2;
	} else {
		var cHeig = (parseFloat(fHeig) * 0.923 + parseFloat(mHeig)) / 2;
	}
	document.getElementById('wtext').innerHTML = '您宝宝的身高可能是<b class="red">'+cHeig.toFixed(1)+'</b> 厘米(cm)';
	document.getElementById('wresult').style.display = '';
	
	var c = document.getElementById('wresult').innerHTML;
	var i = '';
	return {c:c, i:i};
}

function wInit() {
	document.getElementById('wtext').innerHTML = '';
	document.getElementById('wresult').style.display = 'none';
}

function handleWork(obj) {
	var v = obj.value;
	obj.disabled = true;
	obj.value = '开始计算';
	
	// global callback
	handleBegin();
	
	var res = getHei();
	
	if (typeof res == 'object' && res != null) {
		// global callback
		handleFinish(res.c, res.i);
	}
	
	obj.value = v;
	obj.disabled = false;
}