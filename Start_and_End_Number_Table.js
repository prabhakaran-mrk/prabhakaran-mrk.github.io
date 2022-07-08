function f1(){
var str='<table>';
for(i=1;i<=5;i++){
str = str + '<tr><td>Apple' + i + '</td></tr>';

}
str= str + '</table>';

document.getElementById('s1').innerHTML= str;
}


function f2(){
var str1='<table class="table table-striped table-dark">';
var start=document.getElementById('t1').value;
var end=document.getElementById('t2').value;
for(i= parseInt(start);i<= parseInt(end);i++){
str1 = str1 + '<tr><td>' + i * 1 + '</td><td>' + i * 2 + '</td><td>' + i * 3 + '</td></tr>';
}
str1 = str1 +'</table>';	
document.getElementById('s2').innerHTML= str1;
}

/*function f2(){
var str='<table>';
for(i=1;i<=5;i++){
str = str + '<tr><td>' + i * 1 + '</td><td>' + i * 2 + '</td><td>' + i * 3 + '</td></tr>';
}
str=str +'</table>';	
document.getElementById('s1').innerHTML= str;
}*/