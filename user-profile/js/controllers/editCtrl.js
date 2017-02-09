;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('editController', editController);

    editController.inject = ['$sessionStorage', '$FirebaseArray', '$firebaseObject', '$state'];

    function editController($sessionStorage, $FirebaseArray, $firebaseObject, $state) {
        var vm = this;
        vm.user = $sessionStorage.user
        var ref = firebase.database().ref(),
            user = $firebaseObject(ref);

        vm.save = function() {
            user.$loaded().then(function() {
                $sessionStorage.user = vm.user;
                user.user = vm.user;
                user.$save().then(function() {
                    $state.go('profile');
                })
            });
        }
    }
})();