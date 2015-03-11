// #=> 這是宣告一個 angular app
var cofitApp = angular.module('cofitApp', []);

// #=> 這些是定義根目錄(otherwise 都回到這裡)
cofitApp.config(['$routeProvider',
 function($routeProvider) {
   $routeProvider.otherwise({
      templateUrl: '../templates/home.html',
      controller: 'MainCtrl'
     });
 }]);


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
