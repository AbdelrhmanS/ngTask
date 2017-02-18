// (function() {
//     'use strict';



// 	describe('Test User Controller', function() {
//  	  beforeEach(angular.mock.module('GithubUsers'));

// 		var scope = {};
// 		var ctrl ;
// 		var usersData={};
// 		var $httpBackend={};
// 		beforeEach(inject(function($injector){
// 			$httpBackend = $injector.get('$httpBackend');
// 			usersData = $injector.get('usersData');
// 			// usersData = usersData;
// 			// $httpBackend = _$httpBackend_;
// 		}))
// 		it('test for UsersData' ,function(){
// 			var response  =[] ;
// 			$httpBackend.when('GET', 'https://api.github.com/users?per_page=1')
//       			.respond(200);
//       		console.log(usersData);
//       		console.log($httpBackend);
      		 
// 		      	console.log(usersData );
// 		        response = usersData ;
		     


// 		    expect(response).not.toBeDefined();

// 		})
// 		// beforeEach(inject(function($controller){
// 		// 	ctrl = $controller('UsersController',{$scope:scope,usersData : usersData});
// 		// }));

// 		// it('Check for Users Obj is defined',function(){
// 		// 	console.log(scope);
// 		// 	console.log(usersData);

// 		// 	expect(scope.users).toBeDefined();
// 		// })

// 	})

// })();





// (function() {
//     'use strict';

//     var ctrl;
//     var scope;
//     var usersData ;
//     var usersService;
// 	describe('Test Users Controller', function() {

// 		beforeEach(module('GithubUsers'));
// 		// beforeEach(angular.mock.inject(function(usersData){
// 		// 	usersData=usersData;
// 		// }));
// 		beforeEach(inject(function($controller,$rootScope){
// 			scope = $rootScope.$new();
// 			ctrl = $controller('UsersController', {
//                 '$scope': scope,
//                 'usersData':usersData
//             });
// 		}));
// 		it('Check for Users Obj is defined',function(){
// 			console.log(ctrl);
// 			console.log(scope);
// 			console.log(usersData);
// 			console.log($controller)
// 			expect(scope.users).toBeDefined();
// 		})
// 	})

// })();