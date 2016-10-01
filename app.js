
(function(){  var app=angular.module("app",[]);
  app.controller("myController",myController);
  myController.$inject=["$scope"];
  function myController($scope){
  $scope.items = "";
  $scope.msg = "";
  $scope.count=function(){

    var str = $scope.items.toString();
    str = str.split(",");
    if($scope.items.length==0){
        $scope.msg = "Please enter data first";
    }
    if(str.length<=3 && $scope.items.length!=0){
        $scope.msg = "Enjoy!";
    }
    if(str.length>3){
        $scope.msg = "Too much!";
    }


  } ;
  }
})();
