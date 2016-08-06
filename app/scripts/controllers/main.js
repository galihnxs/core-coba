'use strict';

/**
 * @ngdoc function
 * @name coreCobaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coreCobaApp
 */
angular.module('coreCobaApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
angular.module('coreCobaApp')
.controller('driversController',function($scope,ergastAPIservice){
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
    //Throw nameFilter into search filter
    var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || keyword.test(driver.Driver.givenName)
      || keyword.test(driver.Driver.familyName);
    };
    ergastAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
});
