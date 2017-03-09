'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.showContent = false;
  	$scope.showDiv = function(){
  		$scope.showContent = true;
  	}
  	$scope.showCostIdInfo = false;
  	$scope.showInfo = function(){
  		$scope.showCostIdInfo = true;
  	}
  	$scope.hideInfo = function(){
  		$scope.showCostIdInfo = false;
  	}
  	$scope.hideDiv = function(){
  		$scope.showContent = false;
  	}

  });
