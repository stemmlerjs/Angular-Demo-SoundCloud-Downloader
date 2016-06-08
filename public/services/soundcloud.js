angular.module('soundCloudService', [])

  .factory('soundCloud', function($http) {
    var soundcloud = {};
    var clientID = "cb5e1e55f3ada1ff08c99ac65061413f";

    soundcloud.search = function(query) {
      return $http.get('http://api.soundcloud.com/tracks?client_id=' + clientID + "&q=" + query);
    };

    return soundcloud;

  });