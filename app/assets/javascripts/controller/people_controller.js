(function(){
  'use strict';
  angular.module('app').controller("peopleController", function($scope){

    $scope.people = [
      {
        name: "Paul Ryan",
        bio: "I'm a hiker",
        bioVisible: true

      },
      {
        name: "James Colbert",
        bio: " Traveling the world is my high",
        bioVisible: true
      }

    ];
    $scope.toggleBio = function(person){
      person.bioVisible = !person.bioVisible;
    };

    $scope.addPerson = function() {
        var person = {
          name: $scope.personName,
          bio: $scope.personBio,
          bioVisible: true
        };
        $scope.people.push(person);

        $scope.person = "";
        $scope.counter = $scope.length;
    };
  });
})();
