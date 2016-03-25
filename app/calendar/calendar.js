(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarController',CalendarController);
    
    CalendarController.$inject = ['$firebaseArray', '$firebaseObject', 'FIREBASE_URL'];
    
    function CalendarController($firebaseArray, $firebaseObject, FIREBASE_URL) {
        var vm = this; 
        vm.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        vm.weeklyExercises = {};
        angular.forEach(vm.days, function(day) {
            vm.weeklyExercises[day] = [];
        });
            
        vm.loadExercisesForDay = function() {
            var ref = new Firebase(FIREBASE_URL).child('users').child('smistry').child('exercises').child('monday');
            var allExercises = $firebaseArray(ref);
            allExercises.$loaded()
            .then(function() { 
                angular.forEach(allExercises, function(value) {
                    vm.weeklyExercises['monday'].push(value.$id); 
                });
               
            });
            
            
//            allExercises.on("child_added", function(snapshot) {
//                vm.weeklyExercises[snapshot.key()] = snapshot.val();
//                console.log(vm.weeklyExercises);
//            });
            
//                var allExercises = $firebaseArray(ref);
//                ref.once("value", function(snapshot) {  
//                    var allExercises = $firebaseArray(ref);
//                    angular.forEach(allExercises, function(e) {
////                        vm.weeklyExercises[day].push(e);
//                    });     
//                })
//                allExercises.$loaded()
//                .then(function() {
//                    angular.forEach(allExercises, function(e) {
//                        vm.weeklyExercises[day].push(e);
//                    });       
//                });
                        
               
        }
    }
    
})();