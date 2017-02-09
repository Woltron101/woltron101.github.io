;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('mainController', mainController);

    mainController.inject = ['$sessionStorage', '$state'];

    function mainController($sessionStorage, $state) {
        var vm = this;

        vm.logOut = function() {
            delete $sessionStorage.user;
            $state.go('login');
        }
    }
})();