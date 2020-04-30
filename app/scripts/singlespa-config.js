System.register([], function(_export, _context) {
    window.accountSettingsBaseDir = _context.meta.url.slice(0, _context.meta.url.lastIndexOf('/') + 1);

    return {
        execute() {
            // const link = document.createElement('link')
            // link.rel = 'stylesheet'
            // link.href = accountSettingsBaseDir + 'account-settings.css'
            // document.head.appendChild(link)

            angular.module('exampleApp2').config(['$sceDelegateProvider', function ($sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist([
                    'self',
                    'http://localhost:9008/**',
                    'http://localhost:9009/**',
                    window.accountSettingsBaseDir + '**',
                ]);
            }])

            const angularjsLifecycles = singleSpaAngularjs.default({
                angular: window.angular,
                mainAngularModule: 'exampleApp2',
                uiRouter: true,
                preserveGlobal: true
            });

            _export(angularjsLifecycles);
        }
    }
})
