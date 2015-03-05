/*function HelloAngular($scope) {
	$scope.greeting = {
		text: 'hello'
	};
}*/


var AppCtrl = angular.module('AppController', []);  //定义一个名字叫"HelloAngular"模块,并赋值给变量"AppCtrl"

//自定义服务
AppCtrl.factory('myService', function () {
    return {
        gogo: function () {
            console.log('注入成功');
        }
    }

});

//helloNgCtrl控制器
AppCtrl.controller('helloNgCtrl', ['$scope','myService', function($scope,MYS){    //给此模块添加一个名字叫"helloNgCtrl"的控制器 ,并调用了一个名称为"myService"的公共服务函数 (内联式注入)
	$scope.greeting = { // 通过$scope传递参数给控制器
		text: 'Hello'
	};
    MYS.gogo(); //调用myService
}]);

//list控制器 同时使用第二种注入方式注入功能服务函数
AppCtrl.controller('list',['$scope','$injector',function ($scope,$injector) {
	$scope.listData = [
		{title:"《Ext江湖》",author:"大漠穷秋"},
		{title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
		{title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
	];
    //使用$injector注入公共服务函数
    $injector.invoke(function (myService) {
        myService.gogo();
    })
}]);

//切换标签
AppCtrl.controller('switchTab',['$scope','$http',function ($scope,$http) {
	$http({
		method: 'GET',
		url: '/angularJS/json/tabList.json'
	}).success(function(data, status) {
		$scope.tabs = data;
	}).error(function(data, status) {
		alert('出错了');
	});


    /*$scope.tabs = [{
        name:'hello',
        url:'hello'
    },{
        name:'list',
        url:'list'
    },{
	    name:'list2',
	    url:'list2',
	    id:'123'
    }];*/

   /* //设定默认的激活标签
    $scope.currentTab = '#/index';

    //获取当前点击的标签url并为重新赋值给currentTab
	$scope.getUrl = function (url) {
        $scope.currentTab = url;
	};

    //标签url与currentTab的url相同返回true
    $scope.isAct = function(url){
        return url === $scope.currentTab;
    };*/

}]);

//超人的小游戏
AppCtrl.controller('imgList',['$scope','$http','$timeout', function ($scope,$http,$timeout) {
    $scope.loadImg = function () {
        $http({
            method: 'GET',
            url: 'json/imgList.json'
        }).success(function(data, status) {
            $scope.listData = data;
        }).error(function(data, status) {
            alert('出错了');
        });
    };

    //时钟
    var updataClock = function (){
        $scope.clock = new Date();
        $timeout(function (){
            updataClock();
        },1000);
    };
    updataClock();

}]);

//异步加载
AppCtrl.directive('pic', function () {
    return {
        restrict:'AE',
        link: function (scope, el, attr) {
            el.addClass('btn');
            el.bind('click', function () {
                //scope.loadImg();
                //scope.$apply('loadImg()')
                //attr.loadImg();
                scope.$apply(attr.loadimg);
            });
        }
    }
});

//自定义过滤器
AppCtrl.filter('myFilter', function () {
    return function (n) {
           return '我被过滤了'
    }
});

