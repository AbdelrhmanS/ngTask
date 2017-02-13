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
                        return UsersService.getUsers();
                    }
                }
            })
            .state('users.user', {
                url: '/user-:slug',
                templateUrl: 'app/user/user.html',
                controller: 'UserController',
                resolve:{
                    usersData:function($stateParams){
                       console.log($stateParams);
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