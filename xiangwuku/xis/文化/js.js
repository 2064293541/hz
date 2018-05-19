var index=0;
var speed=500;
var w=$('.Broadcast-content').width();
var t=null;

var speed1=1000;
var first=$('.Broadcast-imgs').find('li').first();
var last=$('.Broadcast-imgs').find('li').last();
$('.Broadcast-imgs').append(first.clone());
$('.Broadcast-imgs').prepend(last.clone());
var n=$('.Broadcast-imgs').find('li').size();

$('.Broadcast-imgs').width(w*n).css('left',-(index+1)*w+'px');

function move(){
	$('.Broadcast-imgs').animate({
		left: -(index+1)*w+'px'
	},speed,function(){
		if($('.Broadcast-imgs').css('left')=='-'+w*(n-1)+'px'){
			$('.Broadcast-imgs').css('left','-'+w+'px');
		}
		if($('.Broadcast-imgs').css('left')=='0px'){
			$('.Broadcast-imgs').css('left','-'+w*(n-2)+'px');
		}
	});
	if(index==n-2){
				index=0;
		}
	if(index==-1){
				index=n-3;
		}
}

$('#zuo').click(function() {
				index--;
				move();
			});
			
$('#you').click(function(){
				index++;
				move();
});
$('.Broadcast-content').hover(function(){
				clearInterval(t);
			},function() {
				t=setInterval("$('#you').click()",speed1);
			});
			
$('.Broadcast-content').mouseout();