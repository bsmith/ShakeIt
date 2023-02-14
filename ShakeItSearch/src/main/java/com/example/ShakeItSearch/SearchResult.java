package com.example.ShakeItSearch;

import java.util.List;

public class SearchResult {
    private List<Recipe> recipes;

    public SearchResult() {
    }

    public SearchResult(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }
}

