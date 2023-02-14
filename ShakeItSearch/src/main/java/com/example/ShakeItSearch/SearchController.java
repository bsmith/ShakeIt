package com.example.ShakeItSearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SearchController {
    @Autowired
    SearchService searchService;

    @GetMapping("/search")
    public SearchResult search(
            @RequestParam String searchTerm,
            @RequestParam(required = false) Boolean  byName,
            @RequestParam(required = false) Boolean  byTag,
            @RequestParam(required = false) Boolean  byIngredient

    ){
        if (byName == null)
            byName = true;
        if (byTag == null)
            byTag = true;
        if (byIngredient == null)
            byIngredient= true;
        System.out.printf("search: %s %s %s %s%n", searchTerm, byName, byTag, byIngredient);
        List<Recipe> recipes = searchService.searchRecipes(searchTerm, byName, byTag, byIngredient);
        return new SearchResult( recipes);
    }

}
