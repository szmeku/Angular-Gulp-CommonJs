'use strict';

// todo: write it better
window._ = require('lodash'); 

require('angular');
require('angular-animate');
require('angular-cookies');
require('angular-touch');
require('angular-sanitize');
require('restangular'); 
require('angular-ui-router');

var app = angular.module('browserifyTest', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });

require('../modules/example')(app);