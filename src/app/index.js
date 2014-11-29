'use strict';

require('angular');
require('angular-animate');
require('angular-cookies');
require('restangular');
require('angular-ui-router');

require('../modules/help');

angular.module('browserifyTest', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
