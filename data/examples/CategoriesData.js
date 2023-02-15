import recipeData from './RecipeData.js';

const categoriesData = {
    "american": {
        "name": "American",
        "members": {

        },
        "order": 2,
    },
    "european": {
        "name": "European",
        "members": {

        },
        "order": 3,
    },
    "unforgettables": {
        "name": "Unforgettables",
        "members": { },
        "order": 1,
    },
    "others": {
        "name": "Other Cocktails",
        "members": { },
        "order": 4,
    },
};

let recipeIds = Object.keys(recipeData)
    .filter(id => id !== "[template]");

for (const recipeId of recipeIds) {
    const recipe = recipeData[recipeId];
    if (recipe.category) {
        if (!categoriesData[recipe.category])
            categoriesData[recipe.category] = { name: recipe.category, members: { }};
        const category = categoriesData[recipe.category];
        category.members[recipeId] = true;
    }
}

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
            tags: recipe.tags,
        };
    }
}

export default categoriesData;