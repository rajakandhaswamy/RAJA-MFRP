var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../homepage.html"
    })
    .when("/page2", {
        templateUrl : "../page2.html"
    })
    .when("/page3", {
        templateUrl : "page3.html"
    })
    .when("/page4", {
        templateUrl : "page4.html"
    });
});