function mc(){
	var mc1=document.getElementById('mc1').value;
	var mc2=document.getElementById('mc2').value;
	var m1value=document.getElementById('m1').value;
	var m2=document.getElementById('m2');
	var g=0;
//	alert(mc1);
//	alert(mc2);
//	alert(m1value);
//	m2.value=m1value;
//if(mc1==1){
//	alert(mc1);
//}
	if(mc1==mc2){
		m2.value=m1value;
	}
	else if(mc1==1&&mc2==2){
		g=0.1456;
		m2.value=m1value*g;
	}
	else if(mc1==1&&mc2==3){
		g=15.6218;
		m2.value=m1value*g;
	}
	else if(mc1==1&&mc2==4){
		g=0.1143;
		m2.value=m1value*g;
	}
	else if(mc1==1&&mc2==5){
		g=0.1281;
		m2.value=m1value*g;
	}
	else if(mc1==1&&mc2==6){
		g=1.1376;
		m2.value=m1value*g;
	}
	else if(mc1==2&&mc2==1){
		g=6.8686;
		m2.value=m1value*g;
	}
	else if(mc1==2&&mc2==3){
		g=107.3;
		m2.value=m1value*g;
	}
	else if(mc1==2&&mc2==4){
		g=0.7849;
		m2.value=m1value*g;
	}
	else if(mc1==2&&mc2==5){
		g=0.8798;
		m2.value=m1value*g;
	}
	else if(mc1==2&&mc2==6){
		g=7.8139;
		m2.value=m1value*g;
	}
	else if(mc1==3&&mc2==1){
		g=0.064;
		m2.value=m1value*g;
	}
	else if(mc1==3&&mc2==2){
		g=0.0093;
		m2.value=m1value*g;
	}
	else if(mc1==3&&mc2==4){
		g=0.0073;
		m2.value=m1value*g;
	}
	else if(mc1==3&&mc2==5){
		g=0.0082;
		m2.value=m1value*g;
	}
	else if(mc1==3&&mc2==6){
		g=0.0728;
		m2.value=m1value*g;
	}
	else if(mc1==4&&mc2==1){
		g=8.7506;
		m2.value=m1value*g;
	}
	else if(mc1==4&&mc2==2){
		g=1.274;
		m2.value=m1value*g;
	}
	else if(mc1==4&&mc2==3){
		g=136.7002;
		m2.value=m1value*g;
	}
	else if(mc1==4&&mc2==5){
		g=1.1209;
		m2.value=m1value*g;
	}
	else if(mc1==4&&mc2==6){
		g=9.9549;
		m2.value=m1value*g;
	}
	else if(mc1==5&&mc2==1){
		g=7.8069;
		m2.value=m1value*g;
	}
	else if(mc1==5&&mc2==2){
		g=1.1366;
		m2.value=m1value*g;
	}
	else if(mc1==5&&mc2==3){
		g=121.9572;
		m2.value=m1value*g;
	}
	else if(mc1==5&&mc2==4){
		g=0.8922;
		m2.value=m1value*g;
	}
	else if(mc1==5&&mc2==6){
		g=8.8813;
		m2.value=m1value*g;
	}
	else if(mc1==6&&mc2==1){
		g=0.8790;
		m2.value=m1value*g;
	}
	else if(mc1==6&&mc2==2){
		g=0.1280;
		m2.value=m1value*g;
	}
	else if(mc1==6&&mc2==3){
		g=13.7319;
		m2.value=m1value*g;
	}
	else if(mc1==6&&mc2==4){
		g=0.1005;
		m2.value=m1value*g;
	}
	else{
		g=0.1126;
		m2.value=m1value*g;
	}
}
