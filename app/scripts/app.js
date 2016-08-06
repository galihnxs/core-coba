'use strict';

/**
 * @ngdoc overview
 * @name coreCobaApp
 * @description
 * # coreCobaApp
 *
 * Main module of the application.
 */
angular
  .module('coreCobaApp', [
    'ngRoute', 'coreCobaApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // Show main page
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'driversController',
        controllerAs: 'main'
      })
      //Show about page
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      //Show a driver details
        .when('/driver/:id',{
          templateUrl:'views/driver.html',
          controller: 'driverController'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
