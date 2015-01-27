/*function HelloAngular($scope) {
	$scope.greeting = {
		text: 'hello'
	};
}*/


var helloModule = angular.module('HelloAngular', []);  //定义一个名字叫"HelloAngular"模块,并赋值给变量"helloModule"

//helloNgCtrl控制器
helloModule.controller('helloNgCtrl', ['$scope', function($scope){    //给此模块添加一个名字叫"helloNgCtrl"的控制器
	$scope.greeting = { // 通过$scope传递参数给控制器
		text: 'Hello'
	};
}]);

//list控制器
helloModule.controller('list',['$scope',function ($scope) {
	$scope.listData = [
		{title:"《Ext江湖》",author:"大漠穷秋"},
		{title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
		{title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
	]
}]);

//切换标签
helloModule.controller('switchTab',['$scope',function ($scope) {
	$scope.activeIt = function () {
		$scope.isAct = true;
	}
}]);