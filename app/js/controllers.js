'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function () {

  } ])
  .controller('MyCtrl2', [function () {

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

function productSubCategoryController($scope, $http, $routeParams, $location) {
    $scope.productSubCatogeries = [];

    $http.get("http://localhost:53583/api/productsubcategory?productcategoryid=" + $routeParams.id).then(
        function (result) {
            //success
            angular.copy(result.data, $scope.productSubCatogeries);
        },
        function () {
            //error
            alert("Could not load Product Sub Categories");
        }
    );

    $scope.go = function (path) {
        $location.path(path);
    };
}

function productController($scope, $http, $routeParams) {
    $scope.products = [];

    $http.get("http://localhost:53583/api/product?productSubCategoryID=" + $routeParams.productSubcategoryID).then(
        function (result) {
            //success
            angular.copy(result.data, $scope.products);
        },
        function () {
            //error
            alert("Could not load Products");
        }
    );
}