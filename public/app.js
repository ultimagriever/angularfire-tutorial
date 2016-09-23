var app = angular.module("angularFireApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref().child("data");
  
  var syncObject = $firebaseObject(ref);
  
  syncObject.$bindTo($scope, "data");
  
});
