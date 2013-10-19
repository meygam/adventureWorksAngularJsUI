'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  } ]);

function productCategoryController($scope, $http) {
    $scope.productCatogeries = [];

    $http.get("http://localhost:53583/api/productcategory").then(
        function (result) {
            //success
            angular.copy(result.data, $scope.productCatogeries);
        },
        function () {
            //error
            alert("Could not load Product Categories");
        }
    );
  }