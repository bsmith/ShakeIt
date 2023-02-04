/* https://blog.logrocket.com/complete-guide-csv-files-node-js/ */
/* https://www.npmjs.com/package/csv-parser */

import fs from 'fs';
import csvParser from 'csv-parser';

const readCSVFile = function (filename) {
    const rows = [];

    const promise = new Promise((resolve, reject) => {
        console.log(`Reading CSV file ${filename}`)
        fs.createReadStream(filename)
            .pipe(csvParser())
            .on("data", (data) => {
                rows.push(data);
            })
            .on("end", () => {
                resolve(rows);
            });
        });

    return promise;
};

const writeJSONFile = function (filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data));
}

const makeCocktailFromRow = (row) => {
    const cocktail = {};
    cocktail.name = row['Name'];
    cocktail.list = row['List'];
    cocktail.description = row['Description'];
    cocktail.ingredients = [];
    return cocktail;
}

const makeIngredientFromRow = (row) => {
    const ingredient = {};
    ingredient.number = parseInt(row['Ingredient Number']);
    ingredient.name = row['Ingredient'];
    ingredient.quantity = parseFloat(row['Quantity']);
    ingredient.quantityUnit = row['Quantity Unit'];
    ingredient.garnish = row['Garnish'] == 'TRUE' ? true : false;
    return ingredient;
}

const makeCocktailsFromRows = (rows) => {
    const cocktails = [];
    let last_cocktail;
    for (const row of rows) {
        /* new cocktail */
        if (row['Name'] && row['Name'].length > 0) {
            last_cocktail = makeCocktailFromRow(row);
            cocktails.push(last_cocktail);
        }
        /* add ingredient to last cocktail */
        else {
            const ingredient = makeIngredientFromRow(row);
            last_cocktail.ingredients.push(ingredient);
        }
    }
    return cocktails;
}

const rows = await readCSVFile('./iba_cocktails.csv');
console.log(`Read ${rows.length} rows`);

const cocktails = makeCocktailsFromRows(rows);
console.log(`Made ${cocktails.length} cocktails`);

writeJSONFile('./iba_cocktails.json', cocktails);

console.log('*** done ***');