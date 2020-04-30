'use strict';

angular
    .module('exampleApp2')
    .component('page1', {
        // templateUrl: () => window.accountSettingsBaseDir + 'views/page11.html',
        templateUrl: function () {
            return window.accountSettingsBaseDir + 'views/page1b.html'
        },
        controller: ['$scope', function ($scope) {
            $scope.title = "Page1 scope";
            $scope.head = "AngularJS APP #2";
        }]
    })
