import { searchBase } from "../searchConfig.js";

export const getSearchResults = (searchTerm, searchOptions) => {
    const { searchByName, searchByIngredient, searchByTag } = searchOptions;
    const searchURL =
        searchBase +
        "/search?searchTerm=" +
        searchTerm +
        "&byName=" +
        (searchByName ? "true" : "false") +
        "&byIngredient=" +
        (searchByIngredient ? "true" : "false") +
        "&byTag=" +
        (searchByTag ? "true" : "false");

  return fetch(searchURL)
    .then((results) => results.json())
}