'use strict';

angular.module('quickDecision.controllers', []).
    controller('welcomeController', function ($scope) {

        $scope.foo = function(item) {
          console.log(item)
        };

        $scope.items = [{ name: 'first' }, { name: 'second' }];

        $scope.evaluate;
        $scope.project = "Cars";
        $scope.slider = 0.0;

        $scope.pairwiseComparisons = function () {
            console.log("click on the pairwiseComparisons")
        }

        $scope.directRating = function () {
            var alternaties = [
               { name: 'BMW', weight: 0.5 },
               { name: 'KIA', weight: 0.2 },
               { name: 'VAZ', weight: 0.2 },
               { name: 'ZAZ', weight: 0.1 }
            ];

            var evaluates = [];
            for (var i = 0; i < alternaties.length-1; i++) {
                for (var j = i + 1; j < alternaties.length; j++) {
                    evaluates.push(
                       { leftName: alternaties[i].name, left_Weight: alternaties[i].weight, rightName: alternaties[j].name, rightWeight: alternaties[j].weight}
                    )
                };
            };

            $scope.evaluate = evaluates;
        };
    });
