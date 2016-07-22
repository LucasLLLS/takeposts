var app = angular.module("takePosts", ['ngRoute']);
//app.controller("tpController", ['$scope', '$http', posts]);


app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'angular.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/single', {
            templateUrl : 'single.html',
            controller  : 'singleController'
        });
});

app.controller('mainController', ['$scope', '$http', posts]);

app.controller('singleController', function($scope) {

    $scope.posts = 'Look! I am an about page.';
});

function posts($scope, $http){

		setInterval(function(){
			console.log('opa');
			$http.get("puxa.php")
			.then(function(response) {
		    //$scope.myWelcome 	= response.data;
		    $scope.posts 		= response.data;
		});
	}, 2000);	
}