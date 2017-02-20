  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyDMG5dVpO0NVzhlGiv8SqMJ60PjnhQuGsM",
      authDomain: "user-profile-ec577.firebaseapp.com",
      databaseURL: "https://user-profile-ec577.firebaseio.com",
      storageBucket: "user-profile-ec577.appspot.com",
      messagingSenderId: "475741952102"
  };
  firebase.initializeApp(config);


  var profile = angular.module('profile', [
      'ui.router',
      'ngStorage',
      'firebase'
  ])
  profile.config(($stateProvider, $urlRouterProvider) => {
      $stateProvider
          .state('profile', {
              url: '/profile',
              templateUrl: 'templates/profile.html',
              controller: 'profileController as profile'

          })
          .state('login', {
              url: '/login',
              templateUrl: 'templates/login.html',
              controller: 'loginController as login'
          })
          .state('edit', {
              url: '/edit',
              templateUrl: 'templates/edit.html',
              controller: 'editController as edit'
          });
      $urlRouterProvider.otherwise('/profile');
  })

  profile.run(($rootScope, $localStorage, $injector, $location) => {
      let $scope = $injector.get('$rootScope');

      $rootScope.$on('$stateChangeStart', () => {
          if (!$localStorage.user) {
              $location.path('/login')
          }
      });
  })