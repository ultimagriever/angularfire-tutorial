var app = angular.module("angularFireApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseAuth) {
  var auth = $firebaseAuth();
  
  auth.$signInWithPopup("google").then(function(firebaseUser) {
    console.log("Signed in as:", firebaseUser.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
  
});
