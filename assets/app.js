var app=angular.module("app",[]);angular.module("app").controller("PostsCtrl",function(o,t){o.addPost=function(){o.postBody&&t.create({username:"rcode",body:o.postBody}).success(function(t){o.posts.unshift(t),o.postBody=null})},t.fetch().success(function(t){o.posts=t})}),angular.module("app").service("PostsSvc",function(o){this.fetch=function(){return o.get("/api/posts")},this.create=function(t){return o.post("/api/posts",t)}});