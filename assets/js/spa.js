
      angular.module('Firstwalk', []);
      angular.module('Firstwalk').controller('BaseCtrl', ['$scope', function ($scope) {

          $scope.emojis = [{
              id: 234233234,
              text: ':-)'
          },
          {
              id: 234233235,
              text: ':p'
          },
          {
              id: 234233236,
              text: '8'
          },
          {
              id: 234233237,
              text: ':'
          }];
      }]);
