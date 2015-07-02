////////////////////
// POSTS CONTROLLER
flapperNews.controller('PostsController', [
    '$scope',
    'posts',
    'post',
    function($scope, posts, post) {
        $scope.post = post;
    }
]);
