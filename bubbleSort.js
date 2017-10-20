$( document ).ready(function() {
	
	$('#clear, #sort').click(function(){
		if(!$(this).attr('disabled')){
			$('#clear, #sort').toggleClass('hide');
		}
	});
	
	$('#sort').click(function(){
		$('#bubbleInput').attr('disabled','disabled')
        animationCoords = [];
        animationIndex = 0;
		iteration = [];
		iterationIndex = 0;
        setIds();
		for(var i = 1; i < farr.length; i++){
			for(var j = 0; j < farr.length-i; j++){			
				if(farr[j] > farr[j+1]){					
					var p = farr[j]
					farr[j] = farr[j+1]
					farr[j+1] = p
					animationCoords[animationIndex] = [j, j+1, 'replacement'];
					iteration[iterationIndex] = 'replacement';
				}else{
                    animationCoords[animationIndex] = [j, j+1, 'comparison'];
					iteration[iterationIndex] = 'comparison';
                }
                animationIndex++;
				iterationIndex++;
			}
            animationCoords[animationIndex] = [j, j, 'lastItem'];
            animationIndex++;
		}
        animationCoords[animationIndex] = [0, 0, 'lastItem'];
		initiateProgressBar();
		animation(0)
	});
	
	$('#clear').click(function(){
		$('#bubbleInput').val('').removeAttr('disabled');
		$('.bubble').remove();
		$('.progress-bar-warning, .progress-bar-danger').css('width','0%').attr('data-fill',0);
	});
	
});

function setIds(){
    farr = [];
	$('.bubble').each(function(index){
		farr[index] = $(this).html();
		var margin = index * 40;
		$(this).css('margin-left',margin + 'px').attr('id', 'bubble' + index);
	});
}

function resetBubbls(){
    $('.bubble').each(function(index){
        var margin = index * 40;
        $(this).css('margin-left',margin + 'px').attr('id', 'bubble' + index).html(farr[index]);
    });
}

function initiateProgressBar(){
	procent = 100 / iteration.length;
}

function updateProgressBar(type){
	switch(type) {
        case 'replacement': 
			var success = parseFloat($('.progress-bar-danger').attr('data-fill'))+parseFloat(procent);
            $('.progress-bar-danger').css('width',success+'%').attr('data-fill',success);
        break;
        case 'comparison':
            var success = parseFloat($('.progress-bar-warning').attr('data-fill'))+parseFloat(procent);
            $('.progress-bar-warning').css('width',success+'%').attr('data-fill',success);
        break;
    }    
}