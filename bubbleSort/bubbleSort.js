$( document ).ready(function() {
	farr = [];
	iteration = 0;
	step = 0;
	animationCoords = [];
	animationIndex = 0;
	setIds();
	$('#sort').click(function(){		
		for(var i = 0; i < farr.length; i++){
			for(var j = 0; j < farr.length; j++){				
				if(farr[j] > farr[j+1]){					
					var p = farr[j]
					farr[j] = farr[j+1]
					farr[j+1] = p
					animationCoords[animationIndex] = [j, j+1]
					animationIndex++;
				}
			}
		}
		animation(0)
	});
});

function setIds(){
	$('.bubble').each(function(index){
		farr[index] = $(this).html();
		var margin = index * 40;
		$(this).css('margin-left',margin + 'px')
		$(this).attr('id', 'bubble' + index)
	});
}