(function(){
  
  var module = angular.module("bookViewer");
  
  
  var TitleController = function($scope, $routeParams, bookApi, $window) {

    var onSuccess = function(data) {
      $scope.results = data;
    };

    var onError = function(reason) {
      $scope.error = reason;
    };

    $scope.redirectToMoreInfo = function (url) {
        $window.open(url, '_blank');
    };
    
    $scope.title = $routeParams.title;

    bookApi.getBooksByTitle($scope.title).then(onSuccess, onError);

  };

  module.controller("TitleController", TitleController);

  
}());