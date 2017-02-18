// (function() {
//     'use strict';



// 	describe('Users Service', function() {
// 	  var Users ;
// 	  var data ;
// 	  var $httpBackend ;
// 	  var UsersService ;
// 	  // Load our api.users module
// 	  beforeEach(angular.mock.module('GithubUsers'));

// 	  // Set our injected Users factory (_Users_) to our local Users variable
// 	  beforeEach(inject(function($injector ) {
// 	  	$httpBackend = $injector.get('$httpBackend');
// 	  	UsersService = $injector.get('UsersService');
// 	    Users = UsersService;
// 	    Users.getUsers().then(function(resp){
// 			data = resp;
// 			console.log(UsersService);
// 			// console.log(data);

// 		});
// 	  }));
// 		// beforeEach(inject(function($injector){
// // 			$httpBackend = $injector.get('$httpBackend');
// // 			usersData = $injector.get('usersData');
// // 			// usersData = usersData;
// // 			// $httpBackend = _$httpBackend_;
// // 		}))
// // $httpBackend.when('GET', 'https://api.github.com/users?per_page=1')
// //       			.respond(200);
// //       		console.log(usersData);
// //       		console.log($httpBackend);
// 	  // A simple test to verify the Users service exists
// 	  it('Users.loadMore()).toHaveBeenCalledWith(1)', function() {
// 		// console.log(Users.getUsers().data);
// 			console.log(Users);
// 		$httpBackend.when('GET', 'https://api.github.com/users?per_page=1').respond(function(status, data, headers, statusText){
// 			console.log(data)
// 			console.log(status)
// 			console.log(header)
// 			return [200, data, {}];
//  		});
// 			console.log(data)
// 			console.log(Users.getUsers().success(function(res){
// 				console.log(res)
// 			}));

// 	    expect(Users.getUsers()).toBeDefined();
// 	    // expect(Users.loadMore()).toHaveBeenCalledWith(1);
// 	  });

// 	  it('LoadMore with page 1 == getUsers', function() {
// 	    expect(Users.loadMore().data).toEqual(Users.getUsers().data);
// 	  });
// 	  // A set of tests for our Users.all() method
// 	  describe('.getUser()', function() {
// 	    // A simple test to verify the method all exists
// 	    it('should exist', function() {
// 	      expect(Users.getUser()).toBeDefined();
// 	    });
// 	  });
// 	});


  // })();

// (function() {
//     'use strict';
//     var users = [
//     {
//     	login:'aa',
//     	name:'AA'
//     },
//     {
//     	login:'qq',
//     	name :'QQ'
//     }];
//     var $httpBackend;
//     var UsersService;
// 	beforeEach(inject(function($injector){
// 				$httpBackend = $injector.get('$httpBackend');
// 				UsersService = $injector.get('UsersService');
// 				// usersData = usersData;
// 				// $httpBackend = _$httpBackend_;
// 			}))
// 	it('should get login success',function(){

// 	    $httpBackend.when('GET', 'https://api.github.com/users?per_page=1').respond({'data': users});
// 		console.log(UsersService);
// 	    UsersService.getUsers()
// 	      .then(function(data) {
// 	      	console.log(data);
// 	        expect(data).toBeTruthy();
// 	    });

// 	  	$httpBackend.flush();
// 		})

//   } ) ();







