function calculateArea(){
	var r1=document.getElementById('rad').value;
	var h=document.getElementById('heigh1').value;
	var Area = 2 * parseFloat(3.14) * parseInt(r1)* h + 2 * parseFloat(3.14) * parseInt(r1) * parseInt(r1) ;
	var Volume = parseFloat(3.14) *  parseInt(r1) *  parseInt(r1) * h;
		document.getElementById('res1').value = Area;
		document.getElementById('res2').value = Volume;
}
