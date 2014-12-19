cookBook.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/recipes', {templateUrl:"../views/recipes/index.html"});
	$routeProvider.when('/recipes/edit/:recipeId', {templateUrl:"../views/recipes/edit.html"});
	$routeProvider.when('/edit', {templateUrl:"../views/recipes/edit.html"});
}]);