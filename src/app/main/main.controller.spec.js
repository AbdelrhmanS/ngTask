(function() {
    'use strict';

    describe('controllers', function() {

        beforeEach(module('GithubUsers'));

        it('main controller is defined', inject(function($controller) {
            var vm = $controller('MainController');

            expect(vm).toBeDefined();
        }));
    });
})();