var flapperNews = angular.module('flapperNews', [
    'templates',
    'ui.router'
]);

////////////////////
// UI-ROUTING CONTROLLER
flapperNews.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {



        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/_home.html',
                controller: 'MainController',
                resolve: {
                    postPromise: ['posts', function(posts) {
                        return posts.getAll();
                    }]
                }
            })
            .state('posts', {
                url: '/posts/{id}',
                templateUrl: 'posts/_posts.html',
                controller: 'PostsController',
                resolve: {
                    post: ['$stateParams', 'posts', function($stateParams, posts) {
                        return posts.get($stateParams.id);
                    }]
                }
            })
            // .state('login', {
            //     url: '/login',
            //     templateUrl: 'auth/_login.html',
            //     controller: 'AuthCtrl',
            //     onEnter: ['$state', 'Auth', function($state, Auth) {
            //         Auth.currentUser().then(function() {
            //             $state.go('home');
            //         })
            //     }]
            // })
            // .state('register'ontroller
            //     url: '/register',
            //     templateUrl: 'auth/_register.html',
            //     controller: 'AuthCtrl',
            //     onEnter: ['$state', 'Auth', function($state, Auth) {
            //         Auth.currentUser().then(function() {
            //             $state.go('home');
            //         })
            //     }]
            // });

        $urlRouterProvider.otherwise('home');
    }
]);
