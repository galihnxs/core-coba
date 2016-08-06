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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'driversController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
