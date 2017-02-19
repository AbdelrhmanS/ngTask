(function() {
    'use strict';

    angular
        .module('GithubUsers')
        .factory('UsersService', UsersService);

    /** @ngInject */
    function UsersService($http) {

		var getUsers = function(){
	    	var url = 'https://api.github.com/users';
	    	return $http.get(url);
		};
		var getUser = function(key){
			var url = 'https://api.github.com/users/'+key;
	    	return $http.get(url);
		};
		var loadMore = function(page){
			var url = 'https://api.github.com/users?per_page='+(page*10);
	    	return $http.get(url);
		};
		return {getUsers: getUsers,
				getUser: getUser,
				loadMore:loadMore};
	}
})();
