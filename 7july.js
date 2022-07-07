function preview(){
	console.log('Welcome to Mirketa');
	var num=document.getElementById('id1').value;
	var result= parseInt(num) * 2;
	console.log(result);
}

function abc(){
	var num= document.getElementById('id1').value;
	var result= num * 2 ;
	document.getElementById('result1').textContent= 'Result is'+ ' '+ result;
}