function calculateArea(){
	var a1=document.getElementById('area1').value;
	var a2=document.getElementById('area2').value;
	var Area =parseInt(a1)*  parseInt(a2);
	var Perimeter = 4 *  parseInt(a1);
	if(	a2 == ""|| a2== null )
	{
		document.getElementById('area3').value = Perimeter;
	}
	else{
		document.getElementById('area4').value = Area;
	}

}