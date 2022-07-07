function compoundInterest(){
	var p=document.getElementById('num1').value;
	var t=document.getElementById('num2').value;
	var r=document.getElementById('num3').value;
	var Amount= parseInt(p) * (Math.pow(( 1 + parseInt(r)/100 ),parseInt(t)))
	if(	p == ""|| p == null || t == ""|| t == null || r == ""|| r == null )
	{
		var error = "Please enter the values";
		document.getElementById('num4').value = error;
	}
	else{
		document.getElementById('num4').value = Amount;
	}

}
