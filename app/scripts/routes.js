angular.module('exampleApp2').config(function ($stateProvider, $locationProvider, $urlMatcherFactoryProvider) {
    'use strict';

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
    });

    // Url sonlarindaki / isaretinin olmamasi durumunda calismasini saglayan kural
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
        .state({
            name: 'page1',
            url: '/page1',
            template: '<page1></page1>'
        })
        .state({
            name: 'page2',
            url: '/page2',
            template: '<page2></page2>'
        })
});
