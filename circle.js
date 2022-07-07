function calculateArea(){
	var r1=document.getElementById('rad1').value;
	var r2=document.getElementById('rad2').value;
	var Area = parseFloat(3.14) * parseInt(r1)*  parseInt(r2);
	var Perimeter =2 * parseFloat(3.14) *  parseInt(r1);
	if(	r2 == ""|| r2== null )
	{
		document.getElementById('rad3').value = Perimeter;
	}
	else{
		document.getElementById('rad4').value = Area;
	}

}
