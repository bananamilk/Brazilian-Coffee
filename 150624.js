window.onload = function(){
	var content=document.getElementById('content');
	var pic=document.getElementById('pic');
	var but=document.getElementById('but').getElementsByTagName('span');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');

	var left = parseInt(pic.style.left);
	var index = 1; /*打组合拳的时候用*/

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
		pic.style.left = parseInt(pic.style.left) -600 + 'px';
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
		pic.style.left = parseInt(pic.style.left) +600 + 'px';
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
}