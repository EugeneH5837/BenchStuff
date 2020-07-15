function giveMeEms(pixels){
	var baseValue = 16;

	function doTheMath(){
		return pixels/baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);

console.log(smallSize());
console.log(mediumSize());
console.log(largeSize());
console.log(xLargeSize());