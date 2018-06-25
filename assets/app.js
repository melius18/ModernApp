var app = angular.module('app', []);

app.service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/posts');
    }

    this.create = function (post) {
        return $http.post('/api/posts', post);
    }
});

app.controller('PostsCtrl', function ($scope, PostsSvc) {

    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'rcode',
                body: $scope.postBody
            }).success(function (post) {
                $scope.posts.unshift(post);
                $scope.postBody = null;
            });
        }
    }

    // $scope.posts = [];
    PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts;
    });
});