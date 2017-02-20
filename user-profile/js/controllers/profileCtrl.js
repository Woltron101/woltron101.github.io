;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('profileController', profileController);

    profileController.inject = ['$localStorage'];

    function profileController($localStorage) {
        var vm = this;
        vm.user = $localStorage.user



    }
})();