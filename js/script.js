
/**
 * Main AngularJS Web Application
 */
var portfolio = angular.module('portfolio', ['ngRoute']);

/**
 * Configure the Routes
 */
portfolio.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pages/summary.html", controller: "PageCtrl"})
    // Pages
    .when("/summary", {templateUrl: "pages/summary.html", controller: "PageCtrl"})
    .when("/experience", {templateUrl: "pages/experience.html", controller: "PageCtrl"})
    .when("/projects", {templateUrl: "pages/projects.html", controller: "PageCtrl"})
    .when("/skills", {templateUrl: "pages/skills.html", controller: "PageCtrl"})
    .when("/education", {templateUrl: "pages/education.html", controller: "PageCtrl"})
    .when("/awards", {templateUrl: "pages/awards.html", controller: "PageCtrl"})
    }]);


/**
 * Controls all other Pages
 */
portfolio.controller('PageCtrl', function (/* $scope */) {
  console.log("PageCtrl active");
});
