window.onload = function(){
	var content=document.getElementById('content');
	var pic=document.getElementById('pic');
	var but=document.getElementById('but').getElementsByTagName('span');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');

	
	var index = 1; /*打组合拳的时候用*/
	var interval=3000;/*设置自动切图的时间*/

	next.onclick = function(){
		/*showButN();*/
		if(index == 5){
			index = 1;
		}
		else{
			index++;
		}
		showBut();
		if (parseInt(pic.style.left) <= -3000) { /*无限滚动*/
			pic.style.left = -600 + 'px';	
			return;
		};
		/*pic.style.left = parseInt(pic.style.left) -600 + 'px';*/
		animate(-600);
	}
	prev.onclick = function(){
		/*showButP();*/
		if(index == 1){
			index = 5;
		}
		else{
			index--;
		}
		showBut();
		if (parseInt(pic.style.left) >= -600) { /*无限滚动*/
			pic.style.left = -3000 + 'px';
			return;
		};
		/*pic.style.left = parseInt(pic.style.left) +600 + 'px';*/
		animate(600);
	}

/*箭头的组合拳*/
	function showBut(){
		for(var i = 0; i < but.length; i++){
			if(but[i].className == 'on'){
				but[i].className = '';
				break;
			}
		}
		but[index - 1].className = 'on';
	}

/*点击next时的逻辑*/
	/*function showButN(){
		var demo = parseInt(pic.style.left)/(-600);
		if (demo == 5) {
			but[demo-1].className = '';
			but[0].className = 'on';
			return;
		};
		but[demo].className = 'on';
		but[demo-1].className = '';
	}*/

/*点击prev时的逻辑*/
	/*function showButP(){
		var demo = parseInt(pic.style.left)/(-600);
		if (demo == 1) {
			but[4].className = 'on';
			but[demo-1].className = '';
			return;
		};
		but[demo-2].className = 'on';
		but[demo-1].className = '';
	}*/

/*自动播放图片*/
	function play(){
		timer = setTimeout(function(){
			next.onclick();
			play();
		}, interval);
	}

	function stop(){
		clearTimeout(timer);
	}
	play();

	content.onmouseover = stop;
	content.onmouseout = play;

	for(var i = 0; i < but.length; i++){
		but[i].onclick = function(){
			if(this.className == 'on'){
				return;
			}
			var nIndex = parseInt(this.getAttribute('index'));
			var offset = -600 * (nIndex - index);
			animate(offset);
			index = nIndex;
			showBut();
		}
	}

	function animate(offset){
		pic.style.left = parseInt(pic.style.left) + offset + 'px';
	}
}