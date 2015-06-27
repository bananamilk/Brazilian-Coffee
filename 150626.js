window.onload = function(){
	var pic = document.getElementById('pic');
	var interval = 3000;

	function play(){
		if(parseInt(pic.style.left) <= -3000){
			pic.style.left = -600 + 'px';
		}
		var timer = setTimeout(function() {
			pic.style.left = -600 + parseInt(pic.style.left) + 'px';
			play();
		}, interval);
	}

	play();
}