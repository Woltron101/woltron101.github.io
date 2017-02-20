;
(function() {
    'use strict';

    angular
        .module('profile')
        .controller('editController', editController);

    editController.inject = ['$localStorage', '$FirebaseArray', '$firebaseObject', '$state'];

    function editController($localStorage, $FirebaseArray, $firebaseObject, $state) {
        var vm = this,
            ref = firebase.database().ref(),
            user = $firebaseObject(ref);
        vm.user = $localStorage.user;
        vm.phoneValidationPattern = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g
        vm.save = function() {
            user.$loaded().then(function() {
                $localStorage.user = vm.user;
                user.user = vm.user;
                user.$save().then(function() {
                    $state.go('profile');
                })
            });
        }
    }
})();