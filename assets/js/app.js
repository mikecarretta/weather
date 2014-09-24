(function(){
  angular.module('forecastApp', [])
  // AngularJS Controller
  // =========================================================================
  .controller('locationController', function($scope, wundergroundFactory) {
    $scope.location = "06615";

    wundergroundFactory.api().success(function(data) {
      // console.log(data.forecast.simpleforecast.forecastday);
      var currentDay = data.forecast.simpleforecast.forecastday[0];
      $scope.forecastWeekDay = currentDay.date.weekday_short;
      $scope.forecastMonth = currentDay.date.monthname_short;
      $scope.forecastDay = currentDay.date.day;
      $scope.forecastYear = currentDay.date.year;
      $scope.forecastHigh = currentDay.high.fahrenheit;
      $scope.forecastLow = currentDay.low.fahrenheit;
      $scope.forecastIcon = currentDay.icon;

      $scope.forecastData = data.forecast.simpleforecast.forecastday;
    }).error(function(data, status) {
      $scope.alert = {
        message: "Awe! Snap, could not connect to wunderground.com. Status: " + status,
        type: "danger"
      };
    });
  })
  // AngularJS Directive
  // =========================================================================
  .directive('today', function() {
    return {
      restrict: "AE",
      templateUrl: "partials/today.html"
    }
  })
  .directive('forecast', function() {
    return {
      restrict: "AE",
      templateUrl: "partials/forecast.html"
    }
  })
  .directive('alert', function() {
    return {
      restrict: "AE",
      templateUrl: "partials/alert.html",
      transclude: true,
      replace: true,
      scope: {
        type: "@"
      }
    };
  })
  // AngularJS Factory
  // =========================================================================
  .factory('wundergroundFactory', function($http){
    return {
      api: function() {
        return $http({
          // url: "assets/js/06615.json",
          url: "http://api.wunderground.com/api/dc78f7e3ed16d1b7/forecast/q/06615.json"
        });
      }
    };
  })

})();

/* Backstretch */
(function(){
  $.backstretch("assets/bkg-images/night1.jpg");
})();
/* =========================================================================
  * API URL
  http://api.wunderground.com/api/dc78f7e3ed16d1b7/forecast/q/06615.json

  * JSON reponse
  forecast.simpleforecast.forecastday.
    date.
      monthname_short
      weekday_short
      day
      month
      year
      yday
    conditions
    icon
    high.fahrenheit
    low.fahrenheit
========================================================================= */