(function() {

  // Tell angular which module you want to add something to (the 'soundCloudDownloaderApp' module)
  angular.module('soundCloudDownloaderApp')

    // Let's add a controller
    .controller('HomeController', HomeController);

    function HomeController($scope) {
      $scope.message = "Hello! Let's get started";
    }

}());