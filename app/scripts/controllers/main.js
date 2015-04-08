'use strict';

/**
 * @ngdoc function
 * @name multiAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multiAppApp
 */
angular.module('multiAppApp')
  .controller('MultiplicationCtrl', function ($scope, $attrs) {
	$scope.numberLimit = $attrs.initialNumberLimit || 10;

    $scope.numbers = function(){
    	var numbers =[];
    	for(var i=0;i<$scope.numberLimit; i++){
    		numbers[i]=i+1;
    	}
    	return numbers;
    };

    $scope.compute = function(a,b){
    	return a*b;
    };
  });
