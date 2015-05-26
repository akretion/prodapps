'use strict';

angular.module('prodapps')
.controller('LoginCtrl', function ($scope,$state, jsonRpc, prodooConfig) {
    $scope.login = function () {
        $scope.error = "";
        jsonRpc.login(prodooConfig.db,$scope.bucheUsername,$scope.buchePassword).then(function () {
            console.log('login succeed');
            $state.go('main.home');
        }, function () {
            $scope.error = "Authentication failed";
        });
    };
    $scope.logout = function () {
        console.log('logout');
        jsonRpc.logout(true);
        $state.go('login');
    };
    $scope.logout();
});
