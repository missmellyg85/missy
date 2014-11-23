cookBook.controller('recipesController', ['$scope', '$firebase', '$window', function($scope, $firebase, $window) {
	var ref = new Firebase("https://sweltering-fire-4732.firebaseio.com/recipes");
  var sync = $firebase(ref);
  $scope.recipes = sync.$asArray();

  $scope.showAddForm = false;

	var recipes = this;

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
}]);