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
        },
    },
    "others": {
        "name": "Other Cocktails",
        "members": { },
    }
};

let recipeKeys = Object.keys(recipeData)
    .filter(key => key !== "[template]");

for (const category of Object.values(categoriesData)) {
    for (const recipeKey of Object.keys(category.members)) {
        recipeKeys = recipeKeys.filter(key => key !== recipeKey);
    }
}

console.log(`Recipe keys not in categories: ${recipeKeys}`);
for (const recipeKey of recipeKeys) {
    categoriesData["others"].members[recipeKey] = true;
}

export default categoriesData;