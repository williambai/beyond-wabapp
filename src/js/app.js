angular.module('BeyondApp', [
  'ngRoute',
  'mobile-angular-ui',
  'BeyondApp.controllers.Main'
])

.config(['$routeProvider','$locationProvider',function($routeProvider,$location) {
  $routeProvider.when('/', {templateUrl: 'apply.html', reloadOnSearch: false});
  $routeProvider.when('/apply', {templateUrl: 'apply.html', reloadOnSearch: false});
  $routeProvider.when('/manage', {templateUrl: 'manage.html', reloadOnSearch: false});
  $routeProvider.when('/record', {templateUrl: 'record.html', reloadOnSearch: false});
}]);