var arr1 = new Array("", " thousand", " million", " billion");
var arr2 = new Array("zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety");
var arr3 = new Array("zero", "one", "two", "three", "four", "five", "six", "sever", "eight", "nine");;
var arr4 = new Array("ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");

function Translate(num) {;
	var len = num.length,
		i, j = 0,
		strRet = "";;
	var cols = Math.ceil(len / 3);;
	var first = len - cols * 3;
	var strRet = "";
	for(i = first; i < len; i += 3) {
		++j;
		if(i >= 0) num3 = num.substring(i, i + 3);
		else num3 = num.substring(0, first + 3)
		strEng = English(num3);
		if(strEng != "") {
			if(strRet != "") strRet += ",";
			strRet += English(num3) + arr1[cols - j]
		}
	}
	return strRet
}

function English(num) {
	strRet = "";
	if((num.length == 3) && (num.substr(0, 3) != "000")) {
		if((num.substr(0, 1) != "0")) {
			strRet += arr3[num.substr(0, 1)] + " hundred";
			if(num.substr(1, 2) != "00") strRet += " and "
		}
		num = num.substring(1)
	}
	if((num.length == 2)) {
		if((num.substr(0, 1) == "0")) {
			num = num.substring(1)
		} else if((num.substr(0, 1) == "1")) {
			strRet += arr4[num.substr(1, 2)]
		} else {
			strRet += arr2[num.substr(0, 1)];
			if(num.substr(1, 1) != "0") strRet += "-";
			num = num.substring(1)
		}
	}
	if((num.length == 1) && (num.substr(0, 1) != "0")) {
		strRet += arr3[num.substr(0, 1)]
	}
	return strRet
}