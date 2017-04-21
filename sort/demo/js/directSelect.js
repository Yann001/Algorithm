var directSelect = function(arr) {
	var len = arr.length;	
	for (var i = 0; i < len; i++) {
		for(var j = i; j < len; j++) {			
			if(arr[j] < arr[i]) {
				arr[i] = [arr[j], arr[j] = arr[i]][0];
			}
		}
	}
	return arr;
}
//export {directSelect};