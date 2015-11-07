'use strict';

/**
 * @ngdoc function
 * @name jetblueApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the jetblueApp
 */
angular.module('jetblueApp')
  .controller('LoginCtrl', '$http', '$scope', function ($http, $scope) {
    $scope.register = function(email, password){
    	$http({
    		'method': 'POST',
    		'url': 'http://172.26.10.41:5000/api/register',
    		'header': 'apllication/json',
    		'data': {e: email,
    				p: password}
    	}).then(function successCallback(response){
    		console.log(response);
    	}, function errorCallback(response){
    		console.log(response);
    	});
    };
  });