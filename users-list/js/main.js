/*! ngclipboard - v1.1.1 - 2016-02-26
* https://github.com/sachinchoolur/ngclipboard
* Copyright (c) 2016 Sachin; Licensed MIT */
!function(){"use strict";var a,b,c="ngclipboard";"object"==typeof module&&module.exports?(a=require("angular"),b=require("clipboard"),module.exports=c):(a=window.angular,b=window.Clipboard),a.module(c,[]).directive("ngclipboard",function(){return{restrict:"A",scope:{ngclipboardSuccess:"&",ngclipboardError:"&"},link:function(a,c){var d=new b(c[0]);d.on("success",function(b){a.$apply(function(){a.ngclipboardSuccess({e:b})})}),d.on("error",function(b){a.$apply(function(){a.ngclipboardError({e:b})})})}}})}();
var users = angular.module('users', [
        'ui.router',
        'ngStorage',
        'ngclipboard'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'templates/users.html',
                    controller: 'usersController as users'
                })
                .state('users.add', {
                    url: '/add',
                    templateUrl: 'templates/modal.html'
                })
                .state('users.edit', {
                    url: '/edit',
                    templateUrl: 'templates/modal.html'
                })

            $urlRouterProvider.otherwise('/users');
        }
    ])



.run(function($rootScope, $http, $localStorage) {
    $localStorage.pos = {};
    $rootScope.users = [];

    getLocation();
    getUsers();

    function getUsers() {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(function(response) {
            $rootScope.users = response.data;
        });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $localStorage.pos.lat = position.coords.latitude;
                $localStorage.pos.lng = position.coords.longitude;
                getUsers();
            })
        } else {
            alert("Geolocation is not supported");
        }
    }

});
;
(function() {
    'use strict';

    angular
        .module('users')
        .controller('usersController', usersController);

    usersController.inject = ['$http', '$rootScope', 'distance', '$state', '$timeout'];

    function usersController($http, $rootScope, distance, $state, $timeout) {
        var vm = this;
        var root = $rootScope;

        vm.modal = {};
        vm.distance = distance.calculate;

        vm.remove = function(index) {
            root.users.splice(index, 1)
        }

        vm.edit = function(user) {
            root.user = user;
            showModal();
            $state.go('users.edit');
            vm.modal.btnText = "Edit User"
        }

        vm.editSave = function() {
            var index = root.user.id;
            root.users[index - 1] = root.user;
            vm.modal.active = false;
            $state.go('users');
        }

        vm.addNewUser = function() {
            root.user = _.cloneDeepWith(root.users[0], function(v) {
                if (!_.isObject(v)) {
                    return v = "";
                }
            })
            root.user.id = root.users.length + 1;
            showModal();
            $state.go('users.add');
            vm.modal.btnText = "Add User"
        }

        vm.hideModal = function(e) {
            if (!e) return;
            var target = angular.element(e.target);
            if (target.hasClass('modal-wrap') || target.hasClass('close') || e.keyCode === 27) {
                vm.modal.active = false;
                $state.go('users');
            }
        }
        vm.showCopiedLabel = function(user) {
            user.showEmailCopied = true;
            $timeout(function() {
                user.showEmailCopied = false;
            }, 1000)
        }

        function showModal() {
            vm.modal.active = true;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('users')
        .controller('sortController', sortController);

    sortController.inject = [''];

    function sortController() {
        var vm = this;
        vm.orderBy = 'name';
        vm.reverse = false;



        vm.filterOrderBy = function(column) {
            if (vm.orderBy === column) {
                vm.reverse = !vm.reverse;
            } else {
                vm.orderBy = column;
            }
        }

        vm.sortIconClass = function(col) {
            if (vm.orderBy === col && !vm.reverse) {
                return 'down active'
            } else if (vm.orderBy === col && vm.reverse) {
                return 'up active'
            } else {
                return 'down'
            }
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('users')
        .factory('distance', distance);

    distance.inject = ['$localStorage'];

    function distance($localStorage) {
        // console.log("$localStorage ", $localStorage.pos);
        var service = {
            calculate: calculate
        };

        return service;

        function calculate(lat1, lon1) {
            if (!$localStorage.pos.lat && !$localStorage.pos.lng) return;
            if (!lat1 || !lon1) return " ";

            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * $localStorage.pos.lat / 180;
            var theta = lon1 - $localStorage.pos.lng;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            dist = dist.toFixed(0);
            return dist;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('users')
        .filter('columnFilter', columnFilter);

    function columnFilter() {
        return function(items, search) {
            if (!search) return items;

            var pattern = new RegExp(search, 'i'),
                filtered = [];

            items.forEach(function(item) {
                if (pattern.test(item.name) ||
                    pattern.test(item.username) ||
                    pattern.test(item.email)) {
                    filtered.push(item);
                }
            })
            return filtered;
        }
    }
})();
;
(function() {
    'use strict';

    angular
        .module('users')
        .directive('repeatEnd', repeatEnd);

    repeatEnd.inject = ['$timout', '$sessionStorage'];

    function repeatEnd($timeout, $sessionStorage) {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            if (scope.$last && !$sessionStorage.usersReady) {
                $timeout(function() {
                    alert('Users are shown');
                    $sessionStorage.usersReady = true;
                });
            }
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('users')
        .directive('validate', validate);

    validate.inject = ['$rootScope', '$state'];

    function validate($rootScope, $state) {
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'A',
            scope: {
                validate: '@'
            }
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            ctrl.$validators.validate = function(modelValue) {
                var isValid = true;
                if ($state.current.name === 'users.edit') return true;
                $rootScope.users.forEach(function(user, index) {
                    // console.log("$rootScope.user ", $rootScope.user.id);
                    var comparedStr = attrs['validate'] === 'company.name' ? user.company.name : user[attrs['validate']];
                    if (comparedStr === modelValue) {
                        console.log("user.id ", user.id);
                        isValid = false;
                        return;
                    }
                });

                return isValid;
            }
        }
    }
})();