////////////////////////
// SERVICES / FACTORIES
flapperNews.factory('postFactory', [function() {
    var o = {
        posts: [{
            title: "Google.com",
            link: "http://www.google.com",
            upvotes: 10
        }]
    };
    return o

}]);
