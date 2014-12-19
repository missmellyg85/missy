cookBook.controller('recipesController', ['$scope', '$firebase', '$window', '$routeParams', function($scope, $firebase, $window, $routeParams) {
	var FB_URL = "https://sweltering-fire-4732.firebaseio.com/recipes/";
  var ref = new Firebase(FB_URL);
  var sync = $firebase(ref);
  $scope.recipes = sync.$asArray();

  $scope.showAddForm = false;

	var recipes = this;

  if($routeParams.recipeId){
    var recipe_ref = new Firebase(FB_URL+$routeParams.recipeId)
    $scope.recipe= $firebase(recipe_ref).$asObject();
  }

  $scope.addRecipe = function() {
    $scope.recipes.$add({title: $scope.newRecipe.title, description: $scope.newRecipe.description});
    $scope.addRecipeForm.$setPristine();
    $scope.newRecipe = {};
  }

  $scope.deleteRecipe = function(recipe) {
  	if($window.confirm("Are you sure? Once you delete this recipe there is no going back.")){
  		$scope.recipes.$remove(recipe);
  	}
  }

  $scope.setEditRecipe = function(recipe) {
    $scope.editRecipe = recipe;
  }
}]);