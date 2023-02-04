import { readCSVFile, writeJSONFile } from "./src/csv.mjs";
import { makeCocktailsFromRows } from "./src/cocktails.mjs";

const rows = await readCSVFile('./iba_cocktails.csv');
console.log(`Read ${rows.length} rows`);

const cocktails = makeCocktailsFromRows(rows);
console.log(`Made ${cocktails.length} cocktails`);

writeJSONFile('./iba_cocktails.json', cocktails);

const ingredientMap = new Map();
cocktails
    .flatMap(cocktail => {
        return cocktail.ingredients.map(ingredient => ingredient.name);
    })
    .forEach(ingredientName => {
        ingredientMap.set(ingredientName, true);
    });
const ingredientNames = [...ingredientMap.keys()].sort();
writeJSONFile('./iba_ingredients.json', ingredientNames);

console.log('*** done ***');