(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                data: {
                pageTitle: "Home"
                },
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController'
            })
            .state('users', {
                data: {
                pageTitle: "Users"
                },
                url: '/users',
                templateUrl: 'app/users/users.html',
                controller: 'UsersController',
                resolve:{
                    usersData:function(UsersService){
                        return UsersService.loadMore(1);
                    }
                }
            })
            .state('users.user', {
                url: '/user-:slug',
                templateUrl: 'app/user/user.html',
                controller: 'UserController',
                resolve:{
                    userData:function($stateParams,UsersService,usersData){
                        // console.log($stateParams)
                       return UsersService.getUser($stateParams.slug,usersData.data);
                    }
                }
            })
            .state('about', {
                data: {
                pageTitle: "About"
                },
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutController'
            });

        $urlRouterProvider.otherwise('/');
    }

})();