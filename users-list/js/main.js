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
                    url: 'users/add',
                    templateUrl: 'templates/modal.html'
                })
                .state('users.edit', {
                    url: 'users/edit',
                    templateUrl: 'templates/modal.html'
                })

            $urlRouterProvider.otherwise('/users');
        }
    ])



.run(function($rootScope, $http) {
    $rootScope.pos = {};
    $rootScope.users = [];

    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(function(response) {
        $rootScope.users = response.data;
    });

    getLocation();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {

                $rootScope.pos.lat = position.coords.latitude;
                $rootScope.pos.lng = position.coords.longitude;
            }, function(error) {
                console.log("error ", error);

            });
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
        .controller('mainController', mainController);

    mainController.inject = [''];

    function mainController() {
        var vm = this


    }
})();
;
(function() {
    'use strict';

    angular
        .module('users')
        .controller('usersController', usersController);

    usersController.inject = ['$http', '$rootScope', 'distance', '$state'];

    function usersController($http, $rootScope, distance, $state) {
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
            }
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
        .factory('users', users);

    users.inject = ['$http'];

    function users($http) {
        var service = {};

        // service.filterOrederBy = function(column, orderBy, reverse) {
        //     if (this.orderBy === column) {
        //         this.reverse = !this.reverse;
        //     } else {
        //         this.orderBy = column;
        //     }
        // }
        // service.remove = function(index) {
        //     this.users.splice(index, 1)
        // }
        return service;
    }
})();
(function() {
    'use strict';

    angular
        .module('users')
        .factory('distance', distance);

    distance.inject = ['$rootScope'];

    function distance($rootScope) {
        var service = {
            calculate: calculate
        };

        return service;

        function calculate(lat1, lon1) {

            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * $rootScope.pos.lat / 180;
            var theta = lon1 - $rootScope.pos.lng;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            dist = dist.toFixed(0);
            if (dist > 0) return dist;
            else return '';
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

    repeatEnd.inject = ['$timout'];

    function repeatEnd($timeout) {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            if (scope.$last) {
                $timeout(function() {
                    // alert('users viewd');
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