(function() {

  var app = angular.module("bookViewer");

  var MainController = function($scope, $location) {
    if (!$scope.filter) {
      $scope.filter = "Author";
    }

    $scope.search = function(query) {
      switch ($scope.filter) {
        case "Author":
          $location.path("/author/" + query);
          break;
        case "Subject":
          $location.path("/subject/" + query);
          break;
        case "Title":
          $location.path("/title/" + query);
          break;
        case "Isbn":
          $location.path("/isbn/" + query);
          break;
        default:
          $location.path("/main")
      }


    };

  };
  app.controller("MainController", MainController);

}());