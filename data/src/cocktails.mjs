export const makeCocktailFromRow = (row) => {
    const cocktail = {};
    cocktail.name = row['Name'];
    cocktail.list = row['List'];
    cocktail.description = row['Description'];
    cocktail.ingredients = [];
    return cocktail;
}

export const makeIngredientFromRow = (row) => {
    const ingredient = {};
    ingredient.number = parseInt(row['Ingredient Number']);
    ingredient.name = row['Ingredient'];
    ingredient.quantity = row['Quantity'] ? parseFloat(row['Quantity']) : null;
    ingredient.quantityUnit = row['Quantity Unit'] || null;
    ingredient.garnish = row['Garnish'] == 'TRUE' ? true : false;
    return ingredient;
}

export const makeCocktailsFromRows = (rows) => {
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