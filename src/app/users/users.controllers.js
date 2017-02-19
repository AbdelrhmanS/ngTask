(function() {
    'use strict';

    angular
        .module('GithubUsers')
        .controller('UsersController', UsersController);

    /** @ngInject */
    function UsersController(usersData ,UsersService ,$scope,$state,$stateParams) {
    	$scope.users = usersData.data;
    	$scope.page = 1;
    	if($state.params.slug == null ){
			$state.go('users.user',{slug : $scope.users[0].login});
		}

    	$scope.loadMore = function(){
    		$scope.page++;
    		UsersService.loadMore($scope.page).success(function(response){
    			$scope.users=response;
    			usersData.data = response;
    		});

    	}
    }
})();