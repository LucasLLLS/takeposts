//VARIAVEIS GLOBAIS

nomePost = '';


//JQUERY


$(document).ready(function(){
    
    $('a.titulo-post').click(function(){
        nomePost = $(this).attr('data-post-id');
        console.log(nomePost);
    });

});

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

app.controller('singleController', ['$scope', '$http', singlePost]);


function singlePost($scope, $http) {

//    $scope.posts = 'Look! I am an about page.';
        
        setTimeout(function(){
            $http.get("puxa.php?post="+nomePost)
            .then(function(response) {
                //$scope.myWelcome  = response.data;
                $scope.posts        = response.data;
            });
        }, 500);
}

function posts($scope, $http){

		//setInterval(function(){
			console.log('opa');
			$http.get("puxa.php")
			.then(function(response) {
		    //$scope.myWelcome 	= response.data;
		    $scope.posts 		= response.data;
            console.log(response.data);
		});
	//}, 2000);
}



