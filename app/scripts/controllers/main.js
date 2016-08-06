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
/* drivers controller*/
.controller('driversController',
    function($scope,ergastAPIservice){
    //Search function, called in main.html view
    $scope.nameFilter = null;
    $scope.driversList = [];
    //Search driver by first and familyname
    $scope.searchFilter = function (driver) {
    //Throw nameFilter into search filter
    var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || keyword.test(driver.Driver.givenName)
      || keyword.test(driver.Driver.familyName);
    };
    //Get data
    ergastAPIservice.getDrivers().success(
      function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
})
/*A driver controller*/
.controller('driverController',
  function($scope,$routeParams,ergastAPIservice){
    //GET somthing from model to be shown on html file
    $scope.id=$routeParams.id;
    $scope.races=[];
    //controlled by user input
    $scope.driver=null;
    //GET Data from services
    ergastAPIservice.getDriverRaces($scope.id).success(
      function(response){
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });
    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races;
    });
});
