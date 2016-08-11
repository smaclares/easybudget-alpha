var app = angular.module('easyBudget', []);

app.controller('budgetViewCtrl', function($scope){

  $scope.init = function(){
    $scope.message = "Please enter either a deposit or expenditure to get started.";
    $scope.balance = "$0.00";
  }

  $scope.init();



});

app.controller('budgetDashboardCtrl', function($scope){

  $scope.init = function(){
    $scope.highestExpenditure = "$0.00";
  }

  $scope.init();

});
