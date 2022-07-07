function calculateArea(){
	var a1=document.getElementById('area1').value;
	var Area =parseInt(a1)*  parseInt(a1);
	var Perimeter = 4 *  parseInt(a1);
		document.getElementById('area3').value = Perimeter;
		document.getElementById('area4').value = Area;

}