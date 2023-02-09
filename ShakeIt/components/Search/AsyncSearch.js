import { useRef } from 'react';

import SearchService from '../../services/SearchService';
import { getAllCategories } from '../../services/CategoriesService';

export const useAsyncSearch = () => {
    const ref = useRef(null);
    if (!ref.current)
        ref.current = new AsyncSearch();
    return ref.current;
};

const AsyncSearch = function () {
    this.categoriesDataPromise = null;
    this.searchService = new SearchService();
};

/* If the searchService doesn't have an index, fetch one */
AsyncSearch.prototype.fetchIndex = function () {
    if (this.searchService.hasRecipeIndex())
        return Promise.resolve(true);
    if (this.categoriesDataPromise)
        return this.categoriesDataPromise;
    console.log(`Fetching categories data for search index`);
    return this.categoriesDataPromise =
        getAllCategories()
            .then(categoriesData => {
                console.log(`Received categories data for search index`);
                this.searchService.setIndexFromCategories(categoriesData);
                this.categoriesDataPromise = null;
            });
};

AsyncSearch.prototype.getSearchService = async function () {
    console.log(`getSearchService fetching Index`);
    await this.fetchIndex();
    console.log(`getSearchService got Index`);
    return this.searchService;
};