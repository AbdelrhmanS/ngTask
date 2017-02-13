(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .factory('UsersService', UsersService);

    /** @ngInject */
    function UsersService($http) {

		var getUsers = function(){
	    	var url = 'https://api.github.com/users';
	    	return $http.get(url);
		};
		return {getUsers: getUsers};
	}
})();
