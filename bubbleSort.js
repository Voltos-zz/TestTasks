$( document ).ready(function() {
    setIds();
	$('#sort').click(function(){	
        animationCoords = [];
        animationIndex = 0;
        setIds();
		for(var i = 1; i < farr.length; i++){
			for(var j = 0; j < farr.length-i; j++){				
				if(farr[j] > farr[j+1]){					
					var p = farr[j]
					farr[j] = farr[j+1]
					farr[j+1] = p
					animationCoords[animationIndex] = [j, j+1, 'replacement']
				}else{
                    animationCoords[animationIndex] = [j, j+1, 'other']
                }
                animationIndex++;
			}
		}
		animation(0)
	});
});

function setIds(){
    farr = [];
	$('.bubble').each(function(index){
		farr[index] = $(this).html();
		var margin = index * 40;
		$(this).css('margin-left',margin + 'px').attr('id', 'bubble' + index)
	});
}