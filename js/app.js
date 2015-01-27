/**
 * Created by donkey on 2015/1/27.
 */

//给"ng-app"启动点定义名称叫"App",并写入他的依赖对应的模块,赋值给App变量
var App = angular.module('App',[
	'HelloAngular',
	'ui.router',
	//'ui.bootstrap'
]);


//设置路由
App.config(function ($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'tpls/hello.html',
			data: {pageTitle: 'HELLO'},
			controller: 'helloNgCtrl'
		})
		.state('list',{
			url:'/list',
			templateUrl:'tpls/list.html',
			data: {pageTitle: 'LIST'},
			controller: 'list'
		});

});


/* Init global settings and run the app */
App.run(["$rootScope","$state", function($rootScope,$state) {
	$rootScope.$state = $state; // state to be accessed from view
}]);