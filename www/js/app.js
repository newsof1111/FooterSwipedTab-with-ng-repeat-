
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider



  .state('products', {
      url: '/products',
      views: {
        '': {
          templateUrl: 'templates/products.html',
          controller: 'productsCtrl'
        }
      }
   
  })
  
  .state('home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
   
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
