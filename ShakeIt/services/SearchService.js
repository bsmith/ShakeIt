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
    /* Insert recipes into a map by id to deduplicate them */

    const recipesById = new Map();
    for (const category of Object.values(categoriesData)) {
        for (const recipeId of Object.keys(category.members)) {
            const recipe = {...category.members[recipeId]};
            recipe.id = recipeId; /* add id if missing */
            recipesById.set(recipeId, recipe);
        }
    }

    return [...recipesById.values()];
}

SearchService.prototype.setIndexFromCategories = function (categoriesData) {
    this.recipeIndex = this.extractIndexFromCategories(categoriesData);
}

SearchService.prototype.searchByName = function (searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return this.recipeIndex.filter(recipe => {
        return recipe.name.toLowerCase().indexOf(lowerSearchTerm) !== -1;
    })
};

export default SearchService;