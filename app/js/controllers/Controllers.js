/**
 * Created by sunnymistry on 1/11/16.
 */
"use strict";

var swolecietyControllers = angular.module('SwolecietyControllers', []);


swolecietyControllers.controller('MainController', ['$scope', 'Exercise',
    function ($scope, Exercise) {
        $scope.exercises = Exercise.query();
    }
     ]);
