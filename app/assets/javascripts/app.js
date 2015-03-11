'use strict';

/* App Module */

//create a new angular app
//var cofitApp = angular.module('cofitApp', []);
var cofitApp = angular.module('cofitApp', [
  'ui.router',
  'CofitController'
]);

//
cofitApp.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'CofitController'
    });

  $urlRouterProvider.otherwise('home');
}]);

cofitApp.state('posts', {
  url: '/posts/{id}',
  templateUrl: '/posts.html',
  controller: 'PostsCtrl'
});

cofitApp.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };

}]);

cofitApp.factory('posts', function(){
  var o = {
    posts: []
  };
  return o;
});

// var confitApp = angular.module('cofit', []);
// angular.module('flapperNews', ['ui.router']);
//
// confitApp.factory('posts', [function($scope){
//   // service body
//
//   $scope.post = "Hello World"
//
//   var o = {
//     posts: []
//   };
//
//   return o;
// }]);


// confitApp.controller('MainCtrl', function($scope) {
//   $scope.test = 'Hello world!';
//   $scope.posts = [
//     'post 1',
//     'post 2',
//     'post 3',
//     'post 4',
//     'post 5'
//   ];
//
// });
