(function() {

  var app = angular.module("bookViewer", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/author/:authorname", {
        templateUrl: "author.html",
        controller: "AuthorController"
      })
      .when("/subject/:subject", {
        templateUrl: "subject.html",
        controller: "SubjectController"
      })
      .when("/title/:title", {
        templateUrl: "title.html",
        controller: "TitleController"
      })
      .when("/isbn/:isbn", {
        templateUrl: "isbn.html",
        controller: "IsbnController"
      })
      .otherwise({
        redirectTo: "/main"
      });
  });

}());