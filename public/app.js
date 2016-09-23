var app = angular.module("angularFireApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject, $firebaseArray) {
  var refMsg = firebase.database().ref().child("messages");
  
  $scope.messages = $firebaseArray(refMsg);
  
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  }
});
