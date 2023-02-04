import assert from 'assert';

import { makeIngredientFromRow } from '../src/cocktails.mjs';

describe('Ingredient', () => {
    it('can make ingredient from row', () => {
        const row = {
            Name: '',
            List: '',
            Description: '',
            'Ingredient Number': '1',
            Ingredient: 'gin',
            Quantity: '',
            'Quantity Unit': '',
            Garnish: ''
        };
        const ingredient = makeIngredientFromRow(row);
        assert.deepStrictEqual(ingredient, {
            number: 1,
            name: 'gin',
            quantity: null,
            quantityUnit: null,
            garnish: false,
        });
    });

    it('can parse garnish TRUE flag', () => {
        const row = {
            Name: '',
            List: '',
            Description: '',
            'Ingredient Number': '1',
            Ingredient: 'gin',
            Quantity: '',
            'Quantity Unit': '',
            Garnish: 'TRUE'
        };
        const ingredient = makeIngredientFromRow(row);
        assert.deepStrictEqual(ingredient, {
            number: 1,
            name: 'gin',
            quantity: null,
            quantityUnit: null,
            garnish: true,
        });
    });

    it('can parse quantities and units', () => {
        const row = {
            Name: '',
            List: '',
            Description: '',
            'Ingredient Number': '1',
            Ingredient: 'gin',
            Quantity: '22.5',
            'Quantity Unit': 'cl',
            Garnish: ''
        };
        const ingredient = makeIngredientFromRow(row);
        assert.deepStrictEqual(ingredient, {
            number: 1,
            name: 'gin',
            quantity: 22.5,
            quantityUnit: 'cl',
            garnish: false,
        });
    });
});