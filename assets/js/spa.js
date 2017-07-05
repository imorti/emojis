
      angular.module('Firstwalk', []);
      angular.module('Firstwalk').controller('BaseCtrl', ['$scope','$http', function ($scope, $http) {


        $http.get('/emoji').then(function (response){

            $scope.emojis = response.data;

        });


      }]);
