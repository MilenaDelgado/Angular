(function() {
    'use strict';

var book = {
"year":     "1967",
"name":     "Cien Años de Soledad",
"autor":    "Gabriel Garcia Marquez",
"descripcion":    "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982.",
"price": 5,

};

   var app = angular.module('AngularApp', []);
   app.controller('BooksController', function($scope){
       this.book = book;
       $scope.msg = 'Este campo es obligatorio';
   });

})();