import assert from 'assert';

import { makeCocktailFromRow } from '../src/cocktails.mjs';

describe('Cocktail', () => {
    describe('can make cocktail from row', () => {
        const row = {
            Name: 'Alexander',
            List: 'IBA Unforgettables',
            Description: 'Made with gin, cocoa liqueur (crème de cacao), and cream',
            'Ingredient Number': '',
            Ingredient: '',
            Quantity: '',
            'Quantity Unit': '',
            Garnish: ''
        };
        const cocktail = makeCocktailFromRow(row);
        assert.deepStrictEqual(cocktail, {
            name: 'Alexander',
            list: 'IBA Unforgettables',
            description: 'Made with gin, cocoa liqueur (crème de cacao), and cream',
            ingredients: [],
        });
    });
});