function calculateArea(){
	var r1=document.getElementById('rad1').value;
	var r2=document.getElementById('rad2').value;
	var h=document.getElementById('heigh1').value;
	var Area = 2 * parseFloat(3.14) * parseInt(r1)* h;
	var Volume = parseFloat(3.14) *  parseInt(r1) *  parseInt(r2) * h;
	if(	r2 == ""|| r2== null )
	{
		document.getElementById('res1').value = Area;
	}
	else{
		document.getElementById('res2').value = Volume;
	}

}