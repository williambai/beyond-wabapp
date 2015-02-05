angular.module('BeyondApp', [
  'ngRoute',
  'mobile-angular-ui',
  'BeyondApp.controllers.Main',
  'BeyondApp.controllers.Attendance',
  'BeyondApp.controllers.SideBarRight'
])

.config(['$routeProvider','$locationProvider',function($routeProvider,$location) {
  $routeProvider.when('/', {templateUrl: 'apply.html', reloadOnSearch: false});
  $routeProvider.when('/apply', {templateUrl: 'apply.html', reloadOnSearch: false});
  $routeProvider.when('/manage', {templateUrl: 'manage.html', reloadOnSearch: false});
  $routeProvider.when('/record', {templateUrl: 'record.html', reloadOnSearch: false});
}]);