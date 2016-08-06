'use strict';
//this will be used to connect to
//ergastAPI
angular.module('coreCobaApp.services',[]).
  factory('ergastAPIservice',function($http){
      var ergastAPI={};
      ergastAPI.getDrivers = function(){
        return $http({
            method:'JSONP',
            url:'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
          });
      }
      return ergastAPI;
  });
