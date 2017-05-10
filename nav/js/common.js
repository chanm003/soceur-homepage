//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: '/nav/js/lib',
    paths: {
        app: '/nav/js/app',
        jquery: 'jquery.min',
        moment: 'moment.min',
        jstree: 'jstree/jstree.min',
        spServices: 'jquery.SPServices-2014.01.min'    },
    shim: {
    	jstree: {
    		deps: ['jquery']
    	},
    	spServices: {
    		deps: ['jquery']
    	},
        underscore: {
            exports: '_'
        }
    }
});
