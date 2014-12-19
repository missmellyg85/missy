cookBook.directive('editRecipe', function() {
  return {
    templateUrl: 'views/recipes/edit.html',
    scope: {
    	recipe: '=recipe',
    	recipes: '=recipes'
    }
  };
});