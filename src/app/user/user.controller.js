(function() {
    'use strict';

    angular
        .module('GithubUsers')
        .controller('UserController', UserController);

    /** @ngInject */
    function UserController($stateParams,$scope,userData) {
    	console.log($scope);
    	console.log(userData);
    	$scope.user = userData.data;
    	// $stateParams.contactId ;

    }
})();