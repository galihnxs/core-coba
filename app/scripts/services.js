'use strict';
//this will be used to connect to
//ergastAPI
angular.module('coreCobaApp.services',[]).
  factory('ergastAPIservice',function($http){
      var ergastAPI={};
      //GET list of driver in 2013 seasons
      ergastAPI.getDrivers = function(){
        return $http({
            method:'JSONP',
            url:'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
          });
      }
      //GET details of a driver by it's ID
      ergastAPI.getDriverDetails = function(id){
        return $http({
          method: 'JSONP',
          url:'http://ergast.comapi/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
        });
      }
      //GET details of a driver in a race by it's ID
      ergastAPI.getDriverRaces = function(id){
        return $http({
          method: 'JSONP',
          url: 'http://ergast.com/api/f1/2013/drivers/'+ id+'results.json?callback=JSON_CALLBACK'
        });
      }
      return ergastAPI;
  });
