(function() {

  // Tell angular which module you want to add something to (the 'soundCloudDownloaderApp' module)
  angular.module('soundCloudDownloaderApp')

    // Let's add another controller
    .controller('SearchController', SearchController)
    .controller('SearchResultsController', SearchResultsController)

    // We inject the $location service so that we can use it to route
    function SearchController($scope, $location) {
      $scope.mySearch = "";
      $scope.title = "Search For A Track";

      $scope.search = function() {
        var url = '/search/' + $scope.mySearch;
        $location.path(url);
      };
    }

    function SearchResultsController($scope, $routeParams, soundCloud) {
      $scope.query = $routeParams.query;
      $scope.tracks = [];

      // Initial Search
      soundCloud.search($scope.query)
        .then(function(results) {
          $scope.tracks = results.data;
          console.log($scope.tracks);
          
          // // Group into threes
          // while(results.data.length !== 0) {
          //   $scope.tracks.push(results.data.splice(0, 3));
          // }

        });

    }

}());