const baseURL = 'https://shakeit-322b6-default-rtdb.europe-west1.firebasedatabase.app/dataV1/';

export const getAllRecipes = async () => {
    const resp = await fetch(baseURL + '/recipes.json');
    return resp.json();
};

export const getRecipeById = async (recipeId) => {
    const resp = await fetch(baseURL + '/recipes/' + recipeId + '.json');
    return resp.json();
}; 