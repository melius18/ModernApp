var app=angular.module("app",[]);angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(s,t){s.addPost=function(){s.postBody&&t.create({username:"rcode",body:s.postBody}).success(function(t){s.posts.unshift(t),s.postBody=null})},t.fetch().success(function(t){s.posts=t})}]),angular.module("app").service("PostsSvc",["$http",function(s){this.fetch=function(){return s.get("/api/posts")},this.create=function(t){return s.post("/api/posts",t)}}]);