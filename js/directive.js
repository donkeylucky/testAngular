/**
 * Created by donkey on 2015/2/16.
 */
var AppDir = angular.module('AppDirctive', []);

//独立作用域
AppDir.directive("isolate", function() {
    return {
        restrict: 'AE',
        scope:{}, //添加这个参数就可以设置独立作用域
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    }
});

//小游戏
AppDir.directive('superman', function () {
    return {
        restrict:'AE',
        scope:{},
        controller: function ($scope) {
            $scope.abi=[];
            this.addStrength = function () {
                $scope.abi.push('力量')
            };
            this.addSpeed = function () {
                $scope.abi.push('速度')
            };
            this.addFlash = function () {
                $scope.abi.push('闪光')
            };
        },
        link: function (scope, el, attr) {
            el.addClass('btn btn-warning');
            el.bind('click', function () {
                alert(scope.abi);
            });
        }
    }
});

AppDir.directive('strength', function () {
    return {
        require:'^superman',
        link: function (s,e,a,ctrl) {     //  link函数的的第四个参数就是将上面require的(依赖的)superman指令的controller放入次参数中
            ctrl.addStrength();
        }
    }
});
AppDir.directive('speed', function () {
    return {
        require:'^superman',
        link: function (s,e,a,ctrl) {
            ctrl.addSpeed();
        }
    }
});
AppDir.directive('flash', function () {
    return {
        require:'^superman',
        link: function (s,e,a,ctrl) {
            ctrl.addFlash();
        }
    }
});