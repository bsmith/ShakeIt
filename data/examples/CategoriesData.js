import recipeData from './RecipeData.js';

const categoriesData = {
    "brandy": {
        "name": "Brandy Cocktails",
        "members": {
            "brandyalexander": true,
            "applejack": true,
            "sidecar": true,
        },
    },
    "whiskey": {
        "name": "Whisky Cocktails",
        "members": {
            "oldfashioned": true,
            "godfather": true,
        },
    },
    "others": {
        "name": "Other Cocktails",
        "members": { },
    }
};

let recipeIds = Object.keys(recipeData)
    .filter(id => id !== "[template]");

for (const category of Object.values(categoriesData)) {
    for (const recipeId of Object.keys(category.members)) {
        recipeIds = recipeIds.filter(id => id !== recipeId);
    }
}

console.log(`Recipe ids not in categories: ${recipeIds}`);
for (const recipeId of recipeIds) {
    categoriesData["others"].members[recipeId] = true;
}

/* Add the summary data about recipes */
for (const category of Object.values(categoriesData)) {
    for (const recipeId of Object.keys(category.members)) {
        const recipe = recipeData[recipeId];
        category.members[recipeId] = {
            id: recipeId,
            name: recipe.name,
            shortDescription: recipe.shortDescription,
            imgUrl: recipe.imgUrl,
        };
    }
}

export default categoriesData;