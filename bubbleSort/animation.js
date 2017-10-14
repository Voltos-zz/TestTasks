async function animation(step){
	var id1 = animationCoords[step][0]
	var id2 = animationCoords[step][1]
	$('#bubble'+id1+'').css('margin-top','10px')
	$('#bubble'+id2+'').css('margin-top','80px')
	setTimeout(function(){
		var margin = id2 * 40;
		$('#bubble'+id1+'').css('margin-left',margin + 'px')
		margin = id1 * 40;
		$('#bubble'+id2+'').css('margin-left',margin + 'px')
	}, 100)
	setTimeout(function(){
		var perem1 = $('#bubble'+id1+'')
		var perem2 = $('#bubble'+id2+'')
		perem1.css('margin-top','40px').attr('id','bubble'+id2+'')
		perem2.css('margin-top','40px').attr('id','bubble'+id1+'')
	}, 400)
	await sleep(1000);
	step++;
	if(step < animationCoords.length){
		animation(step)
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}