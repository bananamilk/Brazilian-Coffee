window.onload = function(){
	var content = document.getElementById('content');
	var pic = document.getElementById('pic');
	var but = document.getElementById('but').getElementsByTagName('span');
	var con = document.getElementById('con');
	var dt = con.getElementsByTagName('dt');
	var dl = con.getElementsByTagName('dl');
	var index = 5;
	var interval = 1000;
	var timer;
	var coni = 0;

	function play(){
		if(parseInt(pic.style.left) < -3000){
			pic.style.left = -600 + 'px';
			coni = 0;
		}
		timer = setTimeout(function() {
			pic.style.left = -600 + parseInt(pic.style.left) + 'px';
			dt.style.top = -38 + parseInt(dt.style.top) + 'px';
			if(index == 1){
				index = 6;
			}
			index = index - 1;
			buton(index);
			play();
		}, interval);
	}
	function stop(){
		clearTimeout(timer);
	}

	play();
	content.onmouseover = stop;
	content.onmouseout = play;

	function buton(index){
		for (var i = 0; i < but.length; i++) {
			if (but[i].className == 'on') {
				but[i].className = '';
			}
		}
		but[index - 1].className = 'on';
	}	
}