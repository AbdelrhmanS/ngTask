(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('UsersController', UsersController);

    /** @ngInject */
    function UsersController(usersData,$scope) {
    	$scope.users = usersData.data;
    }
})();