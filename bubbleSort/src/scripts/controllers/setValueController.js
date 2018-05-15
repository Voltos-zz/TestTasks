app.controller("valueController", function($scope){
    $scope.numbers = [];
	
	$scope.toValues = function(numberString){
		for(var i = 0; i < 10; i++){
			$scope.numbers = numberString.split(',');
		}
	}
	
});