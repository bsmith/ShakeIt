import assert from 'assert';

import SearchService from '../services/SearchService.js';

const categoriesData = {"brandy":{"name":"Brandy Cocktails","members":{"brandyalexander":{"id":"brandyalexander","name":"Brandy Alexander","shortDescription":"A rich, creamy classic"},"applejack":{"id":"applejack","name":"Apple Jack","shortDescription":"Based on apple brandy"},"sidecar":{"id":"sidecar","name":"Sidecar","shortDescription":"Cognac and orange liqueur"}}},"whiskey":{"name":"Whisky Cocktails","members":{"oldfashioned":{"id":"oldfashioned","name":"Old Fashioned","shortDescription":"Traditional whiskey cocktail with bitters"},"godfather":{"id":"godfather","name":"Godfather","shortDescription":"Duo of whisky and amaretto"}}},"others":{"name":"Other Cocktails","members":{"americano":{"id":"americano","name":"Americano","shortDescription":"Sparkling drink of Campari and sweet vermouth"},"mudslide":{"id":"mudslide","name":"Mudslide","shortDescription":"Decadent treat of coffee and cream","imgUrl":"[url]"},"whiterussian":{"id":"whiterussian","name":"White Russian","shortDescription":"Rich, creamy and silly"},"journalist":{"id":"journalist","name":"The Journalist","shortDescription":"Bitter and sour"},"mojito":{"id":"mojito","name":"Mojito","shortDescription":"A traditional Cuban punch"},"aviation":{"id":"aviation","name":"Aviation","shortDescription":"A careful balance of gin and bitter cherry"}}}};

// const searchService = new SearchService();
// searchService.setIndexFromCategories(categoriesData);
// const results = searchService.searchByName("fashion");
// console.log(`results: ${results}`);

/* deep copy JSON-stringificable objects */
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/* Short bit of example data */
const shortCategoriesData = {
    "catId": { "name": "catName", members: {"cocktail1": {"id": "cocktail1", "name": "Cocktail One"}}}
};
const shortIndex = [{"id": "cocktail1", "name": "Cocktail One"}];

describe('SearchService', () => {
    let searchService;

    beforeEach(() => {
        searchService = new SearchService();
    });

    it('can extract index from short categories data', () => {
        const index = searchService.extractIndexFromCategories(shortCategoriesData);
        assert.deepStrictEqual(index, shortIndex);
    });

    it('can set index from short categories data', () => {
        searchService.setIndexFromCategories(shortCategoriesData);
        assert.deepStrictEqual(searchService.getRecipeIndex(), shortIndex);
    });

    it('can set index from larger categories data', () => {
        searchService.setIndexFromCategories(categoriesData);
        assert.strictEqual(searchService.getRecipeIndex().length, 11);
    });

    it('can insert missing id fields', () => {
        const categoriesData = deepCopy(shortCategoriesData);
        delete categoriesData['catId'].members['cocktail1'].id;
        searchService.setIndexFromCategories(categoriesData);
        assert.deepStrictEqual(searchService.getRecipeIndex(), shortIndex);
    });

    it('deduplicates cocktails in more than one category', () => {
        const categoriesData = deepCopy(shortCategoriesData);
        categoriesData['cat_two'] = {...categoriesData['catId']};
        searchService.setIndexFromCategories(categoriesData);
        assert.deepStrictEqual(searchService.getRecipeIndex(), shortIndex);
    });

    /* test searching */
    it('can find cocktail by prefix of name', () => {
        searchService.setIndexFromCategories(categoriesData);
        const result = searchService.searchByName('Mud');
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].name, 'Mudslide');
    });

    it('can find cocktail case-insensitively by name', () => {
        searchService.setIndexFromCategories(categoriesData);
        const result = searchService.searchByName('mud');
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].name, 'Mudslide');
    });

    it('can find cocktail by part of word in name', () => {
        searchService.setIndexFromCategories(categoriesData);
        const result = searchService.searchByName('slide');
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].name, 'Mudslide');
    });

    it('can find cocktail by second word in name', () => {
        searchService.setIndexFromCategories(categoriesData);
        const result = searchService.searchByName('Alexander');
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].name, 'Brandy Alexander');
    });
});
