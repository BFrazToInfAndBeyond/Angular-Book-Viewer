(function() {

  var module = angular.module("bookViewer");

  var SubjectController = function($scope, $routeParams, bookApi, $window) {

    var onSuccess = function(data) {
      $scope.results = data;
    };

    var onError = function(reason) {
      $scope.error = reason;

    };

    $scope.redirectToMoreInfo = function(url) {
      $window.open(url, '_blank');
    };

    $scope.subject = $routeParams.subject;

    bookApi.getBooksBySubject($scope.subject).then(onSuccess, onError);

  };

  module.controller("SubjectController", SubjectController);

}());