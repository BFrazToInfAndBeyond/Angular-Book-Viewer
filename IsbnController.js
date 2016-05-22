(function(){
  
  var module = angular.module("bookViewer");
  
  var IsbnController = function($scope, $routeParams, bookApi, $window) {

    var onSuccess = function(data) {
      $scope.results = data;
    };

    var onError = function(reason) {
      $scope.error = reason;
    };

    $scope.redirectToMoreInfo = function (url) {
        $window.open(url, '_blank');
    };
    
    $scope.isbn = $routeParams.isbn;

    bookApi.getBookByIsbn($scope.isbn).then(onSuccess, onError);

  };

  module.controller("IsbnController", IsbnController);
  
}());