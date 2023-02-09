/* SearchService object */
/* Usage:
    const searchService = new SearchService();
    searchService.setIndexFromCategories(categoriesData);
    const results = searchService.searchByName(searchTerm);
*/

/* The recipeIndex is an array of recipe objects.  Recipe objects need an
    'id' and a 'name'.  We search the 'name' and the 'id' is important for
    the results */

/* Constructor */
const SearchService = function () {
    this.recipeIndex = [];
};

SearchService.prototype.getRecipeIndex = function () {
    return this.recipeIndex;
}

SearchService.prototype.extractIndexFromCategories = function (categoriesData) {
    const recipes = Object.values(categoriesData)
        .flatMap(category => Object.values(category.members));
    /* the category members are already in the correct format */
    return recipes;
}

SearchService.prototype.setIndexFromCategories = function (categoriesData) {
    this.recipeIndex = this.extractIndexFromCategories(categoriesData);
}

SearchService.prototype.searchByName = function (searchTerm) {
    return this.recipeIndex.filter(recipe => {
        return recipe.name.indexOf(searchTerm) !== -1;
    })
};

export default SearchService;