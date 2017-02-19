(function() {
    'use strict';

    angular
        .module('GithubUsers')
        .controller('UserController', UserController);

    /** @ngInject */
    function UserController($scope,userData) {
    	$scope.user = userData.data;
    	// $stateParams.contactId ;

    }
})();