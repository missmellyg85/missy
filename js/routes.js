cookBook.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/recipes', {templateUrl:"../views/recipes/index.html"});
}]);