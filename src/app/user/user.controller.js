(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('UserController', UserController);

    /** @ngInject */
    function UserController($stateParams,$scope) {
    	console.log($scope);
    	// $stateParams.contactId ;

    }
})();