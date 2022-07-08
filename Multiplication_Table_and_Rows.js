function loop(){
	var a=0;
	var c=document.getElementById('tex1').value;
	var d=document.getElementById('tex2').value;
	var str1='<table class="table table-striped table-dark">';
	for(a=1;a<=d;a++){
		str1= str1 + '<tr><td>' + a +' '+ '</td><td>x</td><td>' +' '+ c +' '+ '</td><td>=</td><td>' +' '+(a * c)+ '</td></tr>';
	}
	str1 = str1 +'</table>';
	document.getElementById('a2').innerHTML = str1;
}

//temp+="<tr><td>"+Number+"</td><td>*</td><td>" + T + "</td><td>=</td><td>" + Number*T +"</td></tr>"; 