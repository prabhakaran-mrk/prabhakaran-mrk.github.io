function sort(){
var textName = document.getElementById('name1').value;
var textName2 = document.getElementById('name2').value;
console.log(textName.length);
console.log(textName2.length);

if(textName2.length > textName.length){
 document.getElementById('name1').value = textName2;
 document.getElementById('name2').value = textName;
}
}

function sortAscending(){
var textName = document.getElementById('name1').value;
var textName2 = document.getElementById('name2').value;
console.log(textName.length);
console.log(textName2.length);

if(textName.length > textName2.length){
 document.getElementById('name1').value = textName2;
 document.getElementById('name2').value = textName;
}
}



