function calculateArea(){
	var r1=document.getElementById('rad1').value;	
	var Area = 3.14 * parseInt(r1)*  parseInt(r1);
	var Perimeter =2 * 3.14 *  parseInt(r1);
		document.getElementById('rad3').value = Perimeter;
		document.getElementById('rad4').value = Area;
}
