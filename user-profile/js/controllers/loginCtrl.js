;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('loginController', loginController);

    loginController.inject = ['$state', '$sessionStorage', '$firebaseObject'];

    function loginController($state, $sessionStorage, $firebaseObject) {
        var vm = this,
            ref = firebase.database().ref(),
            user = $firebaseObject(ref);

        vm.logIn = function() {
            user.$loaded().then(function() {
                if (user.user.login == vm.login && user.user.password == vm.password) {
                    vm.user = user.user;
                    $sessionStorage.user = user.user;
                    $state.go('profile');
                } else {
                    alert('The username and password you have entered do not match our records')
                }
            });
        }
        vm.logginOnEnter = function(e) {
            if (e.keyCode == 13) {
                vm.logIn();
            }
        }
    }
})();