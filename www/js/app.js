(function() {
  'use strict';
  angular.module('centervue', [
    'ionic',
    'centervue.practice-profile',
    'NumberPickerWheelDirective'])

    .run(['$ionicPlatform', function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // iPad Landscape standard keyboard height
        ionic.keyboard.height = 395;
      });
    }])

    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('centervue', {
          url: '',
          abstract: true,
          template: '<ion-nav-view></ion-nav-view>'
        })

          // Each tab has its own nav history stack:

          .state('centervue.practice-profile', {
            url: '/practice-profile',
            templateUrl: 'templates/centervue-practice-profile.html',
            controller: 'PracticeProfileCtrl'
          });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/practice-profile');

      }]);
})();
