import fs from 'fs';
import path from 'path';

import categoriesData from "../examples/CategoriesData.js";
import recipeData from "../examples/RecipeData.js";

export const writeJSONFile = function (filename, data) {
    const pathname = path.resolve(filename);
    console.log(`Writing to ${pathname}`);
    fs.writeFileSync(pathname, JSON.stringify(data));
};

delete recipeData['[template]'];

writeJSONFile('examples/recipes.json', recipeData);
writeJSONFile('examples/categories.json', categoriesData);
console.log(`Finished`);