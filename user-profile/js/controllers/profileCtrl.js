;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('profileController', profileController);

    profileController.inject = ['$sessionStorage'];

    function profileController($sessionStorage) {
        var vm = this;
        vm.user = $sessionStorage.user



    }
})();