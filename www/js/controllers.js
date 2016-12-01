angular.module('starter.controllers', [])



  .controller('productsCtrl', function ($scope, catgs, $ionicSlideBoxDelegate, $window, $ionicGesture) {
    //this array  control the loading  of pages  so if the corresponding key of a slide is 'true', angular can load it's content'
    $scope.ready = [];
    $scope.catgs = catgs.all();



    $scope.$on("$ionicView.afterEnter", function (event, data) {

      //initialisation of ready array to false
        angular.forEach($scope.catgs, function (value, key)
        {
          //make sure to let the first slide be loaded by giving 'true' to his corresponding key in ready array
          if(key===0)
          {
            $scope.ready.push(0 + ': ' + true);
          }
          //To stop loading other slides (pages) make sure to give 'false' to ther corresponding key in ready array
            $scope.ready.push(key + ': ' + false);
        });
    });


    $scope.changeSlide = function (index) 
    {
      //when slide is active : let angular to load it's content 
      $scope.ready.push(index + ': ' + true);
    };


  })

  .controller('homeCtrl', function ($scope) {



  })
  ;