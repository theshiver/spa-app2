'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'app/scripts/lib/single-spa.js',
                    'app/scripts/lib/single-spa-angular1.js',
                    'app/scripts/vendor/node_modules/angular/angular.min.js',
                    'app/scripts/vendor/node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'app/scripts/singlespa-config.js',
                    'app/scripts/app.js',
                    'app/scripts/routes.js',
                    'app/scripts/controllers/page1.js',
                    'app/scripts/controllers/page2.js',
                    'app/scripts/controllers/page3.js'
                ],
                dest: 'dist/app/bundle2.js',
            },
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    open: true,
                    debug: true,
                    port: 9008,
                    base: 'dist/app/',
                    middleware: function(connect, options, middlewares) {
                        var urlRewrite = require('./app/scripts/lib/url-rewrite');

                        middlewares.unshift(function(req, res, next) {
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            res.setHeader('Access-Control-Allow-Methods', '*');
                            next();
                        });

                        middlewares.push(urlRewrite(options.base));
                        return middlewares;
                    }
                }
            }
        },
        clean: [
            'app/scripts/vendor/node_modules',
            'app/dist'
        ],
        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['node_modules/**'],
                        dest: 'app/scripts/vendor',
                        filter: 'isFile'
                    }
                ],
            },
            htmlBuild: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: [
                            'app/**/*.html',
                            'app/**/*.css',
                        ],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ],
            },
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', [
        'clean',
        'copy',
        'concat',
        'connect:server'
    ]);
};
