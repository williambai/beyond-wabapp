angular.module('BeyondApp.controllers.Attendance',[])

.controller('ApplyController',['$scope','$http','$location',function($scope,$http,$location){
	$scope.days = 9;
	$scope.submit = function(){
		$http.get('/').success(function(data){
			$location.path('manage');
		});
	};
}])
.controller('ManageController',['$scope','$http',function($scope,$http){
	$scope.messages = 10;
	$scope.items = 
	[
		{
			type: '未处理请假',
			status: '待审批',
			startTime: '2015-01-12',
			endTime: '2015-01-13',
			reason: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled specimen book.',
			color: 'primary',
		},
		{
			type: '已审批请假',
			status: '已审批',
			startTime: '2015-01-12',
			endTime: '2015-01-21',
			reason: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled specimen book.',
			color: 'default',
		},
		{
			type: '已审批请假',
			status: '已审批',
			startTime: '2015-01-14',
			endTime: '2015-01-21',
			reason: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled specimen book.',
			color: 'default',
		},
	];

	$scope.audit = function(){
		alert('ok');
	}

}]);