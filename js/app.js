/**
 * Created by donkey on 2015/1/27.
 */

//给"ng-app"启动点定义名称叫"App",并写入他的依赖对应的模块,赋值给App变量
var App = angular.module('App',[
	'AppController',
    'AppDirctive',
	'ui.router',
	//'ui.bootstrap'
]);



//设置路由
App.config(function ($stateProvider,$urlRouterProvider) {
	$urlRouterProvider
		//.when('', '/index')
		//.when('/index?id', '/index/:id')
		.otherwise('/index/hello');
	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'tpls/tab.html',
			data: {pageTitle: 'index'}
		})
		.state('index.hello',{
			url:'/hello',
			templateUrl:'tpls/hello.html',
			data: {pageTitle: 'HELLO'},
			controller: 'helloNgCtrl'
		})
		.state('index.list',{
			url:'/list',
			templateUrl:'tpls/list.html',
			data: {pageTitle: 'LIST'},
			controller: 'list'
		})
		.state('index.list2',{
			url:'/list2?pid',
			templateUrl:'tpls/inner.html',
			controller: function($scope, $stateParams) {
				$scope.listId = $stateParams.listId;
			},
			data: {pageTitle: 'inner'}
		})
        .state('index.scope',{
            url:'/scope',
            templateUrl:'tpls/ng-isolate-scope.html',
            data: {pageTitle: 'index'}
        })
        .state('index.game',{
            url:'/game',
            templateUrl:'tpls/game.html',
            data: {pageTitle: 'index'}
        });
});


/* 方便获得当前状态的方法，绑到根作用域 */
App.run(["$rootScope","$state",'$stateParams',
	function($rootScope,$state,$stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}

]);