function welcome(){
console.log('Hello Mirketa Welcome');
}

function printName(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	console.log('Hello '+ fname,lname);
}
function Addition(){
	var a= document.getElementById('num1').value;
	var b= document.getElementById('num2').value;
	const sum =parseInt(a) + parseInt(b);
	console.log(sum);
}

function substraction(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	sub=num1 - num2;
	console.log(sub);
}
function Multiplication(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	Mul=num1 * num2;
	console.log(Mul);
}
function Division(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	div=num1/num2;
	console.log(div);
}