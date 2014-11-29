(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../modules/example":3}],2:[function(require,module,exports){
module.exports = ['$scope',function Ctrl($scope){

    console.log('example ctrl');
    $scope.model = 'mega cos';

}];
},{}],3:[function(require,module,exports){
module.exports = function(app){

    app.config(['$stateProvider', function($stateProvider){

        $stateProvider
            .state('example',{
                url: '/',
                templateUrl: 'src/modules/example/index.html',
                controller: require('./example.ctrl.js')
            })

    }])
};
},{"./example.ctrl.js":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL2luZGV4LmpzIiwic3JjL21vZHVsZXMvZXhhbXBsZS9leGFtcGxlLmN0cmwuanMiLCJzcmMvbW9kdWxlcy9leGFtcGxlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYnJvd3NlcmlmeVRlc3QnLCBbXG4gICAgJ25nQW5pbWF0ZScsXG4gICAgJ25nQ29va2llcycsXG4gICAgJ25nVG91Y2gnLFxuICAgICduZ1Nhbml0aXplJyxcbiAgICAncmVzdGFuZ3VsYXInLFxuICAgICd1aS5yb3V0ZXInXG5cbl0pLmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufSk7XG5cbnJlcXVpcmUoJy4uL21vZHVsZXMvZXhhbXBsZScpKGFwcCk7IiwibW9kdWxlLmV4cG9ydHMgPSBbJyRzY29wZScsZnVuY3Rpb24gQ3RybCgkc2NvcGUpe1xuXG4gICAgY29uc29sZS5sb2coJ2V4YW1wbGUgY3RybCcpO1xuICAgICRzY29wZS5tb2RlbCA9ICdtZWdhIGNvcyc7XG5cbn1dOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKXtcblxuICAgIGFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKXtcblxuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdleGFtcGxlJyx7XG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbW9kdWxlcy9leGFtcGxlL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IHJlcXVpcmUoJy4vZXhhbXBsZS5jdHJsLmpzJylcbiAgICAgICAgICAgIH0pXG5cbiAgICB9XSlcbn07Il19