(function() {
    'use strict';

	describe('Users Service Test', function() {
		var users = [
	      {
	        "login": "mojombo",
	        "id": 1,
	        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/mojombo",
	        "html_url": "https://github.com/mojombo",
	        "followers_url": "https://api.github.com/users/mojombo/followers",
	        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
	        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
	        "organizations_url": "https://api.github.com/users/mojombo/orgs",
	        "repos_url": "https://api.github.com/users/mojombo/repos",
	        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/mojombo/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "defunkt",
	        "id": 2,
	        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/defunkt",
	        "html_url": "https://github.com/defunkt",
	        "followers_url": "https://api.github.com/users/defunkt/followers",
	        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
	        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
	        "organizations_url": "https://api.github.com/users/defunkt/orgs",
	        "repos_url": "https://api.github.com/users/defunkt/repos",
	        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/defunkt/received_events",
	        "type": "User",
	        "site_admin": true
	      },
	      {
	        "login": "pjhyett",
	        "id": 3,
	        "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/pjhyett",
	        "html_url": "https://github.com/pjhyett",
	        "followers_url": "https://api.github.com/users/pjhyett/followers",
	        "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
	        "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
	        "organizations_url": "https://api.github.com/users/pjhyett/orgs",
	        "repos_url": "https://api.github.com/users/pjhyett/repos",
	        "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/pjhyett/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "wycats",
	        "id": 4,
	        "avatar_url": "https://avatars.githubusercontent.com/u/4?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/wycats",
	        "html_url": "https://github.com/wycats",
	        "followers_url": "https://api.github.com/users/wycats/followers",
	        "following_url": "https://api.github.com/users/wycats/following{/other_user}",
	        "gists_url": "https://api.github.com/users/wycats/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/wycats/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/wycats/subscriptions",
	        "organizations_url": "https://api.github.com/users/wycats/orgs",
	        "repos_url": "https://api.github.com/users/wycats/repos",
	        "events_url": "https://api.github.com/users/wycats/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/wycats/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "ezmobius",
	        "id": 5,
	        "avatar_url": "https://avatars.githubusercontent.com/u/5?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/ezmobius",
	        "html_url": "https://github.com/ezmobius",
	        "followers_url": "https://api.github.com/users/ezmobius/followers",
	        "following_url": "https://api.github.com/users/ezmobius/following{/other_user}",
	        "gists_url": "https://api.github.com/users/ezmobius/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/ezmobius/subscriptions",
	        "organizations_url": "https://api.github.com/users/ezmobius/orgs",
	        "repos_url": "https://api.github.com/users/ezmobius/repos",
	        "events_url": "https://api.github.com/users/ezmobius/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/ezmobius/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "ivey",
	        "id": 6,
	        "avatar_url": "https://avatars.githubusercontent.com/u/6?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/ivey",
	        "html_url": "https://github.com/ivey",
	        "followers_url": "https://api.github.com/users/ivey/followers",
	        "following_url": "https://api.github.com/users/ivey/following{/other_user}",
	        "gists_url": "https://api.github.com/users/ivey/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/ivey/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/ivey/subscriptions",
	        "organizations_url": "https://api.github.com/users/ivey/orgs",
	        "repos_url": "https://api.github.com/users/ivey/repos",
	        "events_url": "https://api.github.com/users/ivey/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/ivey/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "evanphx",
	        "id": 7,
	        "avatar_url": "https://avatars.githubusercontent.com/u/7?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/evanphx",
	        "html_url": "https://github.com/evanphx",
	        "followers_url": "https://api.github.com/users/evanphx/followers",
	        "following_url": "https://api.github.com/users/evanphx/following{/other_user}",
	        "gists_url": "https://api.github.com/users/evanphx/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/evanphx/subscriptions",
	        "organizations_url": "https://api.github.com/users/evanphx/orgs",
	        "repos_url": "https://api.github.com/users/evanphx/repos",
	        "events_url": "https://api.github.com/users/evanphx/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/evanphx/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "vanpelt",
	        "id": 17,
	        "avatar_url": "https://avatars.githubusercontent.com/u/17?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/vanpelt",
	        "html_url": "https://github.com/vanpelt",
	        "followers_url": "https://api.github.com/users/vanpelt/followers",
	        "following_url": "https://api.github.com/users/vanpelt/following{/other_user}",
	        "gists_url": "https://api.github.com/users/vanpelt/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/vanpelt/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/vanpelt/subscriptions",
	        "organizations_url": "https://api.github.com/users/vanpelt/orgs",
	        "repos_url": "https://api.github.com/users/vanpelt/repos",
	        "events_url": "https://api.github.com/users/vanpelt/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/vanpelt/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "wayneeseguin",
	        "id": 18,
	        "avatar_url": "https://avatars.githubusercontent.com/u/18?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/wayneeseguin",
	        "html_url": "https://github.com/wayneeseguin",
	        "followers_url": "https://api.github.com/users/wayneeseguin/followers",
	        "following_url": "https://api.github.com/users/wayneeseguin/following{/other_user}",
	        "gists_url": "https://api.github.com/users/wayneeseguin/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/wayneeseguin/subscriptions",
	        "organizations_url": "https://api.github.com/users/wayneeseguin/orgs",
	        "repos_url": "https://api.github.com/users/wayneeseguin/repos",
	        "events_url": "https://api.github.com/users/wayneeseguin/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/wayneeseguin/received_events",
	        "type": "User",
	        "site_admin": false
	      },
	      {
	        "login": "brynary",
	        "id": 19,
	        "avatar_url": "https://avatars.githubusercontent.com/u/19?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/brynary",
	        "html_url": "https://github.com/brynary",
	        "followers_url": "https://api.github.com/users/brynary/followers",
	        "following_url": "https://api.github.com/users/brynary/following{/other_user}",
	        "gists_url": "https://api.github.com/users/brynary/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/brynary/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/brynary/subscriptions",
	        "organizations_url": "https://api.github.com/users/brynary/orgs",
	        "repos_url": "https://api.github.com/users/brynary/repos",
	        "events_url": "https://api.github.com/users/brynary/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/brynary/received_events",
	        "type": "User",
	        "site_admin": false
	      }
	    ];
	    var Userspage2 = [
		  {
		    "login": "mojombo",
		    "id": 1,
		    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/mojombo",
		    "html_url": "https://github.com/mojombo",
		    "followers_url": "https://api.github.com/users/mojombo/followers",
		    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
		    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
		    "organizations_url": "https://api.github.com/users/mojombo/orgs",
		    "repos_url": "https://api.github.com/users/mojombo/repos",
		    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/mojombo/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "defunkt",
		    "id": 2,
		    "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/defunkt",
		    "html_url": "https://github.com/defunkt",
		    "followers_url": "https://api.github.com/users/defunkt/followers",
		    "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
		    "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
		    "organizations_url": "https://api.github.com/users/defunkt/orgs",
		    "repos_url": "https://api.github.com/users/defunkt/repos",
		    "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/defunkt/received_events",
		    "type": "User",
		    "site_admin": true
		  },
		  {
		    "login": "pjhyett",
		    "id": 3,
		    "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/pjhyett",
		    "html_url": "https://github.com/pjhyett",
		    "followers_url": "https://api.github.com/users/pjhyett/followers",
		    "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
		    "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
		    "organizations_url": "https://api.github.com/users/pjhyett/orgs",
		    "repos_url": "https://api.github.com/users/pjhyett/repos",
		    "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/pjhyett/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "wycats",
		    "id": 4,
		    "avatar_url": "https://avatars.githubusercontent.com/u/4?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/wycats",
		    "html_url": "https://github.com/wycats",
		    "followers_url": "https://api.github.com/users/wycats/followers",
		    "following_url": "https://api.github.com/users/wycats/following{/other_user}",
		    "gists_url": "https://api.github.com/users/wycats/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/wycats/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/wycats/subscriptions",
		    "organizations_url": "https://api.github.com/users/wycats/orgs",
		    "repos_url": "https://api.github.com/users/wycats/repos",
		    "events_url": "https://api.github.com/users/wycats/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/wycats/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "ezmobius",
		    "id": 5,
		    "avatar_url": "https://avatars.githubusercontent.com/u/5?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/ezmobius",
		    "html_url": "https://github.com/ezmobius",
		    "followers_url": "https://api.github.com/users/ezmobius/followers",
		    "following_url": "https://api.github.com/users/ezmobius/following{/other_user}",
		    "gists_url": "https://api.github.com/users/ezmobius/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/ezmobius/subscriptions",
		    "organizations_url": "https://api.github.com/users/ezmobius/orgs",
		    "repos_url": "https://api.github.com/users/ezmobius/repos",
		    "events_url": "https://api.github.com/users/ezmobius/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/ezmobius/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "ivey",
		    "id": 6,
		    "avatar_url": "https://avatars.githubusercontent.com/u/6?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/ivey",
		    "html_url": "https://github.com/ivey",
		    "followers_url": "https://api.github.com/users/ivey/followers",
		    "following_url": "https://api.github.com/users/ivey/following{/other_user}",
		    "gists_url": "https://api.github.com/users/ivey/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/ivey/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/ivey/subscriptions",
		    "organizations_url": "https://api.github.com/users/ivey/orgs",
		    "repos_url": "https://api.github.com/users/ivey/repos",
		    "events_url": "https://api.github.com/users/ivey/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/ivey/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "evanphx",
		    "id": 7,
		    "avatar_url": "https://avatars.githubusercontent.com/u/7?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/evanphx",
		    "html_url": "https://github.com/evanphx",
		    "followers_url": "https://api.github.com/users/evanphx/followers",
		    "following_url": "https://api.github.com/users/evanphx/following{/other_user}",
		    "gists_url": "https://api.github.com/users/evanphx/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/evanphx/subscriptions",
		    "organizations_url": "https://api.github.com/users/evanphx/orgs",
		    "repos_url": "https://api.github.com/users/evanphx/repos",
		    "events_url": "https://api.github.com/users/evanphx/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/evanphx/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "vanpelt",
		    "id": 17,
		    "avatar_url": "https://avatars.githubusercontent.com/u/17?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/vanpelt",
		    "html_url": "https://github.com/vanpelt",
		    "followers_url": "https://api.github.com/users/vanpelt/followers",
		    "following_url": "https://api.github.com/users/vanpelt/following{/other_user}",
		    "gists_url": "https://api.github.com/users/vanpelt/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/vanpelt/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/vanpelt/subscriptions",
		    "organizations_url": "https://api.github.com/users/vanpelt/orgs",
		    "repos_url": "https://api.github.com/users/vanpelt/repos",
		    "events_url": "https://api.github.com/users/vanpelt/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/vanpelt/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "wayneeseguin",
		    "id": 18,
		    "avatar_url": "https://avatars.githubusercontent.com/u/18?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/wayneeseguin",
		    "html_url": "https://github.com/wayneeseguin",
		    "followers_url": "https://api.github.com/users/wayneeseguin/followers",
		    "following_url": "https://api.github.com/users/wayneeseguin/following{/other_user}",
		    "gists_url": "https://api.github.com/users/wayneeseguin/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/wayneeseguin/subscriptions",
		    "organizations_url": "https://api.github.com/users/wayneeseguin/orgs",
		    "repos_url": "https://api.github.com/users/wayneeseguin/repos",
		    "events_url": "https://api.github.com/users/wayneeseguin/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/wayneeseguin/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "brynary",
		    "id": 19,
		    "avatar_url": "https://avatars.githubusercontent.com/u/19?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/brynary",
		    "html_url": "https://github.com/brynary",
		    "followers_url": "https://api.github.com/users/brynary/followers",
		    "following_url": "https://api.github.com/users/brynary/following{/other_user}",
		    "gists_url": "https://api.github.com/users/brynary/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/brynary/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/brynary/subscriptions",
		    "organizations_url": "https://api.github.com/users/brynary/orgs",
		    "repos_url": "https://api.github.com/users/brynary/repos",
		    "events_url": "https://api.github.com/users/brynary/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/brynary/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "kevinclark",
		    "id": 20,
		    "avatar_url": "https://avatars.githubusercontent.com/u/20?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/kevinclark",
		    "html_url": "https://github.com/kevinclark",
		    "followers_url": "https://api.github.com/users/kevinclark/followers",
		    "following_url": "https://api.github.com/users/kevinclark/following{/other_user}",
		    "gists_url": "https://api.github.com/users/kevinclark/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/kevinclark/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/kevinclark/subscriptions",
		    "organizations_url": "https://api.github.com/users/kevinclark/orgs",
		    "repos_url": "https://api.github.com/users/kevinclark/repos",
		    "events_url": "https://api.github.com/users/kevinclark/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/kevinclark/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "technoweenie",
		    "id": 21,
		    "avatar_url": "https://avatars.githubusercontent.com/u/21?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/technoweenie",
		    "html_url": "https://github.com/technoweenie",
		    "followers_url": "https://api.github.com/users/technoweenie/followers",
		    "following_url": "https://api.github.com/users/technoweenie/following{/other_user}",
		    "gists_url": "https://api.github.com/users/technoweenie/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/technoweenie/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/technoweenie/subscriptions",
		    "organizations_url": "https://api.github.com/users/technoweenie/orgs",
		    "repos_url": "https://api.github.com/users/technoweenie/repos",
		    "events_url": "https://api.github.com/users/technoweenie/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/technoweenie/received_events",
		    "type": "User",
		    "site_admin": true
		  },
		  {
		    "login": "macournoyer",
		    "id": 22,
		    "avatar_url": "https://avatars.githubusercontent.com/u/22?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/macournoyer",
		    "html_url": "https://github.com/macournoyer",
		    "followers_url": "https://api.github.com/users/macournoyer/followers",
		    "following_url": "https://api.github.com/users/macournoyer/following{/other_user}",
		    "gists_url": "https://api.github.com/users/macournoyer/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/macournoyer/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/macournoyer/subscriptions",
		    "organizations_url": "https://api.github.com/users/macournoyer/orgs",
		    "repos_url": "https://api.github.com/users/macournoyer/repos",
		    "events_url": "https://api.github.com/users/macournoyer/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/macournoyer/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "takeo",
		    "id": 23,
		    "avatar_url": "https://avatars.githubusercontent.com/u/23?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/takeo",
		    "html_url": "https://github.com/takeo",
		    "followers_url": "https://api.github.com/users/takeo/followers",
		    "following_url": "https://api.github.com/users/takeo/following{/other_user}",
		    "gists_url": "https://api.github.com/users/takeo/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/takeo/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/takeo/subscriptions",
		    "organizations_url": "https://api.github.com/users/takeo/orgs",
		    "repos_url": "https://api.github.com/users/takeo/repos",
		    "events_url": "https://api.github.com/users/takeo/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/takeo/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "Caged",
		    "id": 25,
		    "avatar_url": "https://avatars.githubusercontent.com/u/25?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/Caged",
		    "html_url": "https://github.com/Caged",
		    "followers_url": "https://api.github.com/users/Caged/followers",
		    "following_url": "https://api.github.com/users/Caged/following{/other_user}",
		    "gists_url": "https://api.github.com/users/Caged/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/Caged/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/Caged/subscriptions",
		    "organizations_url": "https://api.github.com/users/Caged/orgs",
		    "repos_url": "https://api.github.com/users/Caged/repos",
		    "events_url": "https://api.github.com/users/Caged/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/Caged/received_events",
		    "type": "User",
		    "site_admin": true
		  },
		  {
		    "login": "topfunky",
		    "id": 26,
		    "avatar_url": "https://avatars.githubusercontent.com/u/26?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/topfunky",
		    "html_url": "https://github.com/topfunky",
		    "followers_url": "https://api.github.com/users/topfunky/followers",
		    "following_url": "https://api.github.com/users/topfunky/following{/other_user}",
		    "gists_url": "https://api.github.com/users/topfunky/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/topfunky/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/topfunky/subscriptions",
		    "organizations_url": "https://api.github.com/users/topfunky/orgs",
		    "repos_url": "https://api.github.com/users/topfunky/repos",
		    "events_url": "https://api.github.com/users/topfunky/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/topfunky/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "anotherjesse",
		    "id": 27,
		    "avatar_url": "https://avatars.githubusercontent.com/u/27?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/anotherjesse",
		    "html_url": "https://github.com/anotherjesse",
		    "followers_url": "https://api.github.com/users/anotherjesse/followers",
		    "following_url": "https://api.github.com/users/anotherjesse/following{/other_user}",
		    "gists_url": "https://api.github.com/users/anotherjesse/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/anotherjesse/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/anotherjesse/subscriptions",
		    "organizations_url": "https://api.github.com/users/anotherjesse/orgs",
		    "repos_url": "https://api.github.com/users/anotherjesse/repos",
		    "events_url": "https://api.github.com/users/anotherjesse/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/anotherjesse/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "roland",
		    "id": 28,
		    "avatar_url": "https://avatars.githubusercontent.com/u/28?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/roland",
		    "html_url": "https://github.com/roland",
		    "followers_url": "https://api.github.com/users/roland/followers",
		    "following_url": "https://api.github.com/users/roland/following{/other_user}",
		    "gists_url": "https://api.github.com/users/roland/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/roland/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/roland/subscriptions",
		    "organizations_url": "https://api.github.com/users/roland/orgs",
		    "repos_url": "https://api.github.com/users/roland/repos",
		    "events_url": "https://api.github.com/users/roland/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/roland/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "lukas",
		    "id": 29,
		    "avatar_url": "https://avatars.githubusercontent.com/u/29?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/lukas",
		    "html_url": "https://github.com/lukas",
		    "followers_url": "https://api.github.com/users/lukas/followers",
		    "following_url": "https://api.github.com/users/lukas/following{/other_user}",
		    "gists_url": "https://api.github.com/users/lukas/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/lukas/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/lukas/subscriptions",
		    "organizations_url": "https://api.github.com/users/lukas/orgs",
		    "repos_url": "https://api.github.com/users/lukas/repos",
		    "events_url": "https://api.github.com/users/lukas/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/lukas/received_events",
		    "type": "User",
		    "site_admin": false
		  },
		  {
		    "login": "fanvsfan",
		    "id": 30,
		    "avatar_url": "https://avatars.githubusercontent.com/u/30?v=3",
		    "gravatar_id": "",
		    "url": "https://api.github.com/users/fanvsfan",
		    "html_url": "https://github.com/fanvsfan",
		    "followers_url": "https://api.github.com/users/fanvsfan/followers",
		    "following_url": "https://api.github.com/users/fanvsfan/following{/other_user}",
		    "gists_url": "https://api.github.com/users/fanvsfan/gists{/gist_id}",
		    "starred_url": "https://api.github.com/users/fanvsfan/starred{/owner}{/repo}",
		    "subscriptions_url": "https://api.github.com/users/fanvsfan/subscriptions",
		    "organizations_url": "https://api.github.com/users/fanvsfan/orgs",
		    "repos_url": "https://api.github.com/users/fanvsfan/repos",
		    "events_url": "https://api.github.com/users/fanvsfan/events{/privacy}",
		    "received_events_url": "https://api.github.com/users/fanvsfan/received_events",
		    "type": "User",
		    "site_admin": false
		  }
		];
		var UsersService ;
	    var $httpBackend ;
		beforeEach(module('GithubUsers'));

		beforeEach(inject(function(_UsersService_,_$httpBackend_) {
			UsersService = _UsersService_;
	        $httpBackend =_$httpBackend_;
		}));

		it('Test get Users using service ', function() {
	        var response ;
	        $httpBackend.when('GET','https://api.github.com/users?per_page=1')
	        .respond(200,users);
	        UsersService.getUsers()
	        .then(function(data){
	            response = data;
	            console.log(UsersService);
				expect(response).toEqual(users);
	        });

		});

		it('Test get User using UsersService ', function() {
	        var response ;
	        $httpBackend.when('GET','https://api.github.com/users/'+users[0].login)
	        .respond(200,users[0].login);
	        UsersService.getUser(users[0].login,users)
	        .then(function(data){
	            response = data;
	            console.log(UsersService);
				expect(response).toBe(users[0]);
	        });

		});

		it('Test Load more page 2 using UsersService ', function() {
	        var response ;
	        $httpBackend.when('GET','https://api.github.com/users?per_page=20')
	        .respond(200,Userspage2);
	        UsersService.getUser(2)
	        .then(function(data){
	            response = data;
	            console.log(UsersService);
				expect(response).toBe(Userspage2);
	        });

		});
	});
 } ) ();