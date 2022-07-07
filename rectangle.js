function calculateArea(){
	var length = document.getElementById('len').value;
	var width = document.getElementById('wid').value;
	var Area = parseInt(length) *  parseInt(width);
	var Perimeter = 2 * (parseInt(length)+ parseInt(width));
		document.getElementById('perrec').value = Perimeter;
		document.getElementById('arerec').value = Area;
}