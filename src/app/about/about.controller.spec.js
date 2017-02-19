(function() {
    'use strict';

    describe('controllers', function() {

        beforeEach(module('GithubUsers'));

        it('about controller is defined', inject(function($controller) {
            var vm = $controller('AboutController');

            expect(vm).toBeDefined();
        }));
    });
})();