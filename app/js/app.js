'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/category/:id', { templateUrl: 'partials/subCategories.html', controller: 'productSubCategoryController' });
    $routeProvider.when('/subcategory/:productSubcategoryID/product', { templateUrl: 'partials/productList.html', controller: 'productController' });
    $routeProvider.otherwise({ redirectTo: '/view1' });
} ]);
