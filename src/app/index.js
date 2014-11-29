'use strict';

var app = angular.module('browserifyTest', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ui.router'

]).config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
});

require('../modules/example')(app);