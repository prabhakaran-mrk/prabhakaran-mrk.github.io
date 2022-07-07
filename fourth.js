function hello(){
	console.log('hello calculator');
}

/*function add(){
	var inum1=document.getElementById('num1').value;
	var inum2=document.getElementById('num2').value;
	var sum = parseInt(inum1) + parseInt(inum2);
	document.getElementById('num3').value = sum;	
}*/

function simpleInterest(){
	var inum1=document.getElementById('num1').value;
	var inum2=document.getElementById('num2').value;
	var inum3=document.getElementById('num3').value;
	var sum = parseInt(inum1) * parseInt(inum2)* parseInt(inum3)/100;
	if(	inum1 == ""|| inum1 == null || inum2 == ""|| inum2 == null || inum3 == ""|| inum3 == null )
	{
		var error = "Please enter the values";
		document.getElementById('num4').value = error;
	}
	else{
		document.getElementById('num4').value = sum;
	}

}
