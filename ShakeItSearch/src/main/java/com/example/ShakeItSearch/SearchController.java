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
    public SearchResult search(@RequestParam String searchTerm){
        System.out.printf("search: %s%n", searchTerm);
        List<Recipe> recipes = searchService.searchRecipes(searchTerm);
        return new SearchResult( recipes);
    }

}
