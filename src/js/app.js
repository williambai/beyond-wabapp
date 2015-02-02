angular.module('BeyondApp', [
  'ngRoute',
  'mobile-angular-ui',
  'BeyondApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'apply.html'});
  $routeProvider.when('/apply', {templateUrl: 'apply.html'});
  $routeProvider.when('/manage', {templateUrl: 'manage.html'});
  $routeProvider.when('/record', {templateUrl: 'record.html'});
});