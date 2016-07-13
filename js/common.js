$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		ballrotateY: 0
	};
	// render();
	function render(){
		o.ballrotateY+=1;
		if(o.ballrotateY >360) o.ballrotateY = 1;
		$('.ball .bg').css('transform','rotateY('+o.ballrotateY+'deg)');
		setTimeout(function(){
			render();
		},33);
	}
	
})//ready end  
































































































