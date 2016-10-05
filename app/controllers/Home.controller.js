angular
  .module('shoppingCart')
  .controller('HomeController', HomeController);

  function HomeController($scope, $state){
    $scope.name = "Andrew"
  }
