angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {

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