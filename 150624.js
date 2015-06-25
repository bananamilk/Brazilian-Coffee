window.onload = function(){
	var content=document.getElementById('content');
	var pic=document.getElementById('pic');
	var but=document.getElementById('but').getElementsByTagName('span');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');

	var left = parseInt(pic.style.left);

	next.onclick = function(){
		if (parseInt(pic.style.left) <= -3000) { /*无限滚动*/
			pic.style.left = -600 + 'px';
			return;
		};
		
		pic.style.left = parseInt(pic.style.left) -600 + 'px';
	}
	prev.onclick = function(){
		if (parseInt(pic.style.left) >= -600) { /*无限滚动*/
			pic.style.left = -3000 + 'px';
			return;
		};
		pic.style.left = parseInt(pic.style.left) +600 + 'px';
	}
}