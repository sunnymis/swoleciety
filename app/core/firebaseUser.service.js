(function() {
    'use strict'
    
    angular
        .module('swoleciety.core')
        .controller('firebaseUserService', firebaseUserService);
    
    firebaseUserService.$inject = ['FIREBASE_URL', '$firebaseAuth'];
    
    function firebaseUserService(FIREBASE_URL, $firebaseAuth) {
        var reference = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(reference);
        var service = {
            reference: reference,
            auth: auth
        }
        return service; 
    }
})