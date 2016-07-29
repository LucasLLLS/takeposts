//VARIAVEIS GLOBAIS

var nomePost;


//JQUERY




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
        
        
            $http.get("puxa.php",
                {
                    params: 
                        {
                            'post': nomePost
                        }
                })
            .then(function(response) {
                $scope.posts  = response.data[0];
                $scope.comments = response.data[1];
                console.log(response.data[0]);
                //$scope.posts        = 'response.data';
            });
        
}

function posts($scope, $http){

		//setInterval(function(){
			$http.get("puxa.php")
			.then(function(response) {
		    //$scope.myWelcome 	= response.data;
		    $scope.posts 		= response.data;
            //console.log(response.data);
            jqueryInit();

		});


        $scope.verificaComment = verificaComment;

        function verificaComment(num){
            if(num < 1){
                return true;
            }else{
                return false;
            }
        }
	//}, 2000);
}


function jqueryInit(){

    setTimeout(function(){

        //console.log($('a.titulo-post').length);
        $('a.titulo-post').click(function(){

            nomePost = $(this).attr('data-post-id');
            //console.log(nomePost);
        });

    }, 200);
     
}


