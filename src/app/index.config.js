(function() {
    'use strict';

    angular
        .module('GithubUsers')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);


    }

})();