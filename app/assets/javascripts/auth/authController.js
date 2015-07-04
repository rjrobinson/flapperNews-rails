flapperNews.controller('Auth', [
    '$scope',
    '$state',
    'Auth',
    function($scope, $state, Auth) {

        $scope.logIn = function() {
            Auth.logIn($scope.user).then(function() {
                $state.go('home');
            });
        };

        $scope.register = function() {
            Auth.register($scope.user).then(funtion() {
                $state.go('home');
            });
        };
    }
])
