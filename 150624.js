window.onload = function(){
	var content=document.getElementById('content');
	var pic=document.getElementById('pic');
	var but=document.getElementById('but').getElementsByTagName('span');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');

	var left = parseInt(pic.style.left);

	next.onclick = function(){
		/*if (left > -600) {
			pic.style.left = -3000 + 'px';
		};*/
		pic.style.left = parseInt(pic.style.left) -600 + 'px';
	}
	prev.onclick = function(){
		/*if (left < -3000) {
			pic.style.left = -600 + 'px';
		};*/
		pic.style.left = parseInt(pic.style.left) -600 + 'px';
	}
}