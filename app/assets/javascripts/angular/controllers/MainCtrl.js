var cofitControllers = angular.module('cofitControllers', []);

cofitControllers.controller('MainCtrl', [function($scope){
  $scope.posts = [
      'post 1',
      'post 2',
      'post 3',
      'post 4',
      'post 5'
    ];

  $scope.posts = posts.posts;
  $scope.foo = 'bar';

}]);
