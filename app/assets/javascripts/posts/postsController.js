////////////////////
// POSTS CONTROLLER
console.log("Hello from postsCtrl")
flapperNews.controller('PostsController', ['$scope', '$stateParams', 'postFactory',

    function($scope, $stateParams, postFactory) {
        $scope.post = postFactory.posts[$stateParams.id]

        $scope.addComment = function() {
            if ($scope.body === '') {
                return
            };
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };
    }

]);
