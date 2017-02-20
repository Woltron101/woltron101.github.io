;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('mainController', mainController);

    mainController.inject = ['$localStorage', '$state'];

    function mainController($localStorage, $state) {
        var vm = this;

        vm.logOut = function() {
            delete $localStorage.user;
            $state.go('login');
        }
    }
})();