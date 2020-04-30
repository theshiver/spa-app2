'use strict';

angular
    .module('exampleApp2')
    .component('page2', {
        templateUrl: () => window.accountSettingsBaseDir + 'views/page2b.html',
        controller: ['$scope', function ($scope) {
            $scope.title = "Page2 scope";
            $scope.head = "AngularJS APP #2";
        }]
    })
