(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .factory('UsersService', UsersService);

    /** @ngInject */
    function UsersService($http,$filter) {

		var getUsers = function(){
	    	var url = 'https://api.github.com/users';
	    	return $http.get(url);
		};
		var getUser = function(key,usersdata){
			// return $filter('filter')(usersdata ,key)[0];
			var url = 'https://api.github.com/users/'+key;
	    	return $http.get(url);
		};
		var loadMore = function(page){
			console.log(page);
			var url = 'https://api.github.com/users?per_page='+(page*30);
	    	return $http.get(url);
		}
		return {getUsers: getUsers,
				getUser: getUser,
				loadMore:loadMore};
	}
})();
