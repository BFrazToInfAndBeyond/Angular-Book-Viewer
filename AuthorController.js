(function() {

  var module = angular.module("bookViewer");

  var AuthorController = function($scope, $routeParams, bookApi, $window) {

    var onSuccess = function(data) {
      $scope.results = data;
    };

    var onError = function(reason) {
      $scope.error = reason;
    };

    $scope.redirectToMoreInfo = function(url) {
      $window.open(url, '_blank');
    };

    $scope.authorname = $routeParams.authorname;

    bookApi.getBooksByAuthor($scope.authorname).then(onSuccess, onError);

  };

  module.controller("AuthorController", AuthorController);

}());