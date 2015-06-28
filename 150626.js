window.onload = function(){
	var pic = document.getElementById('pic');
	var but = document.getElementById('but').getElementsByTagName('span');
	var index = 5;
	var interval = 1000;

	function play(){
		if(parseInt(pic.style.left) < -3000){
			pic.style.left = -600 + 'px';
		}
		var timer = setTimeout(function() {
			pic.style.left = -600 + parseInt(pic.style.left) + 'px';
			if(index == 1){
				index = 6;
			}
			index = index - 1;
			buton(index);
			play();
		}, interval);
	}

	play();

	function buton(index){
		for (var i = 0; i < but.length; i++) {
			if (but[i].className == 'on') {
				but[i].className = '';
			}
		}
		but[index - 1].className = 'on';
	}	
}