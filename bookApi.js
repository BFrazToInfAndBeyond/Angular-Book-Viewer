(function() {

  var bookApi = function($http) {

    var getBooksByTitle = function(title) {
      return $http.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + title)
        .then(function(response) {
          return response.data;
        });

    };

    var getBooksByAuthor = function(author) {
      return $http.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + author)
        .then(function(response) {
          return response.data;
        });
    };

    var getBooksBySubject = function(subject) {
      return $http.get("https://www.googleapis.com/books/v1/volumes?q=subject:" + subject)
        .then(function(response) {
          return response.data;
        });
    };

    var getBookByIsbn = function(isbn) {
      return $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn)
        .then(function(response) {
          return response.data;
        });

    };

    return {
      getBooksByTitle: getBooksByTitle,
      getBooksByAuthor: getBooksByAuthor,
      getBooksBySubject: getBooksBySubject,
      getBookByIsbn: getBookByIsbn
    };


  };

  var module = angular.module("bookViewer");
  module.factory("bookApi", bookApi);
}());