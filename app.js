
  var app=angular.module("app",[]);
  app.controller("myController",function($scope){
  
  $scope.count=function(){

    var str = $scope.items.toString();
    str = str.split(",");
    if($scope.items.value==null){
        $scope.msg = "Please enter data first";
    }
    if(str.length<=3 && $scope.items.length!=0){
        $scope.msg = "Enjoy!";
    }
    if(str.length>3){
        $scope.msg = "Too much!";
    }


  } ;
  });
